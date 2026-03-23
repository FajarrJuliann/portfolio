pipeline {
    agent any

    environment {
        REGISTRY = "registry.fajarjuliansyah.store"
        IMAGE = "port-fajar"
        TAG = "latest"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/FajarrJuliann/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $REGISTRY/$IMAGE:$TAG .
                '''
            }
        }

        stage('Login Registry') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-registry',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login $REGISTRY -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker push $REGISTRY/$IMAGE:$TAG
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f port-fajar || true
                docker run -d -p 3000:80 --name port-fajar $REGISTRY/$IMAGE:$TAG
                '''
            }
        }
    }
}