pipeline {
    agent any

    environment {
        REGISTRY = "registry.fajarjuliansyah.store"
        IMAGE = "port-fajar"
        TAG = "latest"
        SERVER = "ubuntu@43.173.30.124"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/FajarrJuliann/portfolio.git'
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                docker build -t $REGISTRY/$IMAGE:$TAG .
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

        stage('Deploy 🚀') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no $SERVER "
                docker pull $REGISTRY/$IMAGE:$TAG &&
                docker stop port-fajar || true &&
                docker rm port-fajar || true &&
                docker run -d --name port-fajar -p 3000:80 $REGISTRY/$IMAGE:$TAG
                "
                """
            }
        }
    }
}