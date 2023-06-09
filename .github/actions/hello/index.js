const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");
  if (name === "error") {
    throw new Error("Some error message");
  }

  core.debug("This is a debug message");
  core.warning("This is a warning message");
  core.error("This is an error message");

  console.log(`Hello ${name}`);

  const time = new Date();

  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
