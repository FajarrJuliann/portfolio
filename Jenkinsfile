pipeline {
    agent any

    environment {
        REGISTRY = "registry.fajarjuliansyah.store"
        IMAGE = "port-fajar"
        TAG = "latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $REGISTRY/$IMAGE:$TAG .
                '''
            }
        }

        stage('Login Registry') {
            steps {
                sh '''
                echo "fajarjuliansyah123" | docker login $REGISTRY -u fajar --password-stdin
                '''
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