function mostrarLista(listapokes) {
    const app = document.getElementById("app");
    app.innerHTML = "";
    let pokes = "";

    for (let i = 0; i < listapokes.length; i++) {
        let id = listapokes[i].url.split("/")[6];
        pokes += `
        <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${listapokes[i].name}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${listapokes[i].name}">
            <p>${listapokes[i].name}</p>
        </div>`;
    }

    app.innerHTML = pokes;
    app.appendChild(seccion);
}
