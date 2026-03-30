<template>
  <div class="bg-white ">
    <HeroSection/>
    <SliderSection/>
    <TailoredSection/>
    <FeaturesSection/>
    <GetLmsSection/>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import HeroSection from './sections/hero.vue'
import SliderSection from './sections/slider.vue'
import TailoredSection from './sections/tailored.vue'
import FeaturesSection from './sections/feature.vue'
import GetLmsSection from './sections/GetLms.vue'

const router = useRouter()

const goToDetail = (id) => {
  router.push({name: 'solution-detail', params: {id}})
}
</script>
