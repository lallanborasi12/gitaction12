pipeline {
    agent any

    environment {
        CI = "false"
        DEPLOY_DIR = "/var/www/html"
        BACKUP_DIR = "/var/www/backup"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/lallanborasi12/gitaction12.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Backup Current Website') {
            steps {
                sh '''
                    sudo mkdir -p ${BACKUP_DIR}

                    if [ "$(ls -A ${DEPLOY_DIR})" ]; then
                        sudo tar -czf ${BACKUP_DIR}/backup-$(date +%Y-%m-%d-%H-%M-%S).tar.gz ${DEPLOY_DIR}
                    fi
                '''
            }
        }


        stage('Deploy') {
            steps {
                sh '''
                    sudo rm -rf ${DEPLOY_DIR}/*

                    sudo cp -r build/* ${DEPLOY_DIR}/

                    sudo chown -R jenkins:jenkins ${DEPLOY_DIR}
                '''
            }
        }


        stage('Restart Apache') {
            steps {
                sh '''
                    sudo systemctl restart apache2
                '''
            }
        }

    }
}