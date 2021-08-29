---
title: This is my second post
date: 2021-08-22T16:25:02.263Z
contentKey: blog

---
<!--StartFragment-->

A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

The plugin creates `File` nodes from files. The various “transformer” plugins can transform `File` nodes into various other types of data e.g. `gatsby-transformer-json` transforms JSON files into JSON data nodes and `gatsby-transformer-remark` transforms markdown files into `MarkdownRemark` nodes from which you can query an HTML representation of the markdown.

## [](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#install)Install

`npm install gatsby-source-filesystem`

## [](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#how-to-use)How to use

```javascript

```

## [](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#options)Options

In addition to the name and path parameters you may pass an optional `ignore` array of file globs to ignore.

They will be added to the following default list:

```text

```

To prevent concurrent requests overload of `processRemoteNode`, you can adjust the `200` default concurrent downloads, with `GATSBY_CONCURRENT_DOWNLOAD` environment variable.

## [](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#how-to-query)How to query

You can query file nodes like the following:

```graphql

```

To filter by the `name` you specified in the config, use `sourceInstanceName`:

```graphql

```

<!--EndFragment-->