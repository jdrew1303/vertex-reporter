# vertex-reporter
![alt tag](http://i.imgur.com/bhqXoKp.png)

Reporting tool that relies on protractor , selenium webdriver / jasmine / jasmine reporters. Basically a test suit XML JS/XML/HTML visualizer.

This javascript tool basically takes a Jasmine reports XML file and displays it directly on the website that the developer is developing and wants to E2E test. It asynchrony checks for new test results from the testing server and the developer can see it while he codes.


#How to use it
1. Step add to the website:
```
<script src="vertex-reporter.js"> 
```

2. Inside configure the URL where the jasmine-reporters output XML fiel is generated (usually on a http server)


#Stack
Jasmine > Protractor > Jasmine Reports to XML > Vertex-Reporter

on
Selenium WebDriver

#TUTORIAL
1. Install the selenium webdriver


2. Install protractor

3. Install jasmine-reporters

4. Setup the XML output folder to be in /var/www so that the website can access it (for exampel install apache or run python -m SimpleHTTPServer 8080 in the folder)

5. Add Vertex-reporter to your website

6. enjoy live e2e test reports :)




