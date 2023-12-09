// javascript projet 3 - zeldanyan

// function recupere reponse json d'une api
async function get_api(link) {
    const api_link = await fetch(api+link);
    const json = await api_link.json();
    return (json);
}

// function pour les projets
// category, id 1 = "Objets"
// category, id 2 = "Appartements"
// category, id 3 = "Hotels & restaurants"
async function f_work(filtre) {
    const gallery = document.querySelector(".gallery");
    const work = await get_api("works");

    gallery.innerHTML = ""
    i = 0;
    while (i < work.length) {
        if (filtre === null || filtre.value === 0) {
            gallery.innerHTML += "<figure><img src=" + work[i].imageUrl + " alt="+ work[i].title +"><figcaption>"+ work[i].title +"</figcaption></figure>";
        } else if (filtre.value === 1 && work[i].category.id === 1) {
            gallery.innerHTML += "<figure><img src=" + work[i].imageUrl + " alt="+ work[i].title +"><figcaption>"+ work[i].title +"</figcaption></figure>";
        } else if (filtre.value === 2 && work[i].category.id === 2) {
            gallery.innerHTML += "<figure><img src=" + work[i].imageUrl + " alt="+ work[i].title +"><figcaption>"+ work[i].title +"</figcaption></figure>";
        } else if (filtre.value === 3 && work[i].category.id === 3) {
            gallery.innerHTML += "<figure><img src=" + work[i].imageUrl + " alt="+ work[i].title +"><figcaption>"+ work[i].title +"</figcaption></figure>";
        }
        i++;
    }
}

//doc api = http://localhost:5678/api-docs/
const api = "http://localhost:5678/api/";
const bouton_filtre = [
    document.getElementById("menu_all"),
    document.getElementById("menu_objects"),
    document.getElementById("menu_apparts"),
    document.getElementById("menu_HR")
];
let i = 0;

f_work(null);

bouton_filtre[0].addEventListener("click", function() {f_work(bouton_filtre[0]);});
bouton_filtre[1].addEventListener("click", function() {f_work(bouton_filtre[1]);});
bouton_filtre[2].addEventListener("click", function() {f_work(bouton_filtre[2]);});
bouton_filtre[3].addEventListener("click", function() {f_work(bouton_filtre[3]);});