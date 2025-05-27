pipeline{
    stages{
        stage('Start'){
            steps{
                echo 'Pipeline started'
            }
        }
        stage('Read File Content') {
            steps{
                script {
                    // Define the path to the file
                    def filePath = 'path/to/your/file.txt'
                    
                    // Read the file content
                    def fileContent = readFile(filePath)
                    
                    // Print the content to the console
                    echo "File Content: ${fileContent}"
                }
            }
        }
        stage('End'){
            steps{
                echo 'Pipeline completed'
            }
        }
    }
}