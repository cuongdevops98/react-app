const core = require("@actions/core");
const github = require("@actions/github");
import { Octokit } from "octokit";

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
      owner: github.context.payload.repository.owner.name,
      repo: github.context.payload.repository.name,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined,
    });

    core.setOutput("issue", JSON.stringify(response));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
