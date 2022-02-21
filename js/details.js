const mountDetails = document.querySelector(".mountDetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const mountId = params.get("id")

const idURL = "https://ffxivcollect.com/api/mounts/" + mountId;

async function fetchMount() {

    try {
        
        const response = await fetch(idURL);

        const results = await response.json();
        console.log(results)
        if(results.error) {
            mountDetails.innerHTML = displayError(`Ouch. Problem loading the API <p>${results.error}: Error ${results.status}</p>`)
        }
        else {
        createHtml(results);
        }
    }
    catch(error) {
        mountDetails.innerHTML = displayError("Error loading the content from the API");
    }
}

fetchMount();

function createHtml(results) {
    try {
        
    document.title = "";
    document.title = `${results.name}`
    mountDetails.innerHTML = `
                            <div class="mountsHead">
                                <h1>${results.name}</h1>
                                <img src="${results.image}"></img>
                            </div>
                            <div class="mountsInfo">
                                <p>${results.description}<p>
                                <ul>
                                    <li>Movement: ${results.movement}</li>
                                    <li>Owned: ${results.owned}</li>
                                    <li>ID: ${results.id}</li>
                                </ul>
                                <p>${results.tooltip}
                            </div>`; 
    }
    catch(error){
    mountDetails.innerHTML = displayError("Error loading the content from the API");
    }
}