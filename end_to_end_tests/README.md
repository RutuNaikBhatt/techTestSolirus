# techTestSolirus

This repo is created for tech test.
Tools used: Vscode, Cypress, Github
#===========================================================================================================
Cypress installation steps:
If this is your first time installing Cypress please follow all the steps, else you can jump to the next section.
1) Please install node.js based on your system requirements. 
   The link to install and follow the steps are here -> https://nodejs.org/en/download/
   Run the .msi from downloads folder.
   On your terminal run "node --version" to check the node.js has been install 
2) Run "npm init" under your project folder and follow the instructions on your terminal to create
   package.json file. 
3) Install cypress -> https://docs.cypress.io/guides/getting-started/installing-cypress#Installing
   Run "npm install cypress --save-dev" on your terminal.

#===========================================================================================================
After successfully installing Cypress to your machine. Please follow the steps to clone the repository and run the tests on your machine.

1) Clone the repo using "git clone https://github.com/RutuNaikBhatt/techTestSol.git" to your machine
   or you can also clone the repository on your Vscode using source control -> https://code.visualstudio.com/docs/editor/github
2) On Vscode terminal, ensure that your folder path is pointing to "e2e_Tests" and run "npm run cypress:open".
   This should open Cypress test runner where you can find "holidayEntitlement.feature" file. Upon clicking the feature file the test should start running on chrome browser.
