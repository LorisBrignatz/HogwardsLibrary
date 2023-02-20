<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");

const emit = defineEmits(["addL"]);
</script>

<template>
  <form
      @submit.prevent="$emit('addL', libelle)"
  >
    <input type="text" v-model="libelle" placeholder="Livre" />
    <input type="submit" value="valider" />
  </form>
</template>

<style scoped>
</style>
