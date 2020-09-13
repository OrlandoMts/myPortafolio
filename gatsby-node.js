const path = require('path');

exports.createPage = async ({graphql, actions}) => {
    
    const result = await graphql(`
            query MyQuery {
                allEducationJson {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `);
    
    
    actions.createPage({
        path: 'education',
        context:{
            slug:node.slug
        }
    })
    
}