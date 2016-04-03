const ghFork = require("../lib");

ghFork("jillix", "jxoss", "65494e1cd47b9278dc9454b004c58267f1f42df1", function (err, data) {
    console.log(err || "Done");
}).on("repo-success", data => {
    console.log(`Forked ${data.source.full_name} into ${data.full_name}`);
}).on("repo-error", (err, c) => {
    console.log(`Failed to fork ${c.source.full_name}. Error: ${err}`);
});
