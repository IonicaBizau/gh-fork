const ghFork = require("../lib");

// Fork everything from @jillix in @jxoss.
ghFork("jillix", "jxoss", "your token", function (err, data) {
    console.log(err || "Done");
}).on("repo-success", data => {
    console.log(`Forked ${data.source.full_name} into ${data.full_name}`);
}).on("repo-error", (err, c) => {
    console.log(`Failed to fork ${c.source.full_name}. Error: ${err}`);
});
