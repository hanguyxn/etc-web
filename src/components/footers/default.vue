<template>
  <footer class="bg-blue-900 text-white py-12">
    <div class="container mx-auto px-4 py-8" style="padding: 24px 80px">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img alt="ETC Logo" :src="EtcLogo" width="100" height="40" class="h-10 w-auto" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Edtexco</h3>
          <p class="text-gray-300 text-sm mb-4">
            Nền tảng đào tạo thế hệ mới, giúp doanh nghiệp phát triển năng lực nhân sự trong dòng chảy công việc
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Liên kết nhanh</h4>
          <ul class="space-y-2">
            <li><a class="text-gray-300 hover:text-white transition-colors text-sm" href="/">Trang chủ</a></li>
            <li><a class="text-gray-300 hover:text-white transition-colors text-sm" href="/blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Liên hệ</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>Email: support@edtexco.vn</li>
            <li>Phone: 08.1221.3836</li>
            <li>Address: Tầng 9 - Tòa Zodiac, Số 1, Ngõ 19, Phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy, HN</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 text-center text-white text-sm mt-8 pt-6 border-t border-blue-800">
      © 2025 EDTEXCO. All rights reserved.
    </div>
  </footer>
</template>
<script setup>
import EtcLogo from '@/assets/images/etcLogo.png'
</script>

<style scoped>

</style>