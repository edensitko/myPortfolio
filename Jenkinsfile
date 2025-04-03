pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'edensit139'
        IMAGE_NAME = 'eden-app'
        VERSION = 'v1.0.0'
    }

    stages {
        stage('Clone Repo') {
            steps {
               git branch: 'main', url: 'https://github.com/edensitko/myPortfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:$VERSION .'
            }
        }

        stage('Push to DockerHub') {
             steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u edensit139 --password-stdin
                        docker push edensit139/eden-app:v1.0.0
                    '''
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook deploy-playbook.yml -i inventory.ini'
            }
        }
    }
}
