import React from "react";
import ilustration from '../img/undraw_Freelancer_re_irh4.svg';

export default () => (
    <header style={{backgroundColor: "#1FAB89"}} className=".comodin" >
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 content__grid">
                <div>    
                    <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl">¡Hola! Soy Orlando</h1> 
                    <p className="text-base lg:text-xl font-light">Soy ingeniero y desarrollo aplicaciones web </p>
                </div>
                <img src={ilustration} alt="Persona sentada con una laptop" style={{height: "300px", width: "400px"}}></img>
            </div>
        </div>

    </header>
);