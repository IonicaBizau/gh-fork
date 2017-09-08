## Documentation

You can see below the API reference of this module.

### `ghFork(selector, where, token, cb)`
Forks the specified repositories in a known account.

#### Params

- **String** `selector`: If a GitHub owner (user or organization) is provided, all accesible repositories will be matched. If a repository
full name is provided, only that specific repository will be matched.
- **String** `where`: The account name where to fork the repositories (your username or an organization).
- **String** `token`: The GitHub token.
- **Function** `cb`: The callback function.

#### Return
- **EventEmitter** An `EventEmitter` instance emitting the following events:
 - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 - `repo-success` (data, repo): Emitted the request is successful.
 - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 - `done` (err, data): Emitted after all the requests are executed.

