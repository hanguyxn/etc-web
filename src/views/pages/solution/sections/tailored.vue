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
import userDashboardImage from '@/assets/images/adminview.png'
import dashboardImage from '@/assets/images/dashboard_cms.png'
const solutions = ref([
  {
    "id": 1,
    "category": "employee-training",
    "title": "Online Employee Training Software",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/thumb-employee-training-1.webp",
    "heading": "Đào tạo nhân viên",
    "description": "Khóa đào tạo cần thiết nhất. Tìm hiểu lý do tại sao TalentLMS là phần mềm đào tạo nhân viên phù hợp cho công ty của bạn.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 2,
    "category": "employee-training",
    "title": "Employee Onboarding Software",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/onboarding-training-solutions-thumbimage.webp",
    "heading": "Đào tạo hội nhập",
    "description": "Ấn tượng đầu tiên rất quan trọng. Khám phá cách chào đón nhân viên mới và giúp họ làm việc năng suất nhanh hơn một cách dễ dàng với TalentLMS.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 3,
    "category": "employee-training",
    "title": "Top Compliance Training Software",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/compliance-training-solutions-thumb-image.webp",
    "heading": "Đào tạo tuân thủ",
    "description": "Cần cập nhật các chính sách do chính phủ hoặc công ty quy định cho nhân viên? Xem cách TalentLMS giúp bạn đạt được thành công trong đào tạo tuân thủ.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 4,
    "category": "department-training",
    "title": "Best Sales Training Software",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/sales-training-solutions-thumb-image.webp",
    "heading": "Đào tạo bán hàng",
    "description": "Với một nguồn thông tin đáng tin cậy duy nhất, đội ngũ của bạn có thể vượt chỉ tiêu mọi lúc. Khám phá cách đạt được thành công trong đào tạo bán hàng với TalentLMS.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 5,
    "category": "external-more",
    "title": "Customer Training Software",
    "image": userDashboardImage,
    "heading": "Đào tạo khách hàng",
    "description": "Một khách hàng được trang bị kiến thức là một khách hàng hài lòng hơn. Khám phá cách TalentLMS giúp bạn tạo và quản lý một chương trình đào tạo khách hàng thú vị.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 6,
    "category": "external-more",
    "title": "Partner Training LMS Software",
    "image": dashboardImage,
    "heading": "Đào tạo đối tác",
    "description": "Phát triển doanh nghiệp của bạn từ bên ngoài bằng cách trao quyền cho các đối tác. Khám phá cách TalentLMS giúp bạn cung cấp chương trình đào tạo đối tác liền mạch.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 7,
    "category": "",
    "title": "Remote Training Software",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/remote-workforce-training-solutions-thumb-image.webp",
    "heading": "Đào tạo nhân viên từ xa",
    "description": "Khám phá lý do tại sao đào tạo lại quan trọng đối với nhân viên làm việc từ xa của bạn. Tìm hiểu các phương pháp hay nhất và những thách thức của đào tạo từ xa.",
    "buttonText": "Tìm hiểu thêm"
  },
  {
    "id": 8,
    "category": "external-more",
    "title": "Extended Enterprise Software – Train Your Network",
    "image": "https://www.talentlms.com/wp-content/uploads/2025/07/extended-enterprise-training-solutions-thumb-image.webp",
    "heading": "Đào tạo doanh nghiệp mở rộng",
    "description": "Phát triển mạng lưới của bạn chưa bao giờ dễ dàng hơn. Chọn TalentLMS cho chương trình đào tạo doanh nghiệp mở rộng mang lại kết quả. Dùng thử miễn phí!",
    "buttonText": "Tìm hiểu thêm"
  },
  // {
  //   "id": 9,
  //   "category": "department-training",
  //   "title": "Customer Service Training Software for Support Teams",
  //   "image": "https://www.talentlms.com/wp-content/uploads/2025/07/customer-support-training-solutions-thumb-image.webp",
  //   "heading": "Đào tạo hỗ trợ khách hàng",
  //   "description": "Nếu khách hàng luôn đúng, đội ngũ hỗ trợ của bạn phải luôn sẵn sàng. Xem cách TalentLMS giúp cung cấp đào tạo khi cần thiết nhất.",
  //   "buttonText": "Tìm hiểu thêm"
  // },
  // {
  //   "id": 10,
  //   "category": "employee-training",
  //   "title": "Best Continuous Training LMS for Employee Growth",
  //   "image": "https://www.talentlms.com/wp-content/uploads/2025/07/continous-training-solutions-thumb-image.webp",
  //   "heading": "Đào tạo liên tục",
  //   "description": "Đào tạo liên tục giúp tăng tỷ lệ giữ chân nhân viên, hiệu suất và khả năng cạnh tranh. Đầu tư vào học tập để hỗ trợ tiềm năng và sự phát triển nghề nghiệp của đội ngũ.",
  //   "buttonText": "Tìm hiểu thêm"
  // },
  // {
  //   "id": 11,
  //   "category": "employee-training",
  //   "title": "Online Cybersecurity Training Software",
  //   "image": "https://www.talentlms.com/wp-content/uploads/2025/07/cybersecurity-training-solutions-thumb-image.webp",
  //   "heading": "Đào tạo an ninh mạng",
  //   "description": "Bảo vệ doanh nghiệp của bạn khỏi mọi mối đe dọa và vi phạm an ninh mạng. Cung cấp trải nghiệm đào tạo an ninh mạng tốt nhất cho nhân viên với TalentLMS.",
  //   "buttonText": "Tìm hiểu thêm"
  // },
  // {
  //   "id": 12,
  //   "category": "employee-training",
  //   "title": "Workplace Harassment Training Software",
  //   "image": "https://www.talentlms.com/wp-content/uploads/2025/07/workplace-harassment-training-solutions-thumb-image.webp",
  //   "heading": "Đào tạo về phòng chống quấy rối nơi làm việc",
  //   "description": "Nuôi dưỡng một môi trường làm việc an toàn, hòa nhập và tôn trọng hơn. Tìm hiểu cách TalentLMS giúp đội ngũ của bạn tập trung vào việc làm đúng đắn—công việc của họ.",
  //   "buttonText": "Tìm hiểu thêm"
  // },
  // {
  //   "id": 13,
  //   "category": "department-training",
  //   "title": "Best Marketing Training Software",
  //   "image": "https://www.talentlms.com/wp-content/uploads/2025/07/marketing-training-solutions-thumb-image.webp",
  //   "heading": "Đào tạo marketing",
  //   "description": "Khai phá toàn bộ tiềm năng của đội ngũ marketing với LMS hàng đầu. Dễ dàng tạo và cung cấp các khóa đào tạo về những xu hướng mới nhất để thành công trong marketing.",
  //   "buttonText": "Tìm hiểu thêm"
  // }
])
</script>

<style scoped>
</style>
