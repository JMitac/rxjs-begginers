import { from } from "rxjs";
import { observer } from "../utils";

export default () => {
    const API_BASE_URL = "https://rickandmortyapi.com/api/character";
    const CONTAINER = document.querySelector('#container');

    const getData$ = from( 
        fetch(API_BASE_URL)
        .then(response => response.json())
        .then(data => data.results ) 
    )
    
    let html = `<h2>API RICK MORTY</h2><div class="row align-items-start">`;
    
    const drawData = getData$.subscribe( subs => {

        for (const data of subs) {
            //console.log('data : ',data);
            html += `
                <div class="col-4 p-4">
                    <article class="card">
                        <img class="card-img-top" src="${data.image}"> </h3>
                        <div class="card-body">
                            <h5 class="card-title">ID: ${data.id}</h5>
                            <p class="card-text">Name: ${data.name}</p>
                            <p class="card-text">Gender: ${data.gender}</p>
                            <a href="#" class="btn btn-primary">Species: ${data.species}</a>
                        </div>
                    </article>
                </div>
            `;
        }

        html += `</div>`;
        CONTAINER.innerHTML = html;
    });

    const dataApi = getData$.subscribe( observer );
}