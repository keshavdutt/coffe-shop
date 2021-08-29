---
title: Hello this is 3rd blog
date: 2021-08-22T17:38:15.869Z
contentKey: blog

---
<!--StartFragment-->

Gatsby gives plugins and site builders many APIs for building your site. Code in the file `gatsby-node.js` is run once in the process of building your site. You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle. To use the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/), create a file named `gatsby-node.js` in the root of your site. Export any of the APIs you wish to use in this file.

Every Gatsby Node API gets passed a [set of helper functions](https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/). These let you access several methods like reporting, or perform actions like creating new pages.

An example gatsby-node.js file that implements two APIs, `onPostBuild`, and `createPages`.

gatsby-node.js

```js

```

## [](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#async-vs-sync-work)Async vs. sync work

If your plugin performs async operations (disk I/O, database access, calling remote APIs, etc.) you must either return a promise (explicitly using `Promise` API or implicitly using `async`/`await` syntax) or use the callback passed to the 3rd argument. Gatsby needs to know when plugins are finished as some APIs, to work correctly, require previous APIs to be complete first. See [Debugging Async Lifecycles](https://www.gatsbyjs.com/docs/debugging-async-lifecycles/) for more info.

```javascript

```

If your plugin does not do async work, you can return directly.

## APIs

[`createPages`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

Create pages dynamically. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

You can also fetch data from remote or local sources to create pages.

<!--EndFragment-->