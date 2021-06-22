# Affinity & Tableau Connection
This repository contains code to create a front end that sends a request to Affinity's API to gather data. This data is then formatted and can be exporeted into a readable format for Tableau. See additional documentation and examples ![here](https://tableau.github.io/webdataconnector/docs/wdc_tutorial)

## Set Up
To begin be sure to have Git as well as npm and node installed. Get the WDC SDK as well. Detailed instructions for this setup can be found ![here](https://github.com/tableau/webdataconnector.git)
Additionally note that the affinity.js file does not contain the Affinity API Key. It is essential that the API Key is not pushed to Git in order to keep the Affinity data secure. It can be found in Clocktower's Affinity. Add this to the affinity.js by filling out the API_KEY variable prior to launching the site.

## Launching the site
The site can be launched by navigating to the webdataconnector directory in terminal and running npm start. Proceed by navigating to http://localhost:8888/Simulator/index.html in the browser. 

## Remaining Work
The site has a CORS error when the API request is made.This needs to be fixed. After this, the data should be formatted to match the ideal formatting for Tableau. Finally follow the steps bellow to connect the site to Tableau Server.

## Connecting to Tableau
Once the site is properly loading data from Affinity, the next step will be to connect this data to Tablea. This can be done by launching Tableau Desktop. Under connect there is a Servers tab and within that select More Servers... and then select Web Data Connect. In the pop up that appears paste the url for the website.

# Information on the Tableau Web Data Connector SDK
[![Tableau Supported](https://img.shields.io/badge/Support%20Level-Tableau%20Supported-53bd92.svg)](https://www.tableau.com/support-levels-it-and-developer-tools) [![Coverage Status](https://coveralls.io/repos/github/tableau/webdataconnector/badge.svg?branch=master)](https://coveralls.io/github/tableau/webdataconnector?branch=master) [![Build Status](https://travis-ci.org/tableau/webdataconnector.svg?branch=master)](https://travis-ci.org/tableau/webdataconnector)

Use the Tableau Web Data Connector (WDC) to connect to web data sources from Tableau. This is the repository for the Tableau WDC SDK, which includes developer samples and a simulator to help you create your connectors.

[Visit the project website and documentation here](https://tableau.github.io/webdataconnector/).

Want to contribute to the WDC? See our [contribution guidelines](http://tableau.github.io/).
