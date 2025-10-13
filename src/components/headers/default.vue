<template>
  <header class="bg-white sticky top-0 z-30 border-b border-slate-200 transition-shadow duration-300  ">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between md:px-6 md:py-4">
        <button id="mobile-menu-button"
                class="md:hidden p-2 rounded text-black hover:text-gray-200 transition-colors order-first">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div class="hidden md:flex items-center space-x-8"><a href="/"><img alt="ETC Logo" loading="lazy" width="100"
                                                                            height="40" decoding="async" data-nimg="1"
                                                                            class="h-10 w-auto md:mb-2"
                                                                            style="color:transparent"
                                                                            :src="EtcLogo"></a>
          <nav class="flex space-x-1">
            <div class="relative group"><a
                class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                href="/giai-phap">Giải pháp</a></div>
            <div class="relative group"><a
                class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                href="/tinh-nang">Tính năng</a></div>
            <div class="relative group"><a
                class="px-4 py-2 flex items-center gap-2 text-base text-slate-600 hover:text-[#0a80e8] transition-colors font-medium hover:underline text-[#475569]"
                href="/bang-gia">Bảng giá</a></div>
          </nav>
        </div>
        <div class="md:hidden flex-1 flex justify-center flex-col items-start py-2"><img alt="ETC Logo" loading="lazy"
                                                                                         width="60" height="24"
                                                                                         decoding="async" data-nimg="1"
                                                                                         class="h-6 w-auto mb-1 ml-3"
                                                                                         style="color:transparent"
                                                                                         :src="EtcLogo">
        </div>
        <div class="hidden lg:block">
          <div class="flex items-center space-x-4"><a
              class="hidden md:inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-5 rounded-lg transition-colors"
              href="/#">Đăng nhập</a><a
              class="bg-[#0a80e8] hover:bg-[#086ac7] text-white font-semibold py-2 px-5 rounded-lg transition-colors"
              href="/#">Yêu cầu Demo</a></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'
import EtcLogo from '@/assets/images/etcLogo.png'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>

</style>