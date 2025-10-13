<script setup>
import Header from '@/components/headers/default.vue'
import Footer from '@/components/footers/default.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header/>

    <main class="flex-1">
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<style scoped>

</style>