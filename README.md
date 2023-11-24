# The Complete Cypress v12 Course

[Link for the Course.](https://www.udemy.com/course/cypress-io-master-class)

## Jenkins

Before Running Jenkins we need to install Java and paste in the root of this project the file `jenkins.war`

1.  Install Java:
    [Search and install the version 11.0.2 or 17](https://jdk.java.net/archive/)
    Unpack the file inside a folrer named JAVA in `C:\Program Files (x86)`. If you dont have this folder you create it.
    Open: control panel > system > advanced system settings > environment variables
    In system variables click new
    variable name: `JAVA_HOME`
    variable value: `C:\Program Files (x86)\Java\jdk-11.0.2`

    In system variables again I click in path > new and write: `%JAVA_HOME%\bin`

2.  Download Jenkins
    Download Jenkins from [The official website](https://www.jenkins.io/download/) and paste it in the root of this project

3.  You can run Jenkins with the command: `npm nun start-jenkins`

4.  install plugins: Github Integration, Github Authorization, NodeJs, Greenballs

## Testing APIs

We are using JSON server to test the apis. `git@github.com:qauni/json-server.git`

This test is preseted as excluded, since only should run only when the server is running

```javascript
    exludeSpecPattern: [
      "cypress/e2e/other/*.{js,jsx,tsx,feature}", // exclude others
      "cypress/e2e/json-server-test/*.{js,jsx,tsx,feature}", //exclude the json server specific tests
    ],
```
