pipeline {
    agent any

    tools {
        jdk 'JDK17'
        nodejs 'NODE18'
    }

    environment {
        DOCKER_IMAGE = "tawfeeq421/company-task"
        DOCKER_TAG = "${BUILD_NUMBER}"
        AWS_REGION = 'us-west-2'
        CLUSTER_NAME = 'my-cluster'
        NAMESPACE = 'default'
        IMAGE = "${DOCKER_IMAGE}:${DOCKER_TAG}"
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
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-cred') {
                        def app = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                        app.push()
                    }
                }
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

        stage('Deploy to EKS') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-creds'
                ]]) {
                    sh '''
                    set -e

                    echo "Updating kubeconfig..."
                    aws eks --region $AWS_REGION update-kubeconfig --name $CLUSTER_NAME

                    echo "Checking cluster connection..."
                    kubectl get nodes

                    echo "Create namespace if not exists..."
                    kubectl get ns $NAMESPACE || kubectl create ns $NAMESPACE

                    echo "Deploy Kubernetes manifests..."
                    kubectl apply -f deployment.yml -n $NAMESPACE
                    kubectl apply -f service.yml -n $NAMESPACE
                    kubectl apply -f ingress.yml -n $NAMESPACE

                    echo "Deployment completed successfully!"
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
                channel: "#task",
                color: "good",
                message: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}\nDocker Image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
            )
        }

        failure {
            slackSend(
                channel: "#task",
                color: "danger",
                message: "❌ FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}\nCheck Logs: ${env.BUILD_URL}"
            )
        }
    }
}