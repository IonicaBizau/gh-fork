const ghRepeat = require("gh-repeat");

/**
 * ghFork
 * Forks the specified repositories in a known account.
 *
 * @name ghFork
 * @function
 * @param {String} selector If a GitHub owner (user or organization) is
 * provided, all accesible repositories will be matched. If a repository
 * full name is provided, only that specific repository will be matched.
 * @param {String} where The account name where to fork the repositories (your username or an organization).
 * @param {String} token The GitHub token.
 * @param {Function} cb The callback function.
 * @returns {EventEmitter} An `EventEmitter` instance emitting the following events:
 *
 *  - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 *  - `repo-success` (data, repo): Emitted the request is successful.
 *  - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 *  - `done` (err, data): Emitted after all the requests are executed.
 */
module.exports = function ghFork(selector, where, token, cb) {
    return ghRepeat(selector, c => {
        return {
            url: `repos/${c.full_name}/forks`
          , options: {
                data: {
                    organization: where || ""
                }
            }
        };
    }, token, cb);
};
