
# gh-fork

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gh-fork.svg)](https://www.npmjs.com/package/gh-fork) [![Downloads](https://img.shields.io/npm/dt/gh-fork.svg)](https://www.npmjs.com/package/gh-fork) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Forks the specified repositories in a known account.

## :cloud: Installation

```sh
$ npm i --save gh-fork
```


## :clipboard: Example



```js
const ghFork = require("gh-fork");

// Fork everything from @jillix in @jxoss.
ghFork("jillix", "jxoss", "your token", function (err, data) {
    console.log(err || "Done");
}).on("repo-success", data => {
    console.log(`Forked ${data.source.full_name} into ${data.full_name}`);
}).on("repo-error", (err, c) => {
    console.log(`Failed to fork ${c.source.full_name}. Error: ${err}`);
});
```

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
