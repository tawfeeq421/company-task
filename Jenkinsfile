pipeline{
    agent any
    tools{
        jdk 'JDK17'
        nodejs 'NODE18'
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
                    withDockerRegistry('', 'docker-cred'){
                        sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                        sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                    }
                }
            }
        }
        stage('Image Scan){
            steps{
                sh """
                trivy image \
                --severity HIGH,CRITICAL \
                --format table \
                -o trivyimage.txt \
                ${DOCKER_IMAGE}:${DOCKER_TAG} || true
                """
            }
        }
    }
    post{
        always{
            archiveArtifacts artifact: 'trivy-report.txt', fingerprint: true
        }
        success {
            slackSend(
                channel: "#task",
                color: "good"
                message: "✅ SUCCESS ${env.JOB_NAME} #${env.BUILD_NUMBER}\n Report Geneated"
            )
        }
        failure{
            slackSend(
                channel: "#task",
                color: "danger",
                message: "❌ FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}\nCheck trivy. ${env.BUILD_URL}"
            )
        }
    }
}