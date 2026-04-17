pipeline{
    agent any
    tools{
        jdk 'JDK17'
        nodejs 'NODE16'
    }
    environment{
        DOCKER_IMAGE = "tawfeeq421/company-task"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }
    stages{
        stage('Clean Workspace'){
            steps{
                cleanWs()
            }
        }
        stage('Git Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/tawfeeq421/company-task.git'
            }
        }
        stage('Install Dependency'){
            stage{
                sh 'npm install'
            }
        }
        stage('Jest Test'){
            stage{
                sh 'npm test -- --watchAll=false --coverage'
            }
        }
        stage('SonarQube Analysis'){
            environment {
                scannerHome = tool 'sonar'
            }
            steps{
                withSonarQubeEnv('sonarserver'){
                    sh "${scannerHome}/bin/sonar-scanner"
                }

            }
        }
        stage('Quality Gate'){
            steps{
                timeout(time: 1, unit: 'HOURS'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Trivy FS Scan'){
            steps{
                sh '''
                trivy fs . \
                --severity HIGH,CRITICAL \
                --format table \
                -o trivy-report.txt
                '''
            }
        }
        stage('Docker Build & Push'){
            steps{
                script{
                    withDockerRegistry('credentialsId: 'docker-cred'){
                        sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                        sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                    }
                }
            }
        }
        stage('Image Scan){
            steps{
                sh 'trivy image ${DOCKER_IMAGE}:${DOCKER_TAG}'
            }
        }
    }
}