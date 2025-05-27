pipeline {
    agent any
    stages {
        stage('Initialize') {
            steps {
                echo 'Initializing...'
            }
        }

        stage('Tier 1') {
            steps {
                echo "Running Tier 1 tests"
                sh 'git checkout main'
                sh 'git pull origin main'
            }
        }

        stage('Check File Content') {
            steps {
                script {
                    def fileContent = readFile('text.txt').trim()
                    echo "File content is: ${fileContent}"
                    
                    // Save to environment variable for next stages
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
                sh 'git merge origin/dev-test'
            }
        }
    }
}
