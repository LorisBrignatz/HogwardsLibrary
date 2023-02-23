<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "plusL", "moinsL"]);
</script>

<template>
        <div class="book">
          <div class="book-details">
            <h2 class="book-title">{{ livre.titre }}</h2>
            <div class="book-stock">
              <p>Stock: <span class="stock-quantity">{{  livre.qtestock }}</span></p>
              <div class="stock-buttons">
                <button class="stock-button" @click="$emit('moinsL', livre)">-</button>
                <button class="stock-button" @click="$emit('plusL', livre)">+</button>
              </div>
              <div class="stock-buttons-delete">
              <button class="delete-button" @click="$emit('deleteL', livre.id)">Supprimer</button>
              </div>
            </div>
        <div class="book-price">
          <img src='/public/Gallion_d_or.png' alt="Gallion Icon" class="coin-icon">
          <p class="price-amount">{{ livre.prix }}</p>
           </div>
        </div>
      </div>
</template>

<style>

.book {
  background-image: url('/public/CouvertureLivre.jpeg');
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-right: 40px;
  margin-bottom: 10px;
  width: 150px;
  height: 250px;
  padding: 20px;
}

.book-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-title {
  font-size: 30px;
  font-weight: bold;
  font-family: 'great-vibes', sans-serif;
  color: ghostwhite;
  text-shadow: 0 0 2px #000;
  margin-top: 30px;
  justify-content: center;
  display: flex;
  text-align: center;
}

.book-stock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'magic-school', sans-serif;
  text-shadow: 0 0 2px #000;
  color: ghostwhite;
  margin-top: -40px;
}

.stock-quantity {
  font-size: 20px;
  font-weight: bold;
  font-family: 'magic-school', sans-serif;
  text-shadow: 0 0 2px #000;
  color: ghostwhite;
}

.stock-buttons {
  display: flex;
  justify-content: center;
  margin-top: -30px;
}

.stock-buttons-delete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10px;
}

.delete-button {
  background-color: rgba(0, 0, 0, 0.0);
  font-family: magic-school;
  text-shadow: 0 0 2px #000;
  color: #dddebb;
  border: none;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.stock-button {
  background-color: rgba(0, 0, 0, 0.0);
  font-family: magic-school;
  text-shadow: 0 0 2px #000;
  color: #dddebb;
  border: none;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.stock-button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.book-price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -20px;
}

.coin-icon {
  height: 20px;
  margin-right: 5px;
}

.price-amount {
  font-size: 25px;
  font-weight: bold;
  font-family: 'magic-school', sans-serif;
  text-shadow: 0 0 2px #000;
  color: ghostwhite;
  margin-right: 55px;
}

</style>
