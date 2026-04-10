pipeline {
    agent any
    tools {
        jdk 'JDK17'
        nodejs 'NODE16'
    }
    environment {
        DOCKER_IMAGE = "tawfeeq421/task"
        DOCKER_TAG = '${BUILD_NUMBER}'
    }
    stages{
        stage('Clean Workspace'){
            steps{
                cleanWs()
            }
        }
        stage('Git Checkout'){
            steps[
                git branch: 'mian', url: 'https://github.com/tawfeeq421/company-task.git'
            ]
        }
        stage('Install Dependency'){
            steps{
                sh 'npm install'
            }
        }
        stage('Jest Test'){
            steps{
                sh 'npm test -- --watchAll=false --coverage'
            }
        }
        stage('SonarQube Analysis'){
            environment{
                sccannerHome = tool 'sonar'
            }
            steps{
                withSonarQubeEnv('sonarserver'){
                    sh '${scannerHome}/bin/sonar-scanner'
                }
            }
        }
        stage('Quality Gate'){
            steps{
                timeout(time: 1, unit: 'HOURS'){
                    waitForQualityGate abordPipeline: true
                }
            }
        }
    }
}