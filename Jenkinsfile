pipeline {
    agent any
    tools {
        jdk 'jdk17'
        nodejs 'node16'
    }
    
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout from Git') {
            steps {
                git branch: 'main', url: 'https://github.com/tawfeeq421/company-task.git'
            }
        }
        
        stage('Docker Build & Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub', toolName: 'docker') {
                        sh 'docker build -t reddit1 .'
                        sh 'docker tag reddit1 tawfeeq421/company1:task'
                        sh 'docker push tawfeeq421/company1:task'
                    }
                }
            }
        }
        
        stage('Deploy to Container') {
            steps {
                sh 'docker run -d --name reddit -p 3000:3000 tawfeeq421/company1:task'
            }
        }
    }
}
