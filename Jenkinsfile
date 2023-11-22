pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Test Suite') {
            agent{
                label "Built-In Node"
            }
            steps {
                git url: 'https://github.com/gabrielmoris/cypress-course.git'
                bat 'npm install'
                bat 'npm update'
                bat 'npm run webdriver-uni-store-dashboard'
            }
        }
    }
}