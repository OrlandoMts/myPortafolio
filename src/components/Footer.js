import React from "react";
import { Link } from "gatsby";
import icon from '../fontawesome-free-5.14.0-web/css/all.min.css';

export default ()=>(
    <footer style={{backgroundColor: "#1FAB89"}}>
       <div className="max-w-4xl mx-auto py-4"> 
            <p className="text-xl lg:text-3xl font-bold text-white">Sigueme en mis redes sociales:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center pt-3">
                <Link to="https://twitter.com/DaniMonts19" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-4xl text-black"></i></Link>
                <Link to="https://www.linkedin.com/in/orlando-montes-6914331b5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-4xl text-black"></i></Link>
                <Link to="https://www.instagram.com/orlando.monts/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-4xl text-black"></i></Link>
            </div>
        </div>
    </footer>
);