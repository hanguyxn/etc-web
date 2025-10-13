<template>
  <section>
    <div class="w-full flex justify-center items-center flex-col gap-6 py-10 px-4 text-center max-w-4xl mx-auto">
      <h1 class="font-bold text-[42px]">Đội ngũ mạnh hơn. Giảm căng thẳng về công nghệ. Kết quả thực tế.</h1>
    </div>
    <div class="max-w-[1340px] mx-auto px-4 py-16 space-y-8">
      <!-- Hàng 1 -->
      <div class="grid md:grid-cols-[60%_40%] gap-8">
        <!-- Card 1 -->
        <div class="feature-card">
          <h2 class="feature-title">AI biến ý tưởng thành khóa học đầy đủ</h2>
          <p class="feature-text">
            Bỏ qua hàng tháng trời tạo khóa học. Với AI hỗ trợ, bạn có thể biến
            bất kỳ khái niệm nào thành một khóa học hoàn chỉnh với các bài kiểm
            tra và đánh giá trong thời gian kỷ lục, sau đó tinh chỉnh mọi thứ cho
            phù hợp với nhu cầu của bạn.
          </p>
          <img
              :src="CourseAi"
              alt="AI course creation"
              class="feature-img"
          />
        </div>

        <!-- Card 2 -->
        <div class="feature-card">
          <h2 class="feature-title">Con đường học tập xây dựng sự nghiệp</h2>
          <p class="feature-text">
            Biến đào tạo thành bước đệm sự nghiệp. Vạch ra lộ trình học tập giúp
            xây dựng kỹ năng phù hợp với vai trò của nhân viên. Mỗi khóa học đều
            dựa trên khóa học trước, tạo ra lộ trình rõ ràng để phát triển sự
            nghiệp hiệu quả.
          </p>
          <img
              :src="Roadmap"
              alt="Learning path"
              class="feature-img"
          />
        </div>
      </div>

      <!-- Hàng 2 -->
      <div class="grid md:grid-cols-[40%_60%] gap-8">
        <!-- Card 3 -->
        <div class="feature-card">
          <h2 class="feature-title">Một nền tảng đào tạo bạn có thể tùy chỉnh</h2>
          <p class="feature-text">
            Hãy điều chỉnh nền tảng cho phù hợp với giao diện và cảm nhận của công
            ty bạn, để nhân viên luôn cảm thấy thoải mái như ở nhà. Từ màu sắc,
            logo đến toàn bộ trải nghiệm học tập, mọi thứ đều có thể phản ánh văn
            hóa công ty bạn.
          </p>
          <img
              :src="Admin"
              alt="Customizable platform"
              class="feature-img"
          />
        </div>

        <!-- Card 4 -->
        <div class="feature-card">
          <h2 class="feature-title">Báo cáo và phân tích tùy chỉnh</h2>
          <p class="feature-text">
            Sử dụng báo cáo tùy chỉnh để kiểm tra tiến độ và đo lường trên quy mô
            lớn. Xem điểm mạnh của các đội và điểm yếu của họ. Tự tay lọc hoàn
            thành, tỉ lệ đậu và hơn thế nữa, theo dõi các dữ liệu quan trọng với
            bạn.
          </p>
          <img
              :src="Report"
              alt="Custom reports"
              class="feature-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseAi from '@/assets/images/course-ai.png'
import Roadmap from '@/assets/images/roadmap.png'
import Admin from '@/assets/images/admin.png'
import Report from '@/assets/images/report.png'

const features = [
  {
    title: 'AI biến ý tưởng thành khóa học đầy đủ',
    description:
        'Bỏ qua hàng tháng trời tạo khóa học. Với AI hỗ trợ, bạn có thể biến bất kỳ khái niệm nào thành một khóa học hoàn chỉnh với các bài kiểm tra và đánh giá trong thời gian kỷ lục, sau đó tinh chỉnh mọi thứ cho phù hợp với nhu cầu của bạn.',
    image:
        'https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-02-Large.webp',
  },
  {
    title: 'Con đường học tập xây dựng sự nghiệp',
    description:
        'Biến đào tạo thành bước đệm sự nghiệp. Vạch ra lộ trình học tập giúp xây dựng kỹ năng phù hợp với vai trò của nhân viên. Mỗi khóa học đều dựa trên khóa học trước, tạo ra lộ trình rõ ràng để phát triển sự nghiệp hiệu quả.',
    image:
        'https://www.talentlms.com/wp-content/uploads/2025/07/Learning-path-01-Large.webp',
  },
  {
    title: 'Một nền tảng đào tạo bạn có thể tùy chỉnh',
    description:
        'Hãy điều chỉnh nền tảng cho phù hợp với giao diện và cảm nhận của công ty bạn, để nhân viên luôn cảm thấy thoải mái như ở nhà. Từ màu sắc, logo đến toàn bộ trải nghiệm học tập, mọi thứ đều có thể phản ánh văn hóa công ty bạn.',
    image:
        'https://www.talentlms.com/wp-content/uploads/2025/07/Customizable-platform-01-Large.webp',
  },
  {
    title: 'Báo cáo và phân tích tùy chỉnh',
    description:
        'Sử dụng báo cáo tùy chỉnh để kiểm tra tiến độ và đo lường trên quy mô lớn. Xem điểm mạnh của các đội và điểm yếu của họ. Tự tay lọc hoàn thành, tỉ lệ đậu và hơn thế nữa, theo dõi các dữ liệu quan trọng với bạn.',
    image:
        'https://www.talentlms.com/wp-content/uploads/2025/07/Custom-reports-01-Large.webp',
  },
]
</script>

<style scoped>
.feature-card {
  @apply flex flex-col border border-gray-200 rounded-2xl bg-white shadow-sm p-8 hover:shadow-md transition-all duration-300;
}

.feature-title {
  @apply text-2xl font-semibold text-blue-800 mb-4;
}

.feature-text {
  @apply text-gray-700 leading-relaxed mb-6;
}

.feature-img {
  @apply rounded-lg mt-auto;
}
</style>