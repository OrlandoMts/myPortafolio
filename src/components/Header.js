import React from "react";
import ilustration from '../img/undraw_Freelancer_re_irh4.svg';

export default () => (
    <header style={{backgroundColor: "#1FAB89"}}>
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">    
                    <h1 className="font-bold text-white text-6xl">¡Hola! Soy Orlando</h1> 
                    <p className="text-xl font-light">Soy ingeniero y desarrollo aplicaciones web </p>
                </div>
                <img src={ilustration} alt="Persona sentada con una laptop" style={{height: "300px", width: "400px"}}></img>
            </div>
        </div>

    </header>
);