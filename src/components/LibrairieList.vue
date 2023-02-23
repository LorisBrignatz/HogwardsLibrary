<script setup>
import { reactive, onMounted } from "vue";
import LibrairieItem from "./LibrairieItem.vue";
import LibrairieForm from "./LibrairieForm.vue";
import Livre from "../Livre";
import LibrairieSearch from "@/components/LibrairieSearch.vue";

const listeL = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/12/livres";

function handlerQuantitePlus(livre) {
  console.log(livre);
  livre.LivreIncrementation();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix}),
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

function handlerQuantiteMoins(livre) {
  console.log(livre);
  livre.LivreDecrementation();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix}),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        if (livre.qtestock == 0){
          handlerDelete(livre.id)
        }
        getLivres();
      })
      .catch((error) => console.log(error));
}
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
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
function handlerAdd(titre, qtestock, prix) {
  console.log(titre, qtestock, prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
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
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeL.splice(0, listeL.length);
        dataJSON.forEach((v) =>
            listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}

const ListLSearch = reactive([]);
function getRecherche(motcle) {
  const fetchOptions = { method: "GET" };
  fetch(url +"?search=" + motcle, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        ListLSearch.splice(0, ListLSearch.length);
        dataJSON.forEach((v) =>
            ListLSearch.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}

onMounted(() => {
  getLivres();
  getRecherche();
});

</script>

<template>
  <h3>Découvrez les ouvrages présents dans la bibliothèque de Poudlard</h3>
  <LibrairieSearch @search="getRecherche"></LibrairieSearch>
  <div class="body">
    <div class="book-container-body">
      <LibrairieItem
          v-for="livre of ListLSearch"
          :key="livre.id"
          :livre="livre"
          @deleteL="handlerDelete"
          @plusL="handlerQuantitePlus"
          @moinsL="handlerQuantiteMoins"
      />
    </div>
  </div>
  <div class="main-container">
    <div class="book-container">
      <LibrairieItem
          v-for="livre of listeL"
          :key="livre.id"
          :livre="livre"
          @deleteL="handlerDelete"
          @plusL="handlerQuantitePlus"
          @moinsL="handlerQuantiteMoins"
      />
    </div>
  </div>
  <div class="book-form">
  <LibrairieForm @addL="handlerAdd"></LibrairieForm>
  </div>
</template>

<style scoped>

.body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 1435px;
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
}

.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 1435px;
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
}

.book-container {
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.book-container-body {
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.book-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  position: relative;
  margin-top: 10px;
  margin-left: 427px;
  margin-right: 427px;
  height: 220px;
}

</style>
