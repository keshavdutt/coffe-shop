const { createFilePath } = require('gatsby-source-filesystem');
const path = require(`path`)

const blogPostTemplate = path.resolve(`./src/templates/blog.js`)



exports.onCreateNode = function ({ node, getNode, actions }) {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};


exports.createPages = async function ({ graphql, actions }) {
    const { createPage } = actions;
    const result = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }`);

    result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.fields.slug
                }
            });
        });
};