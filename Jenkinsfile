pipeline {
    agent any
    stages {
        stage('Show File Content') {
            steps {
                // อ่านไฟล์ hello.txt แล้วพิมพ์เนื้อหาใน console log
                script {
                    def content = readFile 'hello.txt'
                    echo "Content of hello.txt:\n${content}"
                }
            }
        }
    }
}
