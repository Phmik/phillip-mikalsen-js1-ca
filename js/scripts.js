const mountURL = "https://ffxivcollect.com/api/mounts/";
const resultContainer = document.querySelector(".mountContainer");

async function getMounts() {

    try{   

        const response = await fetch(mountURL);

        const results = await response.json();

        const mounts = results.results;

        resultContainer.innerHTML = "";

            for(let i = 0; i < mounts.length; i++) {

                if(i === 3) {
                    break;
                }

                const mountsResult = mounts[i];
                    
                resultContainer.innerHTML += `
                                            <a href="details.html?id=${mountsResult.id}" class="mount-cards">
                                                <h2>${mountsResult.name}</h2>
                                                <img src="${mountsResult.image}"></img>
                                            </a>`
                
            }
        }
        catch(error) {
            resultContainer.innerHTML = displayError("Error loading the content from the API")
        }
}

getMounts();