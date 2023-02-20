<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");

const emit = defineEmits(["addL"]);
</script>

<template>
  <form
      @submit.prevent="$emit('addL', titre, qtestock, prix)"
  >
    <input type="text" v-model="titre" placeholder="Livre" />
    <input type="number" v-model="qtestock" placeholder="Quantité" min="0" />
    <input type="number" v-model="prix" placeholder="Prix" min="0" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>
</style>
