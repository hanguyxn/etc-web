<template>
  <div
    class="max-w-[100vw] overflow-hidden etc-background relative"
    :class="{ 'min-h-[500px] lg:min-h-[700px] flex items-center': isDetail }"
    :style="`background: ${backgroundColor}`"
  >
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] max-w-[1340px] mx-auto gap-10 px-6 lg:px-8 relative py-16 lg:py-24 transition-all duration-700">
      <div class="my-auto z-10" :style="{ color: titleTextColor }" :class="{ 'max-w-[650px] lg:max-w-none': isDetail }">
        <h1 class="text-[36px] md:text-[52px] font-extrabold font-heading leading-[1.1] md:leading-[1.15] mb-8 animate-fade-up" :class="{ 'md:text-[60px]': isDetail }">
          {{ title }}
        </h1>
        <h3 class="mb-10 text-lg md:text-xl font-sans opacity-95 leading-relaxed max-w-[600px] animate-fade-up animation-delay-200" :class="{ 'text-xl': isDetail }">
          {{ description }}
        </h3>
        <div class="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
          <button
            v-if="showButton"
            @click="handleButtonClick"
            :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
            class="group relative overflow-hidden rounded-full px-10 py-4 font-bold font-sans text-[16px] md:text-[18px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            <span class="relative z-10">{{ buttonText }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      <div
        class="flex items-center justify-center lg:justify-end animate-fade-in animation-delay-500"
        :class="isDetail ? 'absolute right-0 bottom-0 lg:w-[55%] w-full h-[80%] lg:h-full opacity-60 lg:opacity-85 pointer-events-none z-0' : 'relative z-10'"
      >
        <div class="relative group w-full h-full flex items-end justify-end">
          <img
            :src="image"
            :alt="imageAlt"
            class="w-full h-full transition-all duration-500"
            :class="isDetail ? 'object-contain object-right-bottom scale-110 lg:scale-125' : 'max-h-[450px] lg:max-h-[600px] object-contain group-hover:drop-shadow-2xl'"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            :style="
              isDetail
                ? {
                    maskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to top, black 50%, transparent 100%)',
                    webkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to top, black 50%, transparent 100%)',
                    maskComposite: 'intersect',
                    webkitMaskComposite: 'source-in',
                  }
                : {}
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Nhu cầu đào tạo của bạn, giải pháp đào tạo của bạn: xLMS",
  },
  description: {
    type: String,
    required: true,
    default: "Cung cấp cho mọi nhân viên, khách hàng và đối tác những khóa học phù hợp và có mục tiêu - bất kể trường hợp sử dụng của bạn là gì.",
  },
  image: {
    type: String,
    required: true,
    default: "https://www.zohowebstatic.com/sites/zweb/images/learn/lms-index/header-image.png",
  },
  imageAlt: {
    type: String,
    default: "Hero Image",
  },
  backgroundColor: {
    type: String,
    default: "linear-gradient(135deg, rgb(0, 70, 171) 0%, rgb(0, 146, 255) 100%)",
  },
  buttonText: {
    type: String,
    default: "Đăng ký",
  },
  buttonColor: {
    type: String,
    default: "#ffb000",
  },
  buttonTextColor: {
    type: String,
    default: "#000000",
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  titleTextColor: {
    type: String,
    default: "#ffffff",
  },
  isDetail: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["button-click"]);

const handleButtonClick = () => {
  emit("button-click");
};
</script>

<style scoped>
.etc-background::after {
  content: "";
  z-index: 1;
  background-color: #fff;
  border-radius: 100% 100% 0 0;
  width: 150%;
  height: 200px;
  display: block;
  position: absolute;
  bottom: -150px;
  left: -25%;
  box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.05);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-up {
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.font-heading {
  font-family: "Montserrat", sans-serif;
}

.font-sans {
  font-family: "Inter", sans-serif;
}
</style>
