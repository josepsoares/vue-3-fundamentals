<script setup lang="ts">
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import ToBuyList from './components/ToBuyList.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Container>
    <div class="w-full">
      <Header />
      <ToBuyList />
    </div>
    <Footer />
  </Container>
</template>
