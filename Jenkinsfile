pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'edensit139'
        IMAGE_NAME = 'eden-app'
        VERSION = 'v1.0.0'
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
                        echo "$DOCKER_PASS" | docker login -u "$DOCKERHUB_USER" --password-stdin
                        docker push "$DOCKERHUB_USER/$IMAGE_NAME:$VERSION"
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
