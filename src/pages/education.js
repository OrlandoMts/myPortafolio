import React from "react";
import { graphql, Link } from "gatsby";

export default (props)=>{
    const pageData = props.data.educationJson;
    return(
        <div className="backG max-h-full h-screen">
            <header className = "py-12 border-green-500 border-solid border-t-8">
                <div className = "p-4 md:p-6 lg:p-0 max-w-4xl mx-auto">
                    <h2 className = "capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className = "text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul className = "max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto pb-2">
                {
                    pageData.items.map((item,index)=>(
                        <li className = "bg-white shadow mt-4 flex" key = {index}>
                            <p></p>
                            <div className = "flex items-center flex-1 p-8">
                                <div className = "flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className = "inline-block p-2 radius bg-green-100 text-green-700">{item.degree}</span>
                                    }
                                </div>
                                <div className = "inline-block pd-4 md:p-3 lg:p-2">
                                    <span className = "inline-block text-2xl bg-green-100 text-green-700">{item.score}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            <div className="mt-8 pt-3 pb-3 md:pt-4 md:pb-4 lg:p-0">
                <Link to="/" className="text-green-700 underline text-2xl lg:text-xl mt-8">Regresar al inicio</Link>
            </div>
            </ul>
        </div>
    )
}

export const query = graphql `
query($slug: String){
    educationJson(slug:{ eq: $slug}){
        title
        description
        items{
            name
            degree
            score
        }
    }
}
`;