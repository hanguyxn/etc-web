<template>
  <div class="max-w-[100vw] overflow-hidden etc-background relative"
       :style="`background: ${backgroundColor}`">
    <div
        class="grid grid-cols-1 lg:grid-cols-2 max-w-[1340px] mx-auto gap-10 px-5 lg:px-0 lg:gap-20 relative py-16 lg:py-32">
      <div class="my-auto" :style="{ color: titleTextColor }">
        <h1 class="text-[32px] md:text-[42px] font-bold leading-[42px] md:leading-[52px] mb-6">
          {{ title }}
        </h1>
        <h3 class="mb-8 text-base md:text-lg opacity-90">
          {{ description }}
        </h3>
        <button
            v-if="showButton"
            @click="handleButtonClick"
            :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
            class="rounded-full px-6 py-3 font-semibold text-[16px] transition-all duration-300 hover:scale-105"
        >
          {{ buttonText }}
        </button>
      </div>
      <div class="h-full flex items-center justify-end">
        <img
            :src="image"
            :alt="imageAlt"
            class="h-full w-auto object-contain top-0 lg:absolute lg:top-0 lg:right-0 max-h-[400px] lg:max-h-full"
            :class="route.name === 'solution-detail' ? 'lg:-right-[400px]' : ''"
            loading="eager"
            fetchpriority="high"
            decoding="async"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()


const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Nhu cầu đào tạo của bạn, giải pháp đào tạo của bạn: xLMS'
  },
  description: {
    type: String,
    required: true,
    default: 'Cung cấp cho mọi nhân viên, khách hàng và đối tác những khóa học phù hợp và có mục tiêu - bất kể trường hợp sử dụng của bạn là gì.'
  },
  image: {
    type: String,
    required: true,
    default: 'https://www.zohowebstatic.com/sites/zweb/images/learn/lms-index/header-image.png'
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  backgroundColor: {
    type: String,
    default: 'linear-gradient(135deg, rgb(0, 70, 171) 0%, rgb(0, 146, 255) 100%)'
  },
  buttonText: {
    type: String,
    default: 'Đăng ký'
  },
  buttonColor: {
    type: String,
    default: '#ffb000'
  },
  buttonTextColor: {
    type: String,
    default: '#000000'
  },
  showButton: {
    type: Boolean,
    default: true
  },
  titleTextColor: {
    type: String,
    default: '#ffffff'
  }
})

const emit = defineEmits(['button-click'])

const handleButtonClick = () => {
  emit('button-click')
}
</script>

<style scoped lang="css">
.etc-background::after {
  content: "";
  z-index: 2;
  background-color: #fff;
  border-radius: 100%;
  width: 140%;
  height: 160px;
  display: block;
  position: absolute;
  bottom: -130px;
  left: -20%;
}
</style>
