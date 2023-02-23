<script setup>
defineProps(["livre"]);
const emit = defineEmits(["search"]);
</script>

<template>
  <div class="search-container">
    <form @submit.prevent="$emit('search', motcle)">
      <input type="text" v-model="motcle" placeholder="Recherchez votre livre à l'aide d'un mot-clé" />
      <button class="search-button" @click="$emit('search', motcle)">Rechercher</button>
    </form>
  </div>
</template>

<style scoped>

.search-container {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(14, 13, 13, 0.99);
  border-radius: 35px;
  margin-top: 160px;
  margin-left: 300px;
  margin-right: 300px;
  padding: 5px;
}

input[type="text"] {
  padding: 10px;
  border-radius: 25px;
  border: none;
  font-family: 'magic-school';
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  width: 731px;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.7);
  margin-right: 10px;
}

button.search-button {
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
  cursor: url('/public/Harry_Potter_Wand_Cursor.png'), auto;
  transition: all 0.3s ease-in-out;
}

button.search-button:hover {
  background-color: #F9F9F9;
  color: #1b6c89;
  box-shadow: 0 0 10px #16bef2;
}

</style>