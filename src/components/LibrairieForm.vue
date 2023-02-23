<script setup>
import { ref } from "vue";

const libelle = ref("");
const emit = defineEmits(["addL"]);

</script>

<template>
    <form class="form-add" @submit.prevent="$emit('addL', titre, qtestock, prix)">
      <div class="form-group">
        <input type="text" v-model="titre" placeholder="TITRE DU LIVRE" />
      </div>
      <div class="form-group">
        <input type="number" v-model="qtestock" placeholder="QUANTITÉ" min="0" />
      </div>
      <div class="price-input">
      <input type="number" v-model="prix" placeholder="PRIX (EN GALLIONS, MORNILLES OU NOISES) " min="0" />
      </div>
      <button class="add-button" @click="$emit('addL', titre, qtestock, prix)">Ajouter</button>
    </form>
</template>

<style scoped>

.form-group {
  margin-bottom: 20px;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 5px;
  font-family: 'magic-school';
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  width: 100%;
}

.price-input input[type="number"] {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 5px;
  font-family: 'magic-school';
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  width: 100%;
}

button.add-button {
  padding: 10px 25px;
  border-radius: 25px;
  border: none;
  font-family: 'magic-school';
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(14, 13, 13, 0.99);
  color: #F9F9F9;
  margin-left: 250px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button.add-button:hover {
  background-color: #F9F9F9;
  color: #1b6c89;
  box-shadow: 0 0 10px #16bef2;
}

</style>
