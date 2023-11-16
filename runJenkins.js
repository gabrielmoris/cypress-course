const { exec } = require("child_process");
const path = require("path");

const currentDir = __dirname;
const jenkinsWarPath = path.join(currentDir, "jenkins.war");
const command = `java -jar "${jenkinsWarPath}"`;

// Execute the command in the specified directory
exec(command, { cwd: currentDir }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the command: ${error}`);
    return;
  }

  console.log(`Command output:\n${stdout}`);
  console.error(`Command errors, if any:\n${stderr}`);
});
