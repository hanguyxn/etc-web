<template>
  <section v-if="data">
    <div class="w-full flex justify-center items-center flex-col gap-6 py-10 px-4 text-center max-w-4xl mx-auto">
      <h1 class="font-bold text-[42px]">{{ data.title }}</h1>
      <p v-if="data.subtitle" class="text-gray-600 text-lg">{{ data.subtitle }}</p>
    </div>
    <div class="max-w-[1340px] mx-auto px-4 py-16 space-y-8">
      <!-- Hàng 1: 60/40 -->
      <div v-if="data.features.length >= 2" class="grid md:grid-cols-[60%_40%] gap-8">
        <div v-for="(feature, i) in data.features.slice(0, 2)" :key="i" class="feature-card">
          <h2 class="feature-title">{{ feature.title }}</h2>
          <p class="feature-text">{{ feature.description }}</p>
          <img :src="feature.image" :alt="feature.title" class="feature-img" />
        </div>
      </div>

      <!-- Hàng 2: 40/60 -->
      <div v-if="data.features.length >= 4" class="grid md:grid-cols-[40%_60%] gap-8">
        <div v-for="(feature, i) in data.features.slice(2, 4)" :key="i" class="feature-card">
          <h2 class="feature-title">{{ feature.title }}</h2>
          <p class="feature-text">{{ feature.description }}</p>
          <img :src="feature.image" :alt="feature.title" class="feature-img" />
        </div>
      </div>

      <!-- Hàng 3+ nếu có thêm features (layout 50/50) -->
      <div v-if="data.features.length > 4" class="grid md:grid-cols-2 gap-8">
        <div v-for="(feature, i) in data.features.slice(4)" :key="i" class="feature-card">
          <h2 class="feature-title">{{ feature.title }}</h2>
          <p class="feature-text">{{ feature.description }}</p>
          <img :src="feature.image" :alt="feature.title" class="feature-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.feature-card {
  @apply flex flex-col border border-gray-200 rounded-2xl bg-white shadow-sm p-8 hover:shadow-md transition-all duration-300;
}

.feature-title {
  @apply text-2xl font-semibold text-blue-800 mb-4;
}

.feature-text {
  @apply text-gray-700 leading-relaxed mb-6;
}

.feature-img {
  @apply rounded-lg mt-auto;
}
</style>
