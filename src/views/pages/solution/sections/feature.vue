<template>
  <section class="py-16 px-5 ">
    <div class="max-w-[1340px] mx-auto">
      <div class="text-center mb-4">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Giải pháp LMS sẵn sàng cho tương lai
        </h2>
        <p class="text-xl text-gray-600">
          với hơn 12 năm kinh nghiệm
        </p>
      </div>

      <div class="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
        <div class="flex flex-col lg:flex-row gap-8 items-stretch">
          <!-- Left side - Progress bars (Vertical) -->
          <div class="lg:w-80 flex flex-col justify-center space-y-6">
            <div v-for="(slide, index) in slides" :key="index"
                 class="cursor-pointer group transition-all"
                 @click="goToSlide(index)">
              <div class="flex items-start gap-4">
                <!-- Vertical Progress Bar -->
                <div class="relative w-1 bg-gray-200 rounded-full overflow-hidden min-h-[80px]">
                  <div
                      class="absolute top-0 left-0 w-full bg-blue-600 rounded-full ease-linear"
                      :class="{ 'transition-all duration-300': index === currentSlide && progress[index] > 0 }"
                      :style="{ height: getProgressWidth(index) + '%' }">
                  </div>
                </div>
                <!-- Title -->
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-900 transition-colors group-hover:text-blue-600 text-base"
                      :class="{ '!text-blue-600': currentSlide === index }">
                    {{ slide.title }}
                  </h4>
                  <p class="text-sm text-gray-600 mt-1 transition-all">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side - Slide Content -->
          <div class="flex-1 min-h-[400px]">
            <div class="relative">
              <transition name="fade" mode="out-in">
                <div :key="currentSlide" class="h-full">
                  <div class="flex flex-col justify-center h-full">
                    <!--                    <div class="border-l-4 border-blue-600 pl-6 mb-8">-->
                    <!--                      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">-->
                    <!--                        {{ slides[currentSlide].title }}-->
                    <!--                      </h3>-->
                    <!--                      <p class="text-lg text-gray-600">-->
                    <!--                        {{ slides[currentSlide].description }}-->
                    <!--                      </p>-->
                    <!--                    </div>-->

                    <!-- Image placeholder -->
                    <div class="mt-8 relative">
                      <div
                          class="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center overflow-hidden">
                        <img v-if="slides[currentSlide].image" :src="slides[currentSlide].image"
                             :alt="slides[currentSlide].title"
                             class="w-full h-full object-cover"/>
                        <div v-else class="text-center p-8">
                          <div class="text-6xl mb-4">{{ slides[currentSlide].icon }}</div>
                          <p class="text-gray-500">{{ slides[currentSlide].title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import UserDashboardImage from '@/assets/images/userDashboard.png'
import SkillUserImage from '@/assets/images/skillUser.png'
import CourseCreationImage from '@/assets/images/courseAi.png'

const slides = ref([
  {
    title: 'Tạo khóa học với AI',
    description: 'Tạo bài đào tạo đa định dạng nhanh chóng với sự hỗ trợ của AI.',
    icon: '🤖',
    image: CourseCreationImage
  },
  {
    title: 'Học tập dựa trên kỹ năng',
    description: "Tạo danh sách đầy đủ về nhân tài của tổ chức bạn và xác định nơi có thể thu hẹp khoảng cách kỹ năng.",
    icon: '📊',
    image: SkillUserImage
  },
  {
    title: 'Giao diện trực quan',
    description: "Đào tạo trên giải pháp LMS dễ sử dụng đến mức bạn có cảm giác như ở nhà.",
    icon: '🏠',
    image: UserDashboardImage
  }
])

const currentSlide = ref(0)
const progress = ref([0, 0, 0])
const progressIntervalId = ref(null)
const SLIDE_DURATION = 5000 // 5 seconds per slide
const PROGRESS_UPDATE_INTERVAL = 50 // Update progress every 50ms

const getProgressWidth = (index) => {
  // Only show progress for the current active slide
  if (index === currentSlide.value) {
    return progress.value[index]
  } else {
    return 0
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  // Reset all progress to 0
  progress.value = [0, 0, 0]
  resetAutoPlay()
}

const nextSlide = () => {
  // Reset current slide progress to 0
  progress.value[currentSlide.value] = 0

  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++
  } else {
    // Loop back to first slide
    currentSlide.value = 0
  }

  // Reset new slide progress to 0
  progress.value[currentSlide.value] = 0
}

const updateProgress = () => {
  const increment = (100 / SLIDE_DURATION) * PROGRESS_UPDATE_INTERVAL
  progress.value[currentSlide.value] += increment

  if (progress.value[currentSlide.value] >= 100) {
    nextSlide()
  }
}

const startAutoPlay = () => {
  progressIntervalId.value = setInterval(updateProgress, PROGRESS_UPDATE_INTERVAL)
}

const resetAutoPlay = () => {
  if (progressIntervalId.value !== null) {
    clearInterval(progressIntervalId.value)
  }
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (progressIntervalId.value !== null) {
    clearInterval(progressIntervalId.value)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>