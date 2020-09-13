import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default (props)=>{
    const data = useStaticQuery(graphql`
        query MyQuery {
            allEducationJson {
                edges {
                    node {
                        slug
                        title
                        description
                    }
                }
            }
        }
    `);

    return(
        <div className="max-w-4xl mx-auto py-6">
            <h2 className="text-3xl font-bold text-center">Formación academica</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducationJson.edges.map((element,index)=>{
                        // const {node} = element;
                        const node = element.node;
                        return(
                            <article className="grid grid-cols-2 bg-white shadow-lg rounded m-4 mx-w-sm p-4">
                                <header>
                                    <p className="font-bold leading-loose">{node.title}</p>
                                    <p className="font-light">{node.description}</p>
                                </header>
                                <div className="text-aling" style={{justifySelf:'end'}}>
                                    <Link to={node.slug} className="btn inline-block mt-3">
                                        Ir</Link>
                                    </div>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    );
}