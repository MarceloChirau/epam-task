const {TimelineService}=require('wdio-timeline-reporter/timeline-service')


  exports.config = {
   
    runner: 'local',
    
    specs: [

        '../test/**/*.js'
    ],

    exclude: [

    ],
    
    maxInstances: 10,
  
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts:true,
        maxInstances:5,
        'goog:chromeOptions':{
            args:['--headless','--window-size=1920,1080','--disable-extensions']
        }
    },
{
    browserName: 'MicrosoftEdge',
    acceptInsecureCerts:true,
    maxInstances:5,
    'ms:edgeOptions':{
        args:['--headless','--window-size=1920,1080']
    }

}
],

   
    logLevel: 'error',
    
    bail: 0,
   
    baseUrl: 'https://www.saucedemo.com',
    
    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
    
    services: [[TimelineService]],
    
    framework: 'mocha',
    
   
    reporters: ['spec',['timeline',{outputDir:'./src/outputTest'}]],

   
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
afterTest:async function(test,context,result){

    if(!result.passed){

        await browser.saveScreenshot('./screenshots/error.png')
    }
}
   
}

