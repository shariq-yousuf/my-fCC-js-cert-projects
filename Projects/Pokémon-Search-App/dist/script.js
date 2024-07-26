"use strict";
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const errMsg = document.querySelector(".err-msg");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const imgContainer = document.querySelector(".img-container");
const typesEl = document.querySelector("#types");
const td2ndChilds = document.querySelectorAll("td:nth-child(2)");
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const resetData = {
    name: "",
    id: "",
    weight: "",
    height: "",
    sprites: { front_default: "" },
    types: [],
    stats: [],
};
const getData = async () => {
    errMsg.style.opacity = "0";
    const inputValue = searchInput.value
        .trim()
        .toLowerCase()
        .replaceAll(/\s+/g, "-");
    try {
        const response = await fetch(`${url}/${inputValue}`);
        const data = await response.json();
        displayData(data);
    }
    catch (err) {
        // alert("Pokémon not found");
        errMsg.style.opacity = "1";
        console.error("Fetching error:", err);
        displayData(resetData);
        td2ndChilds.forEach((td) => (td.textContent = ""));
    }
    searchInput.value = "";
};
const displayData = (data) => {
    const { name, id, weight, height, sprites, types, stats, } = data;
    pokemonName.textContent = name.toUpperCase();
    pokemonId.textContent = id ? `#${id.toString()}` : "";
    weightEl.textContent = weight.toString();
    heightEl.textContent = height.toString();
    imgContainer.innerHTML = `
    <img src="${sprites.front_default}" id="sprite" />
  `;
    typesEl.innerHTML = "";
    types.forEach((type) => {
        typesEl.innerHTML += `
        <span class="type">${type.type.name.toUpperCase()}</span>
    `;
    });
    stats.forEach((stat) => {
        const el = document.querySelector(`#${stat.stat.name}`);
        el.textContent = stat.base_stat.toString();
    });
};
// Event handlers
searchForm.addEventListener("submit", getData);
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    }
});
