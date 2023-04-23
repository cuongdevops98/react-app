const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("@octokit/core");
const {
  restEndpointMethods,
} = require("@octokit/plugin-rest-endpoint-methods");

async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = new Octokit({
      auth: token,
    });

    const response = await octokit.rest.issues.create({
      owner: "cuongdevops98",
      repo: "react-app",
      title: "Hello, world!",
      body: "I created this issue using Octokit!",
      assignees: ["cuongdevops98"],
    });

    core.setOutput("issue", JSON.stringify(response));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
