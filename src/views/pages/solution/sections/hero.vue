<template>
  <HeroSection
      title="Nhu cầu đào tạo của bạn, giải pháp đào tạo của bạn: XLMS"
      description="Cung cấp cho mọi nhân viên, khách hàng và đối tác những khóa học phù hợp và có mục tiêu - bất kể trường hợp sử dụng của bạn là gì."
      image="https://www.zohowebstatic.com/sites/zweb/images/learn/lms-index/header-image.png"
      image-alt="xLMS Training Solution"
      background-color="linear-gradient(135deg, rgb(0, 70, 171) 0%, rgb(0, 146, 255) 100%)"
      button-text="Đăng ký"
      button-color="#ffb000"
      button-text-color="#000000"
      :show-button="true"
      @button-click="handleRegister"
  />
</template>

<script setup>
import HeroSection from '@/views/pages/solution/components/HeroSection.vue'

const handleRegister = () => {
  console.log('Đăng ký clicked')
  // Thêm logic đăng ký ở đây
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