pipeline {
    agent any

    environment {
        APP_NAME = "MyCoolApp"
        BUILD_DIR = "dist"
    }

    stages {
        stage('Start') {
            steps {
                echo "🚀 Starting Pipeline for ${APP_NAME}"
            }
        }

        stage('Checkout') {
            steps {
                echo "📦 Checking out source code..."
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "🔨 Building project..."
                // ตัวอย่างถ้าใช้ Node.js:
                // sh 'npm install && npm run build'
                echo "✅ Build complete."
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                // ตัวอย่างถ้าใช้ Node.js:
                // sh 'npm test'
                echo "✅ Tests passed."
            }
        }

        stage('Static Analysis') {
            steps {
                echo "🔍 Running static code analysis..."
                // เช่นใช้ ESLint หรือ SonarQube
                echo "📊 Code analysis complete."
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo "📦 Archiving build output from ${BUILD_DIR}..."
                archiveArtifacts artifacts: "${BUILD_DIR}/**", fingerprint: true
            }
        }

        stage('Deploy to Dev') {
            steps {
                echo "🚀 Deploying to Dev server..."
                // sh './deploy-dev.sh' หรือใช้ SCP/SSH
                echo "✅ Deployed to Dev!"
            }
        }

        stage('Notify') {
            steps {
                echo "📢 Sending notification to team..."
                // เช่น notify Discord, Slack หรือ email
                echo "✅ Notification sent."
            }
        }
    }

    post {
        success {
            echo "🎉 Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Please check the logs."
        }
        always {
            echo "📁 Cleaning up temporary files..."
            // sh 'rm -rf temp'
        }
    }
}
