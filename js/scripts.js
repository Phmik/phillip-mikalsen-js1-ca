const dndURL = "https://api.open5e.com/classes/";
const dndContainer = document.querySelector(".dndContainer")

async function getDND() {
    try {
        const response = await fetch(dndURL);
        const results = await response.json();
        const dndResults = results.results

        for(let i = 0; i < dndResults.length; i++) {
            console.log(dndResults[i].name);

            if(i === 3) {
                break;
            }

            const dnd = dndResults[i];

            dndContainer.innerHTML += `
            <div class="dnd-info">
                <ul>
                    <li><a href="details.html?name=${dnd.name}">Name ${dnd.name}</a></li>
                    <li>Hit: ${dnd.hit_dice}</li>
                </ul>
            </div>`
        }
    } catch(error){
        console.log(error);
    }
}

getDND();