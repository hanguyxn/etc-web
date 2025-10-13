<template>
  <div
      @click="handleClick"
      class="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 p-4 border border-[#ebeff4] cursor-pointer"
      :data-cats="category"
      :title="title"
  >
    <div class="rounded-lg relative overflow-hidden aspect-[632/400]">
      <img
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          decoding="async"
      >
    </div>
    <div class="py-6 px-2">
      <h4 class="text-xl font-bold text-[#06f] mb-3 group-hover:text-blue-600 transition-colors">
        {{ heading }}
      </h4>
      <p class="text-gray-600 leading-relaxed mb-4">
        {{ description }}
      </p>
      <span
          class="bg-[#f1f5f9] px-6 py-3 rounded-full flex justify-center items-center gap-2 text-[#14171a] font-semibold group-hover:gap-3 transition-all w-full">
        {{ buttonText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const props = defineProps({
  solutionId: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageWidth: {
    type: [Number, String],
    default: 632
  },
  imageHeight: {
    type: [Number, String],
    default: 400
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Tìm hiểu thêm'
  }
})

const handleClick = () => {
  router.push({
    name: 'solution-detail',
    params: {id: props.solutionId}
  })
}
</script>

<style scoped>

</style>