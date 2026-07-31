const TimelineReporter =require('wdio-timeline-reporter');

exports.config={

    runner:'local',
    framework:'cucumber',
    specs:[
        '../features/**/*.feature'
    ],
    exclude:[],

    maxInstances:10,

    capabilities:[{
        browserName: 'chrome',
        acceptInsecureCerts:true,
        'goog:chromeOptions':{
            args:['--headless','--window-size=1920,1080','--disable-extensions']
        }},
    {
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts:true,
        'ms:edgeOptions':{
            args:['--headless','--window-size=1920,1080']
        }
    }
    ],
    bail:0,
    logLevel:'error',

    baseUrl: 'https://www.saucedemo.com',

    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,


    reporters: ['spec',['allure',{outputDir:'./src/allure-results'}]],
    
    services: [],

    cucumberOpts:{
        require:['./src/step-definitions/**/*.js']
    },
    afterScenario:async function(world,result){

        if(!result.passed){
    
            await browser.saveScreenshot('./cucumber-screenshots/error.png')
        }
    }

}