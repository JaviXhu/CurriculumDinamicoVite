<script setup>
import Curriculum from './components/Curriculum.vue';
</script>

<template>
  <div>
    <a href="https://perezpulido.org/" target="_blank">
      <img
        src="https://media.v2.siweb.es/uploaded_thumb_small/71d6ae90e014e7b9171a634a33dae189/logo4_2.png"
        class="logo"
        alt="Vite logo"
      />
    </a>
  </div>
  <Curriculum msg="Curriculum" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
