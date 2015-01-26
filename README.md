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

And inside your protractor.conf:
```
onPrepare: function() {
    // The require statement must be down here, since jasmine-reporters@1.0
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
        new jasmine.JUnitXmlReporter('/pathtoToYurWWWFolder/var/www/tests/output.xml', true, true)
    );
}
```
OPTIONAL (you can configure protractor.conf to export the XML  test results directly to the production server and directly access it) or for CORS:
4. Setup the XML output folder to be in /var/www so that the website can access it (for exampel install apache or run python -m SimpleHTTPServer 8080 in the folder).

For example install python and:
```
cd /pathtoToYurWWWFolder/var/www/tests/
python -m SimpleHTTPServer 8080
```
When you do this than you have to disable CORS protection if your website is on another domain or port!!!

The BEST WAY:
Simply create a file simple-cors-http-server.py (or whatever) and put the following inside:
```
#! /usr/bin/env python2
from SimpleHTTPServer import SimpleHTTPRequestHandler
import BaseHTTPServer

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    BaseHTTPServer.test(CORSRequestHandler, BaseHTTPServer.HTTPServer)
```

and run it ! thats it it should bypass the cross reference protection

6. enjoy live e2e test reports :)




