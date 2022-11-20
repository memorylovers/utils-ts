import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: [{
    rules: {
      "issue-empty": (parsed) => {
        const { header } = parsed;
        const hasIssue = header.match(/(#\d+)/) != null;
        return hasIssue ? [true] : [false, "issue may not to empty"];
      }
    }
  }],
  rules: {
    "issue-empty": [1, "never"],
  }
};

export default config;