const dndDetails = document.querySelector(".dndDetails");

const queryString = document.location.search;

const dndParams = new URLSearchParams(queryString);

const dndName = dndParams.get("dndParams")

console.log(dndName)