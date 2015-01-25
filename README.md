# vertex-reporter
![alt tag](http://i.imgur.com/bhqXoKp.png)

Reporting tool that relies on protractor , selenium webdriver / jasmine / jasmine reporters. Basically a test suit XML JS/XML/HTML visualizer.

This javascript tool basically takes a Jasmine reports XML file and displays it directly on the website that the developer is developing and wants to E2E test. It asynchrony checks for new test results from the testing server and the developer can see it while he codes.


#How to use it
1. Step add to the website:
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="vertex-reporter.js"> 
<link href="vertex-reporter.css" rel="stylesheet" type="text/css" />
```

2. Inside vertex-reporter.js configure the URL where the jasmine-reporters output XML fiel is generated (usually on a http server)
```
var URL_TO_JASMINE_REPORTERS_XML_OUTPUT = "http://CORS-FRIENDLY-URL/TEST-Jasmine-Reporters-output.xml";
```

#Stack
Jasmine > Protractor > Jasmine Reports to XML > Vertex-Reporter

on
Selenium WebDriver

#TUTORIAL
0. Requirements:
Node.js and NPM package manager
https://sub.watchmecode.net/getting-started-with-nodejs-installing-and-writing-your-first-code/

1. Install protractor and the selenium webdriver
```
npm install -g protractor
```

2. Start the webdriver server
```
webdriver-manager update
webdriver-manager start
```

3. Install jasmine-reporters (1.0 for protractor support?!)
```
npm install jasmine-reporters@~1.0.0
npm install jasmine-reporters
```


4. Setup the XML output folder to be in /var/www so that the website can access it (for exampel install apache or run python -m SimpleHTTPServer 8080 in the folder)


5. Add Vertex-reporter to your website

6. enjoy live e2e test reports :)




