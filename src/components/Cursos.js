import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default ()=>{
    
    const data = useStaticQuery(graphql`
    {
        codigoFacilitoJson {
          data {
            certificates {
              title
              score
              code
            }
          }
        }
      }`);
    
    console.log(data);

    return(
        <section>
            <div className="mt-24">
              <div className="max-w-sm md:max-wxl lg:max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center">Mis certificados en CódigoFacilito</h2>
                  <div className="flex mt-8">
                      {
                          data.codigoFacilitoJson.data.certificates.map(certificates => (
                              <div className="shadow-lg p-8 bg-white mr-4 mb-4 rounded">
                                <h4 className="font-bold">{certificates.title}</h4>
                                <div className="text-center">
                          <span className="inline-block bg-green-200 text-green-700 p-2 mt-2 shadow">Calificación: {certificates.score}</span>
                                </div>
                              </div>
                          ))
                      }
                  </div>
              </div>
            </div>
        </section>
    );
};