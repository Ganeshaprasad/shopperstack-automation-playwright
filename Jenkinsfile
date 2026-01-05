pipeline {
  agent any
  
  environment {
    CI = 'true'
  }
  
  stages {
    stage('Checkout') {
      steps {
        echo '🔄 Checking out code from private repo...'
        checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[
            url: 'https://github.com/Ganeshaprasad/shopperstack-automation-playwright.git',
            credentialsId: 'auth-token'
          ]]
        ])
      }
    }
    
    stage('Install Dependencies') {
      steps {
        echo '📦 Installing npm packages...'
        bat '''
          npm ci --cache .npm --prefer-offline || npm install
        '''
      }
    }
    
    stage('Install Playwright') {
      steps {
        echo '🌐 Installing Playwright browsers...'
        bat 'npx playwright install --with-deps'
      }
    }
    
    stage('Run Tests') {
      steps {
        echo '🧪 Running Playwright tests...'
        bat '''
          npx playwright test ^
            --reporter=list ^
            --reporter=junit ^
            --reporter=html ^
            --project=chromium
        '''
      }
    }
    
    stage('Publish Reports') {
      steps {
        echo '📊 Publishing results...'
        script {
          junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
          publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Report'
          ])
          archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*.xml', 
                           allowEmptyArchive: true
        }
      }
    }
  }
  
  post {
    always {
      echo '🧹 Cleaning up...'
      deleteDir()
    }
    success {
      echo '✅ ALL TESTS PASSED! 🎉'
    }
    failure {
      echo '❌ TESTS FAILED!'
    }
  }
}
