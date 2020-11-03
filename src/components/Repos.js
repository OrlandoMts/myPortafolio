import React, { useState, useEffect } from "react";
// import repos from '../data/repos';
import Repo from './Repo';

export default ()=>{

    const [repos, setRepos] = useState([]);

    useEffect(()=>{

        const data = sessionStorage.getItem("repos");
        let myRepos;
        
        if(data){
            myRepos =JSON.parse(data);
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/orlandomts/repos")
            myRepos = await response.json();

            sessionStorage.setItem("repos",JSON.stringify(myRepos));

            setRepos(myRepos);
        }

        fetchRepos();
    },[]);

    return (
    <div className="max-w-4xl mx-auto">
        <header className="text-center pb-6">
            <h2 className="text-3xl font-bold pt-10">Mis trabajos</h2>
            <p>Repositorios en Github</p>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
            {
                repos.map((repo)=>{
                return <Repo repo={repo} key={repo.id}/>
                })
            }
        </ul>
    </div>
    );
};