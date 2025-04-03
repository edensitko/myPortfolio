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
                git 'https://github.com/edensitko/myPortfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:$VERSION .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKERHUB_USER/$IMAGE_NAME:$VERSION
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
