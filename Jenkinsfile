pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/charlash555/Employee-Management-Admin-Panel.git'
            }
        }

      stage('Install Dependencies') {
    steps {
        sh 'cd Employee-Management-Admin-Panel && npm install'
    }
}

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
