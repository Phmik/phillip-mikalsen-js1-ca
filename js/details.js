const mountDetails = document.querySelector(".mountDetails");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const mountId = params.get("id")
const idURL = "https://ffxivcollect.com/api/mounts/" + mountId;

async function fetchMount() {

    try {
        
        const response = await fetch(idURL);
        const mountResult = await response.json();

        if(!response.ok) {

            throw new Error(`Ouch. Problem loading the API 
                            ${results.error}: Error ${results.status}`)
        }
        else {
        renderOneItem(mountResult);
        }
    }
    catch(error) {
        mountDetails.innerHTML = displayError("Error loading the content from the API");
    }
}

fetchMount();

function renderOneItem(mountResult) {
    
    try {
        
    document.title = "";
    document.title = `${mountResult.name}`
    mountDetails.innerHTML = `
                            <div class="mountsHead">
                                <h1>${mountResult.name}</h1>
                                <img src="${mountResult.image}"></img>
                            </div>
                            <div class="mountsInfo">
                                <p>${mountResult.description}<p>
                                <ul>
                                    <li>Movement: ${mountResult.movement}</li>
                                    <li>Owned: ${mountResult.owned}</li>
                                    <li>ID: ${mountResult.id}</li>
                                </ul>
                                <p>${mountResult.tooltip}
                            </div>`; 
    }
    catch(error){
    mountDetails.innerHTML = displayError("Error loading the content from the API");
    }
}