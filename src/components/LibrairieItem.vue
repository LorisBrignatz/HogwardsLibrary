<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "plusL", "moinsL"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <!-- cette fois en param du handler
          on n'utilise pas l'index dans le tableau
          mais directement l'id du livre
    -->
    <button @click="$emit('deleteL', livre.id)">Supprimer</button>
    <button @click="$emit('plusL', livre.qtestock)">+</button>
    <button @click="$emit('moinsL', livre.qtestock)">-</button>
  </li>
</template>

<style>
</style>
