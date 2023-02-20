<script setup>
import { reactive, onMounted } from "vue";
import LibrairieItem from "./LibrairieItem.vue";
import LibrairieForm from "./LibrairieForm.vue";
import Livre from "../Livre";

const listeL = reactive([]);

// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/12/livres";

// -- handler pour modifier un livre à partir de l'index dans la liste
function handlerQuantitePlus(livre) {
  console.log(livre);
  // -- faire la modification
  livre.LivreIncrementation();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la quantité modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        getLivres();
      })
      .catch((error) => console.log(error));
}

function handlerQuantiteMoins(livre) {
  console.log(livre);
  // -- faire la modification
  livre.LivreDecrementation();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la quantité modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        if (livre.qtestock == 0){
          handlerDelete(livre.id)
        }
        // actualiser la liste des livres
        getLivres();
      })
      .catch((error) => console.log(error));
}

// -- handle pour supprimer un livre à partir de l'id du livre
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id du livre à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// -- handle pour ajouter un nouveau livre
function handlerAdd(titre, qtestock, prix) {
  console.log(titre, qtestock, prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le titre, la quantite et le prix du nouveau livre sont envoyés au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre, qtestock: qtestock, prix: prix }),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// -- req AJAX pour récupérer les todos
//    et les stocker dans le state listeL
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // -- vider la liste des livres
        listeL.splice(0, listeL.length);
        // pour chaque donnée renvoyée par l'API
        //  créer un objet instance de la classe Livre
        //  et l'ajouter dans la liste listeL
        dataJSON.forEach((v) =>
            listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});
</script>

<template>
  <h3>Liste des livres</h3>
  <LibrairieForm @addL="handlerAdd"></LibrairieForm>
  <ul>
    <LibrairieItem
        v-for="livre of listeL"
        :key="livre.id"
        :livre="livre"
        @deleteL="handlerDelete"
        @plusL="handlerQuantitePlus"
        @moinsL="handlerQuantiteMoins"
    />
  </ul>
</template>

<style scoped>
</style>
