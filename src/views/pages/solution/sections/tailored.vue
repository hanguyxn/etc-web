<template>
  <section>
    <div class="text-center mt-[80px] max-w-6xl mx-auto px-4">
      <h1 class="text-gray-900 text-5xl font-bold mb-8">
        Giải pháp phù hợp cho mọi nhu cầu đào tạo
      </h1>
      <p class="tex-gray-400 text-lg">Danh sách đầy đủ các trường hợp sử dụng đào tạo mà XLMS hỗ trợ.</p>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
      <CardCard
          v-for="solution in solutions"
          :key="solution.id"
          :solution-id="solution.id"
          :category="solution.category"
          :title="solution.title"
          :image="solution.image"
          :heading="solution.heading"
          :description="solution.description"
          :button-text="solution.buttonText"
      />
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import CardCard from '@/views/pages/solution/components/card.vue'

const solutions = ref([
  {
    id: 1,
    category: 'employee-training',
    title: 'Online Employee Training Software',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    heading: 'Đào tạo nhân viên',
    description: 'Giải pháp đào tạo nhân viên toàn diện giúp nâng cao kỹ năng và hiệu quả làm việc của đội ngũ.',
    buttonText: 'Tìm hiểu thêm'
  },
  {
    id: 2,
    category: 'customer-training',
    title: 'Customer Training Software',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop',
    heading: 'Đào tạo khách hàng',
    description: 'Tạo trải nghiệm đào tạo tuyệt vời cho khách hàng với các khóa học chuyên nghiệp.',
    buttonText: 'Tìm hiểu thêm'
  },
  {
    id: 3,
    category: 'partner-training',
    title: 'Partner Training Software',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
    heading: 'Đào tạo đối tác',
    description: 'Xây dựng mạng lưới đối tác mạnh mẽ thông qua các chương trình đào tạo hiệu quả.',
    buttonText: 'Tìm hiểu thêm'
  },
  {
    id: 4,
    category: 'compliance-training',
    title: 'Compliance Training Software',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
    heading: 'Đào tạo tuân thủ',
    description: 'Đảm bảo tuân thủ các quy định với các khóa học và theo dõi tiến độ chặt chẽ.',
    buttonText: 'Tìm hiểu thêm'
  },
  {
    id: 5,
    category: 'sales-training',
    title: 'Sales Training Software',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
    heading: 'Đào tạo bán hàng',
    description: 'Nâng cao kỹ năng bán hàng của đội ngũ với các khóa học thực chiến và hiệu quả.',
    buttonText: 'Tìm hiểu thêm'
  },
  {
    id: 6,
    category: 'onboarding',
    title: 'Employee Onboarding Software',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    heading: 'Đào tạo nhân viên mới',
    description: 'Tạo trải nghiệm onboarding tuyệt vời cho nhân viên mới gia nhập công ty.',
    buttonText: 'Tìm hiểu thêm'
  }
])
</script>

<style scoped>
</style>
