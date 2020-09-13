import React from "react";
import ilustration from '../img/undraw_Email_campaign_re_m6k5.svg'

export default ()=>(
    <section style={{backgroundColor: "#9DF3C4"}}>
        <div className="container mx-auto max-w-4xl">
            <form className="mt-8 pt-8 pb-4 text-center" name="contact" data-netlify="true" data-netlify-honeypot="botfield">
                <input type="hidden" name="form-name" aria-hidden="true" value="contact" />
                
                <label htmlFor="contact-content" className="text-3xl font-bold text-center text-gray-700">Dale vida a tu idea</label>
                <div className="grid grid-cols-2 mt-3">
                    <img src={ilustration} alt="Enviando un mensaje" style={{height:"200px", width:"300px"}}></img>
                    <div className="flex shadow-lg rounded bg-white border p-3 w-full">
                        <textarea 
                        id="contact-content"
                        name="contac-content"
                        className="flex-1 py-2 px-3 text-gray700 focus:outline-none focus:shadow-outline" placeholder="Escribela y hagamosla realidad"></textarea>
                        <input type="submit" value="Enviar" className="btn ml-4 my-12"></input>
                    </div>
                </div>
            </form>
        </div>
    </section>
);