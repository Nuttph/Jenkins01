pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                echo 'Initializing...'
                checkout scm  // สำคัญมาก เพื่อให้มี repo อยู่ใน workspace
            }
        }

        stage('Tier 1') {
            steps {
                echo "Running Tier 1 tests"
                sh 'git status'
                sh 'git checkout main'
                sh 'git pull origin main'
            }
        }

        stage('Check File Content') {
            steps {
                script {
                    def fileContent = readFile('text.txt').trim()
                    echo "File content is: ${fileContent}"
                    env.SHOULD_MERGE = (fileContent == "testpipeline") ? "true" : "false"
                }
            }
        }

        stage('Tier 2 (Conditional Merge)') {
            when {
                expression { env.SHOULD_MERGE == "true" }
            }
            steps {
                echo "Merging dev-test into main"
                sh 'git fetch origin dev-test'
                sh 'git merge origin/dev-test'
            }
        }
    }
}
