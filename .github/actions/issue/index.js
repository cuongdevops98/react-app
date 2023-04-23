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

    const response = await octokit.request(
      `POST /repos/${github.context.payload.repository.owner.name}/${github.context.payload.repository.name}/issues`,
      {
        owner: github.context.payload.repository.owner.name,
        repo: github.context.payload.repository.name,
        title,
        body,
        assignees: assignees ? assignees.split("\n") : undefined,
        milestone: 1,
        labels: ["bug"],
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    core.setOutput("issue", JSON.stringify(response));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
