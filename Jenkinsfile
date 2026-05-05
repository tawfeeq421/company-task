pipeline {
    agent any

    tools {
        jdk 'JDK17'
        nodejs 'NODE16'
    }

    environment {
        DOCKER_IMAGE = "tawfeeq421/company-task"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tawfeeq421/company-task.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'sonar'
            }
            steps {
                withSonarQubeEnv('sonarserver') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Trivy FS Scan') {
            steps {
                sh '''
                trivy fs . \
                --severity HIGH,CRITICAL \
                --format table \
                -o trivy-report.txt || true
                '''
            }
        }

        stage('Docker Build & Push') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh """
                trivy image \
                --severity HIGH,CRITICAL \
                --format table \
                -o trivy-image-report.txt \
                ${DOCKER_IMAGE}:${DOCKER_TAG} || true
                """
            }
        }

        stage('Docker Push'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId : 'docker-cred',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]){
                    sh '''
                    set -e 
                    printf "%s" "$PASS" | docker login -u "$USER" --password-stdin https://index.docker.io/v1/
                    docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                    docker push ${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'trivy-report.txt, trivy-image-report.txt', fingerprint: true
        }

        success {
            slackSend(
                channel: "#amazon",
                color: "good",
                message: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}\nDocker Image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
            )
        }

        failure {
            slackSend(
                channel: "#amazon",
                color: "danger",
                message: "❌ FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}\nCheck Logs: ${env.BUILD_URL}"
            )
        }
    }
}
