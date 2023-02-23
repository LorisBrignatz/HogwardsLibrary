<template>
  <div>
    <header>
      <div class="logo-left"><img src='public/Hogwarts-Logo.png' alt="Logo Left"></div>
      <h1 class="title">Hogwarts Library</h1>
      <div class="logo-right"><img src='public/Hogwarts-Logo.png' alt="Logo Right"></div>
    </header>
  </div>
</template>

<style scoped>

header {
  display: flex;
  color: ghostwhite;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: 50px;
  font-family: 'harry-potter';
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 10;
  animation: glowing-text 2s ease-in-out infinite;
}

.title {
  margin: 0;
}

@keyframes glowing-text {
  0% {
    text-shadow: none;
  }
  50% {
    text-shadow: 2px 2px 10px #fff;
  }
  100% {
    text-shadow: none;
  }
}

.logo-left img,
.logo-right img {
  width: 200px;
}

</style>
