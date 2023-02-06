import { message, danger, schedule } from "danger";
import npmOutdated from "danger-plugin-npm-outdated";

// Note: You need to use schedule()
schedule(npmOutdated());

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);
