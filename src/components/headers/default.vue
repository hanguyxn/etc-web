<template>
  <header class="bg-white sticky top-0 z-30 border-b border-slate-200 transition-shadow duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between md:px-6 md:py-4">
        <button
            id="mobile-menu-button"
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded text-black hover:text-gray-200 transition-colors order-first">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="/"><img alt="ETC Logo" loading="lazy" width="100"
                           height="40" decoding="async" data-nimg="1"
                           class="h-10 w-auto md:mb-2"
                           style="color:transparent"
                           :src="EtcLogo"></a>
          <nav class="flex space-x-1">
            <div class="relative group">
              <a class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                 href="/giai-phap">Giải pháp</a>
            </div>
            <div class="relative group">
              <a class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                 href="/tinh-nang">Tính năng</a>
            </div>
            <div class="relative group">
              <a class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                 href="/bang-gia">Bảng giá</a>
            </div>
          </nav>
        </div>

        <!-- Mobile logo -->
        <div class="md:hidden flex-1 flex justify-center flex-col items-start py-2">
          <img alt="ETC Logo" loading="lazy"
               width="60" height="24"
               decoding="async" data-nimg="1"
               class="h-6 w-auto mb-1 ml-3"
               style="color:transparent"
               :src="EtcLogo">
        </div>

        <!-- Desktop buttons -->
        <div class="hidden lg:block">
          <div class="flex items-center space-x-4">
            <a class="hidden md:inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-5 rounded-lg transition-colors"
               href="/#">Đăng nhập</a>
            <a class="bg-[#0a80e8] hover:bg-[#086ac7] text-white font-semibold py-2 px-5 rounded-lg transition-colors"
               href="/#">Yêu cầu Demo</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="mobileMenuOpen"
          @click="closeMobileMenu"
          class="fixed inset-0 bg-black/50 z-40 md:hidden">
      </div>
    </transition>

    <!-- Mobile Menu Drawer -->
    <transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
      <div
          v-if="mobileMenuOpen"
          id="mobile-sidebar"
          class="fixed top-0 left-0 h-full w-80 bg-white transform transition-all duration-300 ease-in-out z-50 md:hidden shadow-2xl">

        <!-- Drawer Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">Menu</h2>
          <button
              @click="closeMobileMenu"
              class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Drawer Navigation -->
        <nav class="flex-1 overflow-y-auto p-4">
          <ul class="space-y-2">
            <li>
              <a
                  @click="closeMobileMenu"
                  href="/giai-phap"
                  class="block px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 hover:text-[#0a80e8] hover:bg-blue-50 font-bold text-gray-700">
                Giải pháp
              </a>
            </li>
            <li>
              <a
                  @click="closeMobileMenu"
                  href="/tinh-nang"
                  class="block px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 hover:text-[#0a80e8] hover:bg-blue-50 font-bold text-gray-700">
                Tính năng
              </a>
            </li>
            <li>
              <a
                  @click="closeMobileMenu"
                  href="/bang-gia"
                  class="block px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 hover:text-[#0a80e8] hover:bg-blue-50 font-bold text-gray-700">
                Bảng giá
              </a>
            </li>
          </ul>

          <!-- Drawer Buttons -->
          <div class="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <a
                @click="closeMobileMenu"
                href="/#"
                class="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-lg transition-colors">
              Đăng nhập
            </a>
            <a
                @click="closeMobileMenu"
                href="/#"
                class="block w-full text-center bg-[#0a80e8] hover:bg-[#086ac7] text-white font-semibold py-3 px-5 rounded-lg transition-colors">
              Yêu cầu Demo
            </a>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import {ref, watch} from 'vue'
import EtcLogo from '@/assets/images/etcLogo.png'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Prevent body scroll when drawer is open
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>

</style>