<template>
  <section class="space-y-10">
    <HeroSection
        :title="solutionsData[route.params.id]?.title || 'Giải pháp đào tạo toàn diện'"
        :description="solutionsData[route.params.id].description"
        image="https://www.zohowebstatic.com/sites/zweb/images/learn/lms-index/header-image.png"
        image-alt="xLMS Training Solution"
        background-color="background: linear-gradient(135deg, rgb(0, 70, 171) 0%, white 50%, rgb(0, 146, 255) 100%);"
        button-text="Đăng ký"
        button-color="#ffb000"
        button-text-color="#000000"
        title-text-color="#000000"
        :show-button="true"
        @button-click="handleRegister"
    />
    <SliderSection/>
    <Features/>
    <Transform/>
    <Training/>
    <GetLms/>
  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import HeroSection from "@/views/pages/solution/components/HeroSection.vue";
import SliderSection from "@/views/pages/solution/sections/slider.vue";
import Features from "@/views/pages/solution/detail/features.vue";
import Transform from "@/views/pages/solution/detail/transform.vue";
import Training from "@/views/pages/solution/detail/training.vue";
import GetLms from "@/views/pages/solution/sections/GetLms.vue";

const route = useRoute()
const router = useRouter()
const solution = ref(null)

const solutionsData = {
  1: {
    id: 1,
    icon: '👥',
    title: 'Đào tạo nhân viên',
    description: 'Giải pháp đào tạo nhân viên toàn diện giúp nâng cao kỹ năng và hiệu quả làm việc của đội ngũ.',
    overview: 'Xây dựng chương trình đào tạo nhân viên chuyên nghiệp từ cơ bản đến nâng cao. Giúp nhân viên phát triển kỹ năng, nâng cao năng suất và gắn kết với tổ chức thông qua các khóa học tương tác, dễ tiếp cận.',
    features: [
      {title: 'Khóa học tương tác', description: 'Nội dung đa dạng với video, quiz, và thực hành'},
      {title: 'Theo dõi tiến độ', description: 'Dashboard chi tiết về quá trình học tập'},
      {title: 'Chứng chỉ tự động', description: 'Cấp chứng chỉ khi hoàn thành khóa học'},
      {title: 'Gamification', description: 'Tăng động lực học tập với điểm số và huy hiệu'}
    ],
    benefits: [
      'Nâng cao kỹ năng chuyên môn của nhân viên',
      'Giảm thời gian và chi phí đào tạo',
      'Theo dõi tiến độ học tập real-time',
      'Tăng sự gắn kết và hài lòng của nhân viên',
      'Xây dựng văn hóa học tập trong tổ chức'
    ]
  },
  2: {
    id: 2,
    icon: '🤝',
    title: 'Đào tạo khách hàng',
    description: 'Tạo trải nghiệm đào tạo tuyệt vời cho khách hàng với các khóa học chuyên nghiệp.',
    overview: 'Cung cấp các khóa học chuyên nghiệp giúp khách hàng hiểu rõ và sử dụng tốt sản phẩm/dịch vụ của bạn. Tăng sự hài lòng và giữ chân khách hàng lâu dài.',
    features: [
      {title: 'Portal riêng biệt', description: 'Trang học tập chuyên dụng cho khách hàng'},
      {title: 'Onboarding tự động', description: 'Hướng dẫn khách hàng từng bước'},
      {title: 'Hỗ trợ đa ngôn ngữ', description: 'Nội dung bằng nhiều ngôn ngữ khác nhau'},
      {title: 'Video tutorials', description: 'Hướng dẫn chi tiết bằng video'}
    ],
    benefits: [
      'Giảm số lượng yêu cầu hỗ trợ từ khách hàng',
      'Tăng tỷ lệ sử dụng thành công sản phẩm',
      'Cải thiện trải nghiệm khách hàng',
      'Tăng giá trị vòng đời khách hàng',
      'Xây dựng cộng đồng người dùng trung thành'
    ]
  },
  3: {
    id: 3,
    icon: '🤝',
    title: 'Đào tạo đối tác',
    description: 'Xây dựng mạng lưới đối tác mạnh mẽ thông qua các chương trình đào tạo hiệu quả.',
    overview: 'Trang bị kiến thức và kỹ năng cần thiết cho đối tác để họ có thể bán hàng và hỗ trợ khách hàng hiệu quả. Tạo sự đồng bộ và chất lượng trong toàn bộ hệ thống đối tác.',
    features: [
      {title: 'Chương trình chứng nhận', description: 'Cấp chứng chỉ đối tác chính thức'},
      {title: 'Tài liệu bán hàng', description: 'Cung cấp tài liệu marketing và bán hàng'},
      {title: 'Diễn đàn cộng đồng', description: 'Kết nối và chia sẻ kinh nghiệm'},
      {title: 'Cập nhật sản phẩm', description: 'Thông báo tính năng mới tức thời'}
    ],
    benefits: [
      'Tăng doanh số thông qua đối tác',
      'Đảm bảo chất lượng dịch vụ đồng đều',
      'Mở rộng thị trường nhanh chóng',
      'Giảm chi phí quản lý đối tác',
      'Xây dựng mạng lưới đối tác chuyên nghiệp'
    ]
  },
  4: {
    id: 4,
    icon: '📋',
    title: 'Đào tạo tuân thủ',
    description: 'Đảm bảo tuân thủ các quy định với các khóa học và theo dõi tiến độ chặt chẽ.',
    overview: 'Đảm bảo tổ chức của bạn tuân thủ đầy đủ các quy định pháp luật và tiêu chuẩn ngành. Theo dõi và báo cáo chi tiết về việc hoàn thành các khóa học bắt buộc.',
    features: [
      {title: 'Khóa học bắt buộc', description: 'Gán khóa học theo vị trí và quy định'},
      {title: 'Nhắc nhở tự động', description: 'Email nhắc nhở khi sắp hết hạn'},
      {title: 'Báo cáo chi tiết', description: 'Xuất báo cáo tuân thủ cho cơ quan quản lý'},
      {title: 'Lưu trữ chứng chỉ', description: 'Lưu trữ lâu dài và dễ dàng truy xuất'}
    ],
    benefits: [
      'Đảm bảo tuân thủ 100% các quy định',
      'Giảm rủi ro pháp lý cho tổ chức',
      'Tự động hóa quy trình đào tạo tuân thủ',
      'Báo cáo minh bạch cho kiểm toán',
      'Tiết kiệm thời gian quản lý'
    ]
  },
  5: {
    id: 5,
    icon: '📈',
    title: 'Đào tạo bán hàng',
    description: 'Nâng cao kỹ năng bán hàng của đội ngũ với các khóa học thực chiến và hiệu quả.',
    overview: 'Trang bị cho đội ngũ bán hàng những kỹ năng, kỹ thuật và kiến thức sản phẩm cần thiết để đạt doanh số cao. Rèn luyện kỹ năng chốt đơn, xử lý từ chối và chăm sóc khách hàng.',
    features: [
      {title: 'Kỹ năng bán hàng', description: 'Từ cơ bản đến nâng cao'},
      {title: 'Mô phỏng tình huống', description: 'Thực hành với các tình huống thực tế'},
      {title: 'Kiến thức sản phẩm', description: 'Nắm vững thông tin sản phẩm/dịch vụ'},
      {title: 'Coaching trực tuyến', description: 'Hỗ trợ 1-1 từ chuyên gia'}
    ],
    benefits: [
      'Tăng doanh số bán hàng đáng kể',
      'Rút ngắn thời gian onboarding nhân viên mới',
      'Chuẩn hóa quy trình bán hàng',
      'Tăng tự tin và động lực cho đội ngũ',
      'Giảm tỷ lệ nghỉ việc của nhân viên'
    ]
  },
  6: {
    id: 6,
    icon: '🎯',
    title: 'Đào tạo nhân viên mới',
    description: 'Tạo trải nghiệm onboarding tuyệt vời cho nhân viên mới gia nhập công ty.',
    overview: 'Chương trình onboarding toàn diện giúp nhân viên mới hòa nhập nhanh chóng vào tổ chức. Cung cấp đầy đủ thông tin về văn hóa công ty, quy trình làm việc và kỹ năng cần thiết.',
    features: [
      {title: 'Checklist onboarding', description: 'Danh sách công việc cần hoàn thành'},
      {title: 'Giới thiệu công ty', description: 'Video và tài liệu về tổ chức'},
      {title: 'Gặp gỡ đồng nghiệp', description: 'Kết nối với team và mentor'},
      {title: 'Đào tạo theo vai trò', description: 'Nội dung tùy chỉnh theo vị trí'}
    ],
    benefits: [
      'Giảm thời gian onboarding từ tuần xuống ngày',
      'Tăng tỷ lệ giữ chân nhân viên mới',
      'Cải thiện trải nghiệm nhân viên ngay từ đầu',
      'Tăng năng suất nhanh chóng',
      'Tạo ấn tượng tích cực về công ty'
    ]
  }
}

const goBack = () => {
  router.push({name: 'solutions'})
}

onMounted(() => {
  const id = parseInt(route.params.id)
  solution.value = solutionsData[id]
})
</script>

<style scoped>

</style>
