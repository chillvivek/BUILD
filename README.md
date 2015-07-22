<img src = "(https://github.com/SAP/BUILD/tree/master/blob/master/docs/images/BUILD_Logo_Light.png?raw=true" height="128"> 

# Overview 
BUILD (formerly known as Project Norman) is an open-source, cloud-based and social platform that enables users, even those with no UI development knowledge, to easily create fully interactive prototypes with realistic data, share them with colleagues and consolidate this feedback without writing a line of code. 

For a more detailed description of BUILD, see the [BUILD Overview](https://github.com/SAP/BUILD/wiki/BUILD-Overview).

# Modules in Build
**Foundation Modules**
+ [angular-sap-common-directives](https://github.com/SAP/BUILD/tree/master/angular-sap-common-directives)
+ [angular-sap-common-services](https://github.com/SAP/BUILD/tree/master/angular-sap-common-services)
+ [angular-sap-ui-elements](https://github.com/SAP/BUILD/tree/master/angular-sap-ui-elements)
+ [angular-sap-common-filters](https://github.com/SAP/BUILD/tree/master/angular-sap-common-filters)
+ [node-sap-mongo-config](https://github.com/SAP/BUILD/tree/master/node-sap-mongo-config)
+ [node-sap-common](https://github.com/SAP/BUILD/tree/master/node-sap-common)
+ [node-sap-app-server](https://github.com/SAP/BUILD/tree/master/node-sap-app-server)
+ [node-sap-mailer](https://github.com/SAP/BUILD/tree/master/node-sap-mailer)
+ [node-sap-secure-store](https://github.com/SAP/BUILD/tree/master/node-sap-secure-store)
+ [node-sap-upload](https://github.com/SAP/BUILD/tree/master/node-sap-upload)
+ [node-sap-mongo](https://github.com/SAP/BUILD/tree/master/node-sap-mongo)
+ [node-sap-promise](https://github.com/SAP/BUILD/tree/master/node-sap-promise)
+ [node-sap-logging](https://github.com/SAP/BUILD/tree/master/node-sap-logging)
+ [node-sap-mongo-config](https://github.com/SAP/BUILD/tree/master/node-sap-mongo-config)
+ [node-sap-build](https://github.com/SAP/BUILD/tree/master/node-sap-build)

**Build Modules**
+ [BUILD_PrototypeEditors](https://github.com/SAP/BUILD/tree/master/BUILD_PrototypeEditors)
+ [BUILD](https://github.com/SAP/BUILD/tree/master/BUILD_angular-sap-common-directives)
+ [BUILD_Projects](https://github.com/SAP/BUILD/tree/master/BUILD_Projects)
+ [BUILD_UICatalogManager](https://github.com/SAP/BUILD/tree/master/BUILD_UICatalogManager)
+ [BUILD_UserResearch](https://github.com/SAP/BUILD/tree/master/BUILD_UserResearch)
+ [BUILD_UXRuleEngine](https://github.com/SAP/BUILD/tree/master/BUILD_UXRuleEngine)
+ [BUILD_BusinessCatalogManager](https://github.com/SAP/BUILD/tree/master/BUILD_BusinessCatalogManager)
+ [BUILD_Auth](https://github.com/SAP/BUILD/tree/master/BUILD_Auth) 
+ [BUILD_Shell](https://github.com/SAP/BUILD/tree/master/BUILD_Shell)
+ [BUILD_SharedThirdParties](https://github.com/SAP/BUILD/tree/master/BUILD_SharedThirdParties)
+ [BUILD_Common](https://github.com/SAP/BUILD/tree/master/BUILD_Common)
+ [BUILD_AngularUIGrid](https://github.com/SAP/BUILD/tree/master/BUILD_NgUIGrid)
+ [BUILD_AngularUIGridTree](https://github.com/SAP/BUILD/tree/master/BUILD_norman-angular-ui-tree)
+ [BUILD_AngularUIGridZip](https://github.com/SAP/BUILD/tree/master/BUILD_AngularZip)
+ [BUILD_Html2Canvas](https://github.com/SAP/BUILD/tree/master/BUILD_Html2Canvas)
+ [BUILD_KeyBoardEventPolyfill](https://github.com/SAP/BUILD/tree/master/BUILD_norman-keyboard-event-polyfill)
+ [BUILD_D3Plugins](https://github.com/SAP/BUILD/tree/master/BUILD_norman-d3-plugins)
+ [BUILD_jQuery](https://github.com/SAP/BUILD/tree/master/BUILD_jquery-norman)

**Admin Modules**
+ [BUILD_AdminUsers](https://github.com/SAP/BUILD/tree/master/BUILD_admin-users)
+ [BUILD_Admin](https://github.com/SAP/BUILD/tree/master/BUILD_admin)
+ [BUILD_AdminAudit](https://github.com/SAP/BUILD/tree/master/BUILD_admin-audit)

# User Documentation
Check out the [Build Support](http://sap.github.io/BUILD_User_Assistance) for detailed help topics and video tutorial about using Build!

#Getting Started

## What's included
|Folder/File  | Description |
| ------------- | ------------- | 
|client  |  |
| docs |  | 
| grunt-conf |  |
| server |  |
| .dashboard.yml |  |
| .editorconfig |  | 
| .gitattributes |  |
| .gitignore |  |
| .travis.yml |  | 
| Community Roles.md |  |
| Contributing.md |  |
| Contributing.pdf |  | 
| Gruntfile |  |
| LICENSE.txt |  |
| README.md |  | 
| bump-config.json  |  |
| karma.conf.js  |  |
| package.json  |  | 
| run.js |  |


##Prerequisites
- install [GIT](https://git-scm.com/downloads)
- install [npm.js](https://docs.npmjs.com/cli/install) - _*only version 1.4.28 is supported*_
- install [node.js](https://docs.npmjs.com/cli/install) -_*only version 10.28 is supported*_

## Download / Clone

1. Clone [BUILD](https://github.com/SAP/BUILD) repo
    ```sh
    git clone git@git@github.com:SAP/BUILD.git
    ```

2. Install required node modules (dependencies):
    ```sh
    npm install
    ```

3. Build and run:

    ```sh
    grunt dist              // build for production*
    cd dist                 // moves into new directory
    node server/initSchema  // populate the library metadata** 
                             (**needs to be executed once for a given database in a single node instance)
    node server/app.js      // runs the BUILD application server at http://localhost:9000.
    ```
   Optional steps (after grunt dist):

   ```sh
   grunt dev            // just build in development mode (optional)
   grunt serve          // build dev + start express server + watch js & less for changes (optional)
   grunt serve:debug    // run app in debug mode (with node-inspector) (optional)
   ```
_If you're having a problem installing, you can create a bug or ask a question using the [BUILD Issue Tracker](https://github.com/SAP/BUILD/issues)._ For more information, see our [Contribution Guidelines](https://github.com/SAP/BUILD/wiki/Contribution-Guidelines).

## Make a Contribution
**Although we are not currently reviewing or accepting code contribution, our core-development team want to hear about any bugs you encounter, and answer any questions you might have!** 

For more information, see our [Contribution Guidelines](https://github.com/SAP/BUILD/wiki/Contribution-Guidelines).

## Copyright and Licenses

+ [Apache License](https://github.com/SAP/BUILD/wiki/License)
+ [Individual Contribution License Agreement](https://github.com/SAP/BUILD/blob/temp_build_all/docs/SAP%20License%20Agreements/SAP%2BIndividual%2BContributor%2BLicense%2BAgreement.pdf) 
+ [Corporate Contributor License Agreement](https://github.com/SAP/BUILD/blob/temp_build_all/docs/SAP%20License%20Agreements/SAP%2BCorporate%2BContributor%2BLicense%2BAgreement.pdf) 

## Legal Notices

[View the legal notice about fonts used in Build](https://github.com/SAP/BUILD/wiki/Legal-Notice-About-Fonts).
