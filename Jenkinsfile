pipeline {
    agent {
        docker {
            image 'node:10.15.0'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('install') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}