/* eslint-disable @typescript-eslint/no-var-requires */
import { message, danger } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);

const { additions = 0, deletions = 0 } = danger.github.pr;
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`);

const bigPRThreshold = 1500;
let errorCount = 0;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(":exclamation: Big PR (" + ++errorCount + ")");
  markdown(
    "> (" +
      errorCount +
      ") : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review."
  );
} else {
  message("This PR looks fine and easy for code review");
}
