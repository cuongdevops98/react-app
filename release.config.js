module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/cuongdevops98/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "./build.zip", label: "Build folder" },
          { path: "./coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
