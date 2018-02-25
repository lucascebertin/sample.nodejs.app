module.exports = {                                  
  testEnvironment: 'node',       
  collectCoverage: true,         
  coverageThreshold:{            
    global:{                    
      branches:85,             
      functions:85,            
      lines:85,                
      statements:85            
    }                             
  },                  
  coveragePathIgnorePatterns: [
    'dist'
  ],             
  collectCoverageFrom:[          
    'src/**/*.js'                
  ],                               
  testMatch:[                    
    '**/?(*.)(spec).js?(x)'       
  ],                               
  testPathIgnorePatterns:[       
    '<rootDir>/dist',
    '<rootDir>/node_modules'      
  ],
  cacheDirectory: './cache'                        
}                                  