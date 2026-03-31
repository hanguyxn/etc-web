<template>
  <header class="bg-white sticky top-0 z-30 border-b border-slate-200 transition-shadow duration-300">
    <div class="container mx-auto px-8" >
      <div class="flex items-center justify-between md:px-6 md:py-4">

        <button
          id="mobile-menu-button"
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded text-black hover:text-gray-200 transition-colors order-first"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div class="hidden md:flex items-center space-x-8">
          <a href="/">
            <img
              alt="ETC Logo"
              :src="EtcLogo"
              width="100" height="40"
              class="h-10 w-auto md:mb-2"
              style="color:transparent"
            />
          </a>
          <nav class="flex space-x-1">
            <div class="relative group">
              <a
                href="/giai-phap"
                class="text-[#475569] hover:text-blue-600 transition-colors"
                style="font-weight: 700; margin-right: 20px"
              >
                Giải pháp
              </a>
            </div>
            <div class="relative group">
              <a
                href="/bai-viet"
                class="text-[#475569] hover:text-blue-600 transition-colors"
                style="font-weight: 700; margin-right: 20px"
              >
                Bài viết
              </a>
            </div>
          </nav>
        </div>

        <div class="md:hidden flex-1 flex justify-center flex-col items-start py-2">
          <img
            alt="ETC Logo"
            :src="EtcLogo"
            width="60" height="24"
            class="h-6 w-auto mb-1 ml-3"
            style="color:transparent"
          />
        </div>

        <div class="hidden lg:block">
          <div class="flex items-center space-x-4" bis_skin_checked="1">
            <a 
              class="hidden md:inline-block bg-gray-200 text-gray-400 font-semibold py-2 px-5 rounded-lg opacity-50 cursor-not-allowed pointer-events-none select-none" 
              href="#" 
              title="Tính năng đang bảo trì"
            >
              Đăng nhập
            </a>
            <a class="bg-[#0a80e8] hover:bg-[#086ac7] text-white font-semibold py-2 px-5 rounded-lg transition-colors" href="/#">
            Yêu cầu Demo
            </a>
          </div>        
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import EtcLogo from '@/assets/images/etcLogo.png'

const props = defineProps(['mobileMenuOpen'])
const emit = defineEmits(['toggle-menu'])

const toggleMobileMenu = () => {
  emit('toggle-menu')
}
</script>