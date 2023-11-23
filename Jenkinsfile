pipeline {
    agent any

    tools {nodejs "node"}

    environment {
    LC_ALL = 'en_US.UTF-8'
    LANG = 'en_US.UTF-8'
    LANGUAGE = 'en_US.UTF-8'
    }

    stages {
        stage('Test Suite') {
            agent{
                label "built-in"
            }
            steps {
                git url: 'https://github.com/gabrielmoris/cypress-course.git'
                bat 'npm install'
                bat 'npm update'
                bat 'npm run %Script%'
            }
        }
    }
}