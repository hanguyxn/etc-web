<template>
  <section class="space-y-10 bg-white">
    <HeroSection
      :title="solutionsData[route.params.id].banner?.title || 'Giải pháp đào tạo toàn diện'"
      :description="solutionsData[route.params.id].banner?.description"
      :image="solutionsData[route.params.id].banner?.banner_image"
      :image-alt="solutionsData[route.params.id].banner?.note"
      background-color="linear-gradient(135deg, rgb(0, 70, 171) 0%, white 50%, rgb(0, 146, 255) 100%)"
      button-text="Đăng ký"
      button-color="#ffb000"
      button-text-color="#000000"
      title-text-color="#000000"
      :show-button="true"
      is-detail
      @button-click="handleRegister"
    />
    <SliderSection />
    <Features />
    <Transform :data="solutionsData[route.params.id]?.transform" />
    <Training />
    <GetLms />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import HeroSection from "@/views/pages/solution/components/HeroSection.vue";
import SliderSection from "@/views/pages/solution/sections/slider.vue";
import Features from "@/views/pages/solution/detail/features.vue";
import Transform from "@/views/pages/solution/detail/transform.vue";
import Training from "@/views/pages/solution/detail/training.vue";
import GetLms from "@/views/pages/solution/sections/GetLms.vue";
import userDashboardImage from "@/assets/images/adminview.png";
import dashboardImage from "@/assets/images/dashboard_cms.png";
import employee1 from "@/assets/images/employee1.png";
const route = useRoute();
const router = useRouter();
const solution = ref(null);

const currentId = ref(route.params.id);

const solutionsData = {
  1: {
    banner: {
      note: "TalentLMS cho Đào tạo Hội nhập:",
      title: "Sự giới thiệu mà nhân viên mới của bạn cần để bắt đầu công việc",
      description: "Đưa nhân viên mới từ lúc ra mắt trở thành những người chơi ngôi sao trên phần mềm giới thiệu nhân viên trực quan, thú vị và hấp dẫn.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/07/hero-employee-training-desktop.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 22.001C17.5228 22.001 22 17.5238 22 12.001C22 6.47813 17.5228 2.00098 12 2.00098C6.47715 2.00098 2 6.47813 2 12.001C2 17.5238 6.47715 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 8.08398V12.1392C12 12.1392 12.0276 12.2219 12.069 12.2357L15.5862 13.2978" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tăng tốc năng suất của nhân viên mới",
        description:
          "Nhân viên mới chuyển từ trạng thái choáng ngợp sang tự tin nhanh hơn. Việc giới thiệu có mục tiêu và huấn luyện AI được cá nhân hóa giúp họ nắm bắt vai trò mới và thực hiện công việc một cách tự tin.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M14.9677 11.6678C17.6744 8.96115 18.8017 5.70003 17.4856 4.38393C16.1695 3.06783 12.9084 4.19513 10.2017 6.90183C7.49499 9.60852 6.36769 12.8696 7.68379 14.1857C8.99989 15.5018 12.261 14.3745 14.9677 11.6678Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M17.4856 14.1854C18.8017 12.8693 17.6744 9.60819 14.9677 6.90149C12.261 4.19479 8.99989 3.06749 7.68379 4.38359C6.36769 5.69969 7.49499 8.96081 10.2017 11.6675C12.9084 14.3742 16.1695 15.5015 17.4856 14.1854Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M12.5842 10.1918C13.0858 10.1918 13.4925 9.78506 13.4925 9.28338C13.4925 8.7817 13.0858 8.375 12.5842 8.375C12.0825 8.375 11.6758 8.7817 11.6758 9.28338C11.6758 9.78506 12.0825 10.1918 12.5842 10.1918Z" stroke="currentColor" stroke-width="1.2"></path>\n<path d="M21.5 5.67871C22.11 6.19871 22.5 6.97871 22.5 7.83871V16.6587C22.5 18.2287 21.23 19.4987 19.66 19.4987H5.34C3.77 19.4987 2.5 18.2287 2.5 16.6587V7.83871C2.5 6.96871 2.89 6.19871 3.5 5.67871" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M9.5 21.9985H15.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Tự động hóa công việc quản trị bận rộn",
        description: "Việc giao bài, theo dõi hoàn thành và nhắc nhở chạy tự động. Giải phóng hàng giờ để xây dựng mối quan hệ thay vì quản lý hậu cần đào tạo.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M14.5904 14.9912V17.3812C14.5904 17.5512 14.5004 17.7012 14.3504 17.7812C12.8804 18.5812 11.1104 18.5812 9.64039 17.7812C9.49039 17.7012 9.40039 17.5512 9.40039 17.3812V14.9912" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.9902 13.8511V15.7911" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M8.25012 13.441L11.7901 11.671C11.9201 11.611 12.0701 11.611 12.2001 11.671L15.7401 13.441C16.0801 13.611 16.0801 14.091 15.7401 14.261L12.2001 16.031C12.0701 16.091 11.9201 16.091 11.7901 16.031L8.25012 14.261C7.91012 14.091 7.91012 13.611 8.25012 13.441Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.98 21.501C3.33 21.501 2 20.171 2 18.521V6.98098C2 5.33098 3.33 4.00098 4.98 4.00098H19.02C20.67 4.00098 22 5.33098 22 6.98098V18.501C22 20.161 20.66 21.501 19 21.501H4.98Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 8.75098H22" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M8.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Loại bỏ các lỗ hổng tuân thủ",
        description:
          "Mỗi nhân viên mới đều hoàn thành khóa đào tạo bắt buộc trước khi họ có thể bị bỏ sót. Không còn phải băn khoăn liệu ai đó có bỏ lỡ khóa đào tạo về quấy rối hay các quy trình an toàn không.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12.572 21.2869C11.8482 19.744 11.8673 17.4012 11.9435 16.0869C11.972 15.5631 11.7815 15.0488 11.4006 14.6869C11.0482 14.344 10.572 14.1821 10.0958 14.2202C8.87678 14.325 6.39107 14.3726 4.71488 13.4202" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.47651 12.7251V4.38229C4.47651 3.33467 5.33365 2.47753 6.38127 2.47753H17.8098C18.8575 2.47753 19.7146 3.33467 19.7146 4.38229V19.6204C19.7146 20.668 18.8575 21.5251 17.8098 21.5251H13.2765C12.5146 21.5251 11.7908 21.2204 11.2575 20.6871L5.3146 14.7442C4.78127 14.2109 4.47651 13.4775 4.47651 12.7251Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tiêu chuẩn hóa đào tạo thiết yếu",
        description:
          "Các nội dung thiết yếu như tuân thủ hoặc văn hóa công ty được cung cấp một cách đồng nhất. Dù bạn đào tạo năm hay năm nghìn người, kiến thức cốt lõi không còn là một cuộc xổ số dựa trên người thực hiện việc giới thiệu.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.96 17.0007V15.4707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.96 8.43098V7.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.9002 9.34066C13.7502 9.19066 13.5202 8.99066 13.2102 8.82066C12.9302 8.66066 12.5702 8.46066 12.0702 8.44066C11.8902 8.44066 11.3802 8.42066 10.8802 8.75066C10.7302 8.85066 10.3902 9.08066 10.2502 9.52066C10.0602 10.1107 10.3802 10.6507 10.4802 10.8007C10.7802 11.2407 11.1802 11.5207 11.8502 11.8507C12.6102 12.2207 12.8202 12.2807 13.3002 12.7007C13.4902 12.8607 13.8702 13.3207 13.8402 13.9307C13.8002 14.6607 13.1702 15.1007 13.0202 15.1907C12.6102 15.4607 12.2002 15.4707 11.9602 15.4807C11.7602 15.4807 11.1802 15.5007 10.5902 15.1407C10.0402 14.8107 9.7902 14.3407 9.7002 14.1407" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M20.4004 7.15129V2.32129" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 9.35098C3.17 5.11098 7.05 2.00098 11.66 2.00098C15.43 2.00098 18.71 4.08098 20.42 7.15098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3.04004 21.7111V16.8711" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.59 13.9307C20.69 18.5307 16.64 22.0007 11.78 22.0007C8.02004 22.0007 4.75004 19.9307 3.04004 16.8707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Hiển thị ROI thuyết phục ban lãnh đạo",
        description:
          "Triển khai onboarding nhanh chóng và cho thấy kết quả có thể đo lường được một cách nhanh chóng. Lãnh đạo thấy rõ giá trị đào tạo trong 11 tháng thay vì chờ đợi nhiều năm để có lợi nhuận.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 16.501C16.0041 16.501 19.25 13.255 19.25 9.25098C19.25 5.24691 16.0041 2.00098 12 2.00098C7.99594 2.00098 4.75 5.24691 4.75 9.25098C4.75 13.255 7.99594 16.501 12 16.501Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 6.41113V9.35113C12 9.35113 12.02 9.41113 12.05 9.42113L14.6 10.1911" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M10.75 20.751H6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M22 20.751H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M17.5 20.751H13.25" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4 20.751H2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M5.25 22.001C5.94036 22.001 6.5 21.4413 6.5 20.751C6.5 20.0606 5.94036 19.501 5.25 19.501C4.55964 19.501 4 20.0606 4 20.751C4 21.4413 4.55964 22.001 5.25 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 22.001C12.6904 22.001 13.25 21.4413 13.25 20.751C13.25 20.0606 12.6904 19.501 12 19.501C11.3096 19.501 10.75 20.0606 10.75 20.751C10.75 21.4413 11.3096 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M18.75 22.001C19.4404 22.001 20 21.4413 20 20.751C20 20.0606 19.4404 19.501 18.75 19.501C18.0596 19.501 17.5 20.0606 17.5 20.751C17.5 21.4413 18.0596 22.001 18.75 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giới thiệu để giữ chân nhân viên lâu dài",
        description: "Đừng để mất 39% nhân viên hối hận vì đã gia nhập trong quá trình giới thiệu kém. Đào tạo chất lượng tạo ra sự tự tin cho mọi người ngay từ ngày đầu tiên.",
      },
    ],
    content_blocks: [
      {
        title: "Tạo khóa học bằng AI theo kịp tốc độ tuyển dụng của bạn",
        description:
          "Tạo khóa đào tạo theo vai trò cụ thể một cách nhanh chóng với các mẫu sẵn có và một nền tảng trực quan được hỗ trợ bởi AI. Dù bạn làm trong lĩnh vực L&D hay quản lý một đội nhóm, việc triển khai chương trình giới thiệu hiệu quả là rất dễ dàng.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
      },
      {
        title: "Lộ trình học tập rõ ràng để hướng dẫn nhân viên mới",
        description:
          "Mỗi nhân viên hoàn thành khóa đào tạo của họ theo đúng thứ tự, với nội dung phù hợp và liên quan đến vai trò của họ. Tạo ra các hành trình nhất quán, có thể lặp lại để xây dựng sự tự tin ngay từ ngày đầu tiên.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Learning-path-02-Small.webp",
      },
      {
        title: "Luôn sẵn sàng cho kiểm toán với các chứng chỉ",
        description:
          "Cấp chứng chỉ tự động khi khóa đào tạo hoàn thành, để bạn có hồ sơ đã được xác minh cho mỗi nhân viên. Từ tuân thủ đến các vấn đề nhân sự thiết yếu, hãy luôn sẵn sàng cho các cuộc kiểm toán, đánh giá nội bộ và báo cáo cho ban lãnh đạo.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Certificate-02-Small.webp",
      },
      {
        title: "Onboarding có cấu trúc theo vai trò, đội nhóm và địa điểm",
        description:
          "Sử dụng các nhóm và chi nhánh để giao chương trình giới thiệu phù hợp cho đúng người—dù họ là nhân viên kinh doanh, quản lý kho hay trưởng nhóm khu vực. Và khi tổ chức của bạn phát triển, cấu trúc của bạn cũng phát triển theo.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
      },
    ],
    tabs: [
      {
        title: "Luôn cập nhật",
        description:
          "Đào tạo giới thiệu nhân viên không nên chỉ diễn ra một lần. Cung cấp các khóa học được cập nhật thường xuyên để đảm bảo nhân viên mới của bạn luôn nắm được thông tin mới nhất và cảm thấy tự tin trong vai trò của mình.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-updates.webp",
      },
      {
        title: "Đào tạo trực quan",
        description:
          "Đừng để nền tảng đào tạo của bạn cản trở việc học. TalentLMS có giao diện dễ sử dụng, giúp việc giới thiệu nhân viên mới trở nên dễ dàng cho cả bạn và đội ngũ của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-platform.webp",
      },
      {
        title: "Kết nối các công cụ bạn yêu thích",
        description:
          "Tự động hóa công việc quản trị tẻ nhạt và giúp việc giới thiệu nhân viên mới trở nên liền mạch hơn. Tích hợp TalentLMS với BambooHR và các ứng dụng nhân sự khác của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-integration-01.webp",
      },
    ],
    transform: {
      title: "Số hóa và tự động hóa toàn bộ hoạt động đào tạo.",
      features: [
        {
          title: "Tự động hóa hành trình onboarding",
          description: "Hệ thống tự động phân bổ nội dung theo timeline hội nhập, giúp nhân sự mới tiếp cận đúng thông tin theo từng giai đoạn.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-02-Large.webp",
        },
        {
          title: "Thiết lập lộ trình theo vai trò",
          description: "Xây dựng các chương trình onboarding riêng cho từng vị trí, đảm bảo học đúng nội dung cần thiết cho công việc.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Learning-path-01-Large.webp",
        },
        {
          title: "Theo dõi tiến độ theo thời gian thực",
          description: "Quản lý có thể nắm bắt ngay tình trạng học tập và mức độ hoàn thành của từng nhân sự.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customizable-platform-01-Large.webp",
        },
        {
          title: "Cảnh báo và hỗ trợ kịp thời",
          description: "Phát hiện sớm các điểm chậm tiến độ hoặc chưa hoàn thành để chủ động can thiệp.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Custom-reports-01-Large.webp",
        },
      ],
    },
  },
  2: {
    banner: {
      note: "TalentLMS cho Đào tạo Tuân thủ:",
      title: "Bảo vệ tổ chức và nhân viên của bạn khỏi những rủi ro không được kiểm soát",
      description: "Luôn cập nhật các quy định của ngành và ghi lại sự tuân thủ của bạn trên một nền tảng đào tạo hấp dẫn.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/07/compliance-training-header-web.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 22.001C17.5228 22.001 22 17.5238 22 12.001C22 6.47813 17.5228 2.00098 12 2.00098C6.47715 2.00098 2 6.47813 2 12.001C2 17.5238 6.47715 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 8.08398V12.1392C12 12.1392 12.0276 12.2219 12.069 12.2357L15.5862 13.2978" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giảm thiểu rủi ro không tuân thủ",
        description:
          "Giảm thiểu nguy cơ bị phạt tốn kém và các vấn đề pháp lý thông qua đào tạo toàn diện. Bảo vệ tổ chức của bạn khỏi các vi phạm có thể gây tổn hại cả về tài chính và danh tiếng.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M14.9677 11.6678C17.6744 8.96115 18.8017 5.70003 17.4856 4.38393C16.1695 3.06783 12.9084 4.19513 10.2017 6.90183C7.49499 9.60852 6.36769 12.8696 7.68379 14.1857C8.99989 15.5018 12.261 14.3745 14.9677 11.6678Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M17.4856 14.1854C18.8017 12.8693 17.6744 9.60819 14.9677 6.90149C12.261 4.19479 8.99989 3.06749 7.68379 4.38359C6.36769 5.69969 7.49499 8.96081 10.2017 11.6675C12.9084 14.3742 16.1695 15.5015 17.4856 14.1854Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M12.5842 10.1918C13.0858 10.1918 13.4925 9.78506 13.4925 9.28338C13.4925 8.7817 13.0858 8.375 12.5842 8.375C12.0825 8.375 11.6758 8.7817 11.6758 9.28338C11.6758 9.78506 12.0825 10.1918 12.5842 10.1918Z" stroke="currentColor" stroke-width="1.2"></path>\n<path d="M21.5 5.67871C22.11 6.19871 22.5 6.97871 22.5 7.83871V16.6587C22.5 18.2287 21.23 19.4987 19.66 19.4987H5.34C3.77 19.4987 2.5 18.2287 2.5 16.6587V7.83871C2.5 6.96871 2.89 6.19871 3.5 5.67871" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M9.5 21.9985H15.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Luôn sẵn sàng cho kiểm toán",
        description:
          "Đối mặt với các cuộc kiểm toán một cách hoàn toàn tự tin. Truy cập tức thì vào tất cả các hồ sơ và tài liệu tuân thủ có nghĩa là bạn luôn luôn chuẩn bị sẵn sàng.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M14.5904 14.9912V17.3812C14.5904 17.5512 14.5004 17.7012 14.3504 17.7812C12.8804 18.5812 11.1104 18.5812 9.64039 17.7812C9.49039 17.7012 9.40039 17.5512 9.40039 17.3812V14.9912" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.9902 13.8511V15.7911" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M8.25012 13.441L11.7901 11.671C11.9201 11.611 12.0701 11.611 12.2001 11.671L15.7401 13.441C16.0801 13.611 16.0801 14.091 15.7401 14.261L12.2001 16.031C12.0701 16.091 11.9201 16.091 11.7901 16.031L8.25012 14.261C7.91012 14.091 7.91012 13.611 8.25012 13.441Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.98 21.501C3.33 21.501 2 20.171 2 18.521V6.98098C2 5.33098 3.33 4.00098 4.98 4.00098H19.02C20.67 4.00098 22 5.33098 22 6.98098V18.501C22 20.161 20.66 21.501 19 21.501H4.98Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 8.75098H22" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M8.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Đặt chế độ tuân thủ tự động",
        description:
          "Giảm bớt căng thẳng về các hạn chót bị bỏ lỡ và giải phóng bản thân khỏi việc theo dõi lịch. Với tự động hóa, mọi nhân viên đều được giao và hoàn thành khóa đào tạo bắt buộc đúng hạn.",
      },
    ],
    content_blocks: [
      {
        title: "Giao bài và nhắc nhở, được tự động hóa",
        description:
          "Thiết lập việc giao khóa học và thông báo tự động. Tự động giao đào tạo dựa trên vai trò, địa điểm hoặc ngày tuyển dụng, với các lời nhắc được gửi tự động trước hạn chót.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Notification-01-Large.webp",
      },
      {
        title: "Báo cáo chứng minh sự tuân thủ",
        description: "Truy cập các báo cáo chuyên sâu theo dõi tỷ lệ hoàn thành, điểm kiểm tra và trạng thái đào tạo trong toàn bộ tổ chức của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small.webp",
      },
      {
        title: "Bài kiểm tra và khảo sát để kiểm tra khả năng ghi nhớ",
        description:
          "Sử dụng nhiều loại bài kiểm tra và khảo sát hoàn thành để xác nhận kiến thức và thu thập thông tin chi tiết từ người dùng. Xác định các lỗ hổng sớm và giải quyết chúng trước khi chúng trở thành vấn đề lớn hơn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Test-01-Small.webp",
      },
      {
        title: "Chứng chỉ tự động gia hạn",
        description:
          "Tạo chứng chỉ tự động sau khi hoàn thành khóa học. Thêm vào đó, thiết lập lịch trình đào tạo tuân thủ để phù hợp với các yêu cầu quy định hoặc chính sách của công ty bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Certificate-01-Large.webp",
      },
    ],
    tabs: [
      {
        title: "Thu hẹp khoảng cách",
        description:
          "Đặt khóa đào tạo tuân thủ quan trọng ngay trong tầm tay của nhân viên bạn với ứng dụng TalentLMS, ngay cả khi họ làm việc tại nhà, trên sàn nhà máy hoặc trên đường.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-mobile.webp",
      },
      {
        title: "Bảo vệ nền tảng của bạn",
        description: "Bảo vệ dữ liệu nhạy cảm và độc quyền của bạn bằng phần mềm đào tạo tuân thủ nơi an ninh được coi là tối quan trọng.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-security.webp",
      },
      {
        title: "Chi tiêu ít hơn",
        description:
          "Đào tạo tuân thủ bắt buộc không cần phải có giá cao. Bắt đầu miễn phí, mở rộng theo kế hoạch giá linh hoạt của TalentLMS và đào tạo với các tính năng phù hợp với nhu cầu chính xác của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-free-plan.webp",
      },
    ],
    transform: {
      title: "Bảo vệ tổ chức. Đơn giản hóa tuân thủ. Luôn sẵn sàng.",
      features: [
        {
          title: "Quản lý chương trình đào tạo tập trung",
          description: "Tổ chức và vận hành toàn bộ chương trình đào tạo trên một nền tảng thống nhất.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Notification-01-Large.webp",
        },
        {
          title: "Cá nhân hóa lộ trình học tập",
          description: "Phân bổ nội dung dựa trên vai trò, năng lực và định hướng phát triển của từng nhân viên.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small.webp",
        },
        {
          title: "Theo dõi và đo lường hiệu quả",
          description: "Ghi nhận tiến độ, kết quả học tập và mức độ hoàn thành theo từng cá nhân và phòng ban.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Test-01-Small.webp",
        },
        {
          title: "Liên kết với hiệu suất công việc",
          description: "Liên kết dữ liệu đào tạo với kết quả kinh doanh để cải thiện hiệu suất.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Certificate-01-Large.webp",
        },
      ],
    },
  },
  3: {
    banner: {
      note: "TalentLMS cho Đào tạo Bán hàng:",
      title: "Phát triển cả nhân viên bán hàng và lợi nhuận của bạn",
      description: "Đạt được mục tiêu của bạn với việc học tập có cấu trúc, dễ tiếp cận và theo yêu cầu.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/07/Sales-training-header-web.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.96 17.0007V15.4707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.96 8.43098V7.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.9002 9.34066C13.7502 9.19066 13.5202 8.99066 13.2102 8.82066C12.9302 8.66066 12.5702 8.46066 12.0702 8.44066C11.8902 8.44066 11.3802 8.42066 10.8802 8.75066C10.7302 8.85066 10.3902 9.08066 10.2502 9.52066C10.0602 10.1107 10.3802 10.6507 10.4802 10.8007C10.7802 11.2407 11.1802 11.5207 11.8502 11.8507C12.6102 12.2207 12.8202 12.2807 13.3002 12.7007C13.4902 12.8607 13.8702 13.3207 13.8402 13.9307C13.8002 14.6607 13.1702 15.1007 13.0202 15.1907C12.6102 15.4607 12.2002 15.4707 11.9602 15.4807C11.7602 15.4807 11.1802 15.5007 10.5902 15.1407C10.0402 14.8107 9.7902 14.3407 9.7002 14.1407" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M20.4004 7.15129V2.32129" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 9.35098C3.17 5.11098 7.05 2.00098 11.66 2.00098C15.43 2.00098 18.71 4.08098 20.42 7.15098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3.04004 21.7111V16.8711" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.59 13.9307C20.69 18.5307 16.64 22.0007 11.78 22.0007C8.02004 22.0007 4.75004 19.9307 3.04004 16.8707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tối đa hóa ROI từ nhân viên bán hàng mới",
        description:
          "Giúp nhân viên kinh doanh mới đạt năng suất trong vài tuần, thay vì vài tháng. Structured và accessible training fast-tracks them to quota so your hiring investment pays off faster.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M2 17.512L8.44 11.072L12.68 15.322L22 6.00196" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M16.4502 6.0022H22.0002V12.2522" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tăng tỷ lệ chốt đơn và quy mô giao dịch",
        description:
          "Cung cấp cho đội ngũ của bạn những kỹ năng thực sự giúp chốt giao dịch. Khả năng khám phá, xử lý từ chối và đàm phán tốt hơn sẽ biến nhiều khách hàng tiềm năng thành khách hàng lớn hơn.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M8 16.001C8 16.001 9 16.001 10 18.001C10 18.001 13.18 13.001 16 12.001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.98 21.501C3.33 21.501 2 20.171 2 18.521V6.98098C2 5.33098 3.33 4.00098 4.98 4.00098H19.02C20.67 4.00098 22 5.33098 22 6.98098V18.501C22 20.161 20.66 21.501 19 21.501H4.98Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 8.75098H22" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M8.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.5 3.00098V5.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Thích ứng với lịch trình bận rộn",
        description:
          "Cung cấp chương trình đào tạo mà các thành viên trong đội ngũ bán hàng của bạn có thể truy cập ở bất cứ đâu. Giúp việc học tập phù hợp với ngày làm việc của họ thay vì làm gián đoạn bằng các buổi học cố định.",
      },
    ],
    content_blocks: [
      {
        title: "Tạo khóa học bằng AI để đào tạo luôn cập nhật",
        description:
          "Tiết kiệm thời gian bằng cách nhanh chóng tạo các khóa học và bài kiểm tra bằng AI để đội ngũ bán hàng của bạn luôn có kiến thức sản phẩm mới nhất. Trang bị cho họ khả năng tư vấn khách hàng một cách tự tin và chốt giao dịch nhanh hơn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
      },
      {
        title: "Theo dõi tiến độ để thúc đẩy hiệu suất",
        description:
          "Sử dụng các báo cáo chi tiết để đảm bảo rằng đội ngũ bán hàng của bạn theo dõi các nhiệm vụ được giao, hiểu thông tin chính và sẵn sàng đạt được mục tiêu của họ.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small.webp",
      },
      {
        title: "Thúc đẩy họ hơn nữa bằng trò chơi hóa",
        description:
          "Khai thác tinh thần cạnh tranh tự nhiên của đội ngũ bán hàng của bạn. Bảng xếp hạng, điểm số và huy hiệu thúc đẩy đội ngũ của bạn hoàn thành khóa đào tạo và liên tục cải thiện.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Test-01-Small.webp",
      },
      {
        title: "Huấn luyện bán hàng tại chỗ với AI Coach",
        description:
          "Mỗi nhân viên bán hàng đều có người hướng dẫn cá nhân để đơn giản hóa các chủ đề phức tạp, đưa ra các câu hỏi thực hành và giúp họ chuẩn bị cho các buổi thuyết trình. Một huấn luyện viên luôn sẵn sàng hỗ trợ (ngay cả khi bạn không có mặt).",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
      },
    ],
    tabs: [
      {
        title: "Tin tưởng vào các kế hoạch giá cả rõ ràng, được công bố",
        description:
          "Bạn không thể định giá cho các đội bán hàng đã được đào tạo. Bạn có thể định giá cho phần mềm đào tạo bán hàng tốt nhất. Dựa vào giá cả minh bạch và tài khoản miễn phí vĩnh viễn để đưa ra lựa chọn không vội vã về sự phù hợp.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-pricing-02.webp",
      },
      {
        title: "Đào tạo mọi lúc, mọi nơi",
        description:
          "Trên đường, trên đường đi làm, trong giờ ăn trưa. Ứng dụng TalentLMS vừa vặn trong lòng bàn tay của người học và lịch trình bận rộn của họ. Cân bằng giữa việc đào tạo và thời gian làm việc? Bỏ qua điều đó đi.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-mobile.webp",
      },
      {
        title: "Tích hợp đào tạo và bán hàng",
        description:
          "Các đội bán hàng sống trong Salesforce. TalentLMS cũng vậy. Tự động chuyển dữ liệu người dùng, giới thiệu các khóa học và đào tạo nhân viên, tất cả mà không cần đăng xuất khỏi CRM yêu thích của bạn. Giờ đây, đào tạo thực sự mang lại lợi nhuận.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-integration-03.webp",
      },
    ],
    transform: {
      title: "Đội ngũ bán hàng mạnh hơn. Doanh thu cao hơn. Kết quả thực tế.",
      features: [
        {
          title: "Phân phối nội dung theo quy định",
          description: "Tự động triển khai các chương trình đào tạo bắt buộc theo chính sách và quy định.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
        },
        {
          title: "Kiểm soát hoàn thành bắt buộc",
          description: "Theo dõi chính xác ai đã hoàn thành, ai chưa để đảm bảo tuân thủ đầy đủ.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small.webp",
        },
        {
          title: "Tự động nhắc nhở và gia hạn",
          description: "Gửi thông báo định kỳ cho các khóa cần hoàn thành hoặc tái đào tạo.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Test-01-Small.webp",
        },
        {
          title: "Lưu trữ hồ sơ đào tạo",
          description: "Ghi nhận và lưu trữ lịch sử đào tạo phục vụ kiểm tra và audit.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
        },
      ],
    },
  },
  4: {
    banner: {
      note: "TalentLMS cho Đào tạo Dịch vụ Khách hàng:",
      title: "Nâng cao danh tiếng của tổ chức bạn với những nhân viên được đào tạo tốt hơn",
      description: "Giành được khách hàng trọn đời với một đội ngũ hỗ trợ tập trung vào giải pháp.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/08/Customer-support-training-mobile.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 16.501C16.0041 16.501 19.25 13.255 19.25 9.25098C19.25 5.24691 16.0041 2.00098 12 2.00098C7.99594 2.00098 4.75 5.24691 4.75 9.25098C4.75 13.255 7.99594 16.501 12 16.501Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 6.41113V9.35113C12 9.35113 12.02 9.41113 12.05 9.42113L14.6 10.1911" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M10.75 20.751H6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M22 20.751H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M17.5 20.751H13.25" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4 20.751H2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M5.25 22.001C5.94036 22.001 6.5 21.4413 6.5 20.751C6.5 20.0606 5.94036 19.501 5.25 19.501C4.55964 19.501 4 20.0606 4 20.751C4 21.4413 4.55964 22.001 5.25 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 22.001C12.6904 22.001 13.25 21.4413 13.25 20.751C13.25 20.0606 12.6904 19.501 12 19.501C11.3096 19.501 10.75 20.0606 10.75 20.751C10.75 21.4413 11.3096 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M18.75 22.001C19.4404 22.001 20 21.4413 20 20.751C20 20.0606 19.4404 19.501 18.75 19.501C18.0596 19.501 17.5 20.0606 17.5 20.751C17.5 21.4413 18.0596 22.001 18.75 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tăng tốc thời gian giải quyết",
        description: "Luôn cập nhật cho nhân viên của bạn về mọi thông tin mới để họ có thể xử lý các câu hỏi của khách hàng một cách nhanh chóng và chính xác.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M6.21265 14.3112C6.23271 14.9735 9.17255 18.2143 10.4468 18.5855C11.1291 18.7762 12.6843 18.3247 13.4769 18.0237C13.7479 17.9233 14.8716 17.4718 16.2061 16.5588C16.8884 16.0972 18.0121 15.2343 19.1359 13.8898C20.6309 12.1039 21.3332 10.4182 21.5439 9.88644C22.5774 7.25765 22.5674 4.8797 22.4369 3.48503C22.4369 3.37466 22.4168 3.17399 22.2964 2.98335C22.0055 2.53184 21.4235 2.52181 21.3834 2.52181C20.5807 2.48168 19.4469 2.49171 18.1024 2.71245C17.0088 2.88302 15.2228 3.19406 13.2662 4.32785C12.002 5.0603 11.1893 5.84292 10.5271 6.48507C9.15248 7.8095 8.27956 9.08376 7.78792 9.89648C7.78792 9.89648 7.17587 10.9099 6.52369 12.6055C6.41332 12.8865 6.27285 13.2878 6.23271 13.8296C6.23271 13.8296 6.21265 14.0805 6.22268 14.3213L6.21265 14.3112Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M8.92131 8.24146C7.82766 8.26152 7.01494 8.29162 6.01158 8.31169C5.60021 8.31169 5.21893 8.53243 4.99819 8.87357C4.58682 9.50568 4.18547 10.1278 3.7741 10.7599C3.29249 11.5024 3.7139 12.4957 4.58682 12.6663C5.15873 12.7766 5.73064 12.877 6.39286 12.9873" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M16.8581 16.1775C16.838 17.2711 16.8079 18.0839 16.7878 19.0872C16.7878 19.4986 16.5671 19.8799 16.2259 20.1006C15.5938 20.512 14.9717 20.9133 14.3396 21.3247C13.5971 21.8063 12.6038 21.3849 12.4333 20.512C12.3229 19.9401 12.2226 19.3682 12.1122 18.7059" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M7.16602 11.0806C9.39347 13.3582 11.5306 15.6258 13.7581 17.9034" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M18.343 2.68262C18.343 2.68262 20.139 4.42846 22.3665 6.70608" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M16.5364 10.3785C17.6281 10.3785 18.513 9.49356 18.513 8.4019C18.513 7.31025 17.6281 6.42529 16.5364 6.42529C15.4448 6.42529 14.5598 7.31025 14.5598 8.4019C14.5598 9.49356 15.4448 10.3785 16.5364 10.3785Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M6.83492 20.9037C7.6075 20.1311 7.6075 18.8769 6.83492 18.1043C6.06233 17.3318 4.80814 17.3318 4.03555 18.1043C3.26297 18.8769 2.05894 21.6763 2.66095 22.2783C3.3031 22.9204 6.06233 21.6763 6.83492 20.9037Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n</svg>',
        title: "Tăng sự hài lòng của khách hàng",
        description:
          "Vượt qua sự mong đợi của khách hàng với những nhân viên hỗ trợ cung cấp các giải pháp chính xác, được cá nhân hóa. Giúp nhân viên của bạn luôn tự tin và chuyên nghiệp trong mọi cuộc trò chuyện.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M2 6.00098L8.44 12.441L12.68 8.19098L22 17.511" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M16.4502 17.5107H22.0002V11.2607" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giảm chi phí và gánh nặng hỗ trợ",
        description:
          "Các nhân viên được đào tạo tốt sẽ xử lý nhiều vấn đề hơn một cách độc lập, giảm nhu cầu về nhân viên hỗ trợ bổ sung. Ít yêu cầu leo thang và giải quyết nhanh hơn có nghĩa là chi phí hoạt động thấp hơn và ít kiệt sức hơn cho đội ngũ của bạn.",
      },
    ],
    content_blocks: [
      {
        title: "Cập nhật khóa học tức thì dễ dàng với AI",
        description: "Nhanh chóng xây dựng nội dung đào tạo có mục tiêu giúp nhân viên hỗ trợ của bạn luôn nhạy bén và xử lý các câu hỏi về sản phẩm một cách rõ ràng và tự tin.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
      },
      {
        title: "Kỹ năng giúp nhân viên của bạn luôn sẵn sàng",
        description:
          "Phát triển các kỹ năng mềm cần thiết (như giải quyết vấn đề) với các lộ trình học tập dựa trên kỹ năng. Giúp đội ngũ của bạn xử lý mọi cuộc trò chuyện với sự đồng cảm và chuyên nghiệp.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Learning-path-and-Skills-02-Small.webp",
      },
      {
        title: "Dịch thuật AI phù hợp với các đội đa ngôn ngữ",
        description: "Cung cấp đào tạo hấp dẫn, nhất quán bằng 15 ngôn ngữ. Bất kể đội ngũ của bạn làm việc ở đâu, họ sẽ cảm thấy được chuẩn bị và đồng bộ với các đồng đội khác.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-translation-01-Small.webp",
      },
      {
        title: "AI Coach theo yêu cầu cho nhân viên hỗ trợ",
        description:
          "Cung cấp cho nhân viên câu trả lời tức thì cho các câu hỏi về sản phẩm và các tình huống khách hàng. Huấn luyện bằng AI giúp họ luôn tự tin trong các cuộc gọi và học hỏi trong khi làm việc.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
      },
    ],
    tabs: [
      {
        title: "Tích hợp CRM của bạn",
        description:
          "Bạn không thể định giá cho các đội bán hàng đã được đào tạo. Bạn có thể định giá cho phần mềm đào tạo bán hàng tốt nhất. Dựa vào giá cả minh bạch và tài khoản miễn phí vĩnh viễn để đưa ra lựa chọn không vội vã về sự phù hợp.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-integration-02.webp",
      },
      {
        title: "Bản địa hóa cổng thông tin của bạn",
        description:
          "Bất kể múi giờ nào mà nhân viên của bạn hoạt động, ngôn ngữ sẽ không phải là rào cản. Chia các đội thành các cổng phụ riêng biệt và đặt ngôn ngữ phần mềm đào tạo hỗ trợ khách hàng của bạn thành ngôn ngữ mà họ cảm thấy thoải mái nhất.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-multilingual.webp",
      },
      {
        title: "Đặt kiến thức trong tầm tay",
        description:
          "Đội ngũ của bạn sẽ không có tất cả câu trả lời mọi lúc. Nhưng, ngay cả khi họ đang trong một cuộc trò chuyện, kiến thức chỉ cách vài cú chạm với ứng dụng TalentLMS.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/08/tabs-platform.webp",
      },
    ],
    transform: {
      title: "Dịch vụ xuất sắc hơn. Khách hàng hài lòng hơn.",
      features: [
        {
          title: "Cập nhật kiến thức sản phẩm liên tục",
          description: "Triển khai nhanh nội dung về sản phẩm, thị trường và chiến lược bán hàng.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
        },
        {
          title: "Đào tạo theo tình huống thực tế",
          description: "Xây dựng nội dung gắn với các kịch bản bán hàng cụ thể.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Learning-path-and-Skills-02-Small.webp",
        },
        {
          title: "Theo dõi năng lực đội ngũ sales",
          description: "Đánh giá mức độ hiểu sản phẩm và kỹ năng bán hàng của từng cá nhân.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-translation-01-Small.webp",
        },
        {
          title: "Tối ưu hiệu quả bán hàng",
          description: "Liên kết dữ liệu đào tạo với kết quả kinh doanh để cải thiện hiệu suất.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
        },
      ],
    },
  },
  5: {
    banner: {
      note: "TalentLMS cho Đào tạo Khách hàng:",
      title: "Đào tạo khách hàng của bạn để họ tin tưởng vào doanh nghiệp của bạn",
      description: "Tăng cường sự hài lòng, giữ chân khách hàng và tỷ suất lợi nhuận với một LMS đào tạo khách hàng.",
      banner_image: userDashboardImage,
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 22.001C17.5228 22.001 22 17.5238 22 12.001C22 6.47813 17.5228 2.00098 12 2.00098C6.47715 2.00098 2 6.47813 2 12.001C2 17.5238 6.47715 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 8.08398V12.1392C12 12.1392 12.0276 12.2219 12.069 12.2357L15.5862 13.2978" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Ngăn chặn việc khách hàng rời bỏ sớm",
        description:
          "Nắm bắt những khách hàng đang gặp khó khăn trước khi họ từ bỏ và hủy dịch vụ. Đào tạo chủ động sẽ phát hiện sự nhầm lẫn và giúp hướng dẫn người dùng trước khi sự thất vọng biến thành việc hủy bỏ.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.835 18.7534V17.6934" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.835 12.8337V11.8438" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.1746 13.4634C13.0746 13.3634 12.9146 13.2234 12.6946 13.1034C12.5046 12.9934 12.2546 12.8534 11.9046 12.8334C11.7746 12.8334 11.4246 12.8134 11.0846 13.0434C10.9846 13.1134 10.7446 13.2734 10.6446 13.5734C10.5146 13.9834 10.7346 14.3534 10.8046 14.4534C11.0146 14.7534 11.2846 14.9534 11.7546 15.1734C12.2846 15.4334 12.4246 15.4734 12.7546 15.7634C12.8846 15.8734 13.1446 16.1934 13.1246 16.6134C13.0946 17.1134 12.6646 17.4234 12.5646 17.4834C12.2746 17.6634 11.9946 17.6834 11.8346 17.6834C11.6946 17.6834 11.2946 17.7034 10.8846 17.4534C10.5046 17.2234 10.3346 16.8934 10.2646 16.7634" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12.3946 6.3435C10.4646 6.2935 9.08465 7.3735 7.69465 8.4635C6.57465 9.3335 4.19465 11.4535 3.37465 14.7235C3.06465 15.9435 2.59465 17.8235 3.66465 19.5235C4.13465 20.5235 5.44465 21.4635 6.48465 21.6135C9.72465 22.0535 12.9946 22.0235 16.2646 21.9635C17.4246 21.9935 18.4046 21.5735 19.1246 20.7635C20.8946 19.1335 20.6346 16.5335 20.5046 15.2335C20.0546 10.7735 16.6346 8.2435 16.0846 7.8535C15.1746 7.2035 14.0246 6.3835 12.3946 6.3335V6.3435Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M10.3647 2.01348L15.1747 2.30348C15.3247 2.34348 15.7647 2.47348 15.9347 2.85348C16.0447 3.09348 16.0347 3.40348 15.7447 3.96348C15.4047 4.61348 14.5047 6.34348 12.8947 6.36348C11.9247 6.37348 11.2247 5.76348 10.7147 5.31348C9.70471 4.43348 9.42471 3.64348 9.25471 3.13348C9.15471 2.84348 9.20471 2.37348 9.41471 2.20348C9.68471 1.99348 10.0247 1.98348 10.3747 2.01348H10.3647Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12.1955 6.34375H12.1855" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.985 6.65332C13.995 6.71332 13.995 6.78332 13.995 6.87332C13.965 7.25332 13.715 7.45332 13.555 7.72332C13.405 8.00332 13.325 8.46332 13.615 9.25332" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.1848 6.43359H13.1748" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.5649 6.39355C11.5749 6.61355 11.6949 6.89355 11.7349 7.25355C11.7649 7.59355 11.7049 7.98355 11.2949 8.45355" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Biến người dùng thử thành khách hàng trả phí",
        description:
          "Ngừng việc mất khách hàng tiềm năng không thể tìm hiểu sản phẩm của bạn trong thời gian dùng thử. Hướng dẫn họ đến chiến thắng đầu tiên (và của bạn) bằng chương trình đào tạo cho thấy giá trị thực sự, không chỉ là các tính năng.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M3 22.0018V17.0718" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.5098 21.7319V14.9619" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M20.0195 22.0021V12.8521" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M16.1904 2.00195H20.6004V6.68195" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3 10.9421C5.03 10.8121 8.11 10.3521 11.51 8.81213C15.82 6.86213 18.58 4.10213 20.02 2.43213" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Kết nối đào tạo với kết quả kinh doanh",
        description:
          "Chứng minh ROI của đào tạo bằng các báo cáo kết nối sự thành công của khách hàng với việc hoàn thành đào tạo. Xem cách đào tạo của bạn giúp giảm tỷ lệ khách hàng rời bỏ, thúc đẩy mở rộng và chứng minh kết quả thực tế.",
      },
    ],
    content_blocks: [
      {
        title: "Tách biệt khách hàng với các chi nhánh",
        description:
          "Tách khách hàng vào các môi trường đào tạo riêng biệt. Mỗi chi nhánh sẽ nhận được nội dung được tùy chỉnh phù hợp với quyền truy cập sản phẩm và nhu cầu kinh doanh của họ.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
      },
      {
        title: "Câu hỏi của khách hàng được biến thành khóa học bằng AI",
        description:
          "Biến các phiếu hỗ trợ khách hàng, phản hồi về sản phẩm và các câu hỏi thường gặp thành các khóa học hoàn chỉnh với trình tạo khóa học AI mạnh mẽ của chúng tôi.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-03-Small.webp",
      },
      {
        title: "Một môi trường hỗ trợ thương hiệu của bạn",
        description:
          "Làm cho việc đào tạo giống như một phần của sản phẩm của bạn, chứ không phải là một nền tảng riêng biệt. Đồng bộ màu sắc, logo và chứng chỉ của bạn để tạo ra một tương tác khách hàng liền mạch.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Small.webp",
      },
      {
        title: "Quyền hạn giúp bạn luôn kiểm soát",
        description:
          "Tùy chỉnh vai trò và quyền hạn đến từng chi tiết nhỏ nhất. Quản trị viên, người hướng dẫn hay người học? Xác định những gì mỗi người dùng có thể xem và làm, và giữ cho việc đào tạo được tổ chức và bảo mật.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Permission-01-Large.webp",
      },
    ],
    transform: {
      title: "Khách hàng thành công hơn. Doanh nghiệp phát triển hơn.",
      features: [
        {
          title: "Xây dựng thư viện học tập cho khách hàng",
          description: "Cung cấp nội dung hướng dẫn sử dụng sản phẩm một cách hệ thống.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
        },
        {
          title: "Hỗ trợ tự học và tự phục vụ",
          description: "Cho phép khách hàng chủ động tìm hiểu và giải quyết vấn đề mà không cần hỗ trợ trực tiếp.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-03-Small.webp",
        },
        {
          title: "Theo dõi mức độ sử dụng",
          description: "Ghi nhận cách khách hàng tiếp cận và sử dụng nội dung đào tạo.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Small.webp",
        },
        {
          title: "Tối ưu trải nghiệm sản phẩm",
          description: "Dựa trên dữ liệu học tập để cải thiện trải nghiệm và tăng mức độ hài lòng.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Permission-01-Large.webp",
        },
      ],
    },
  },

  6: {
    banner: {
      note: "TalentLMS cho Đào tạo Đối tác Kênh:",
      title: "Phát triển đối tác, mở rộng mạng lưới, tăng doanh thu",
      description: "Giành lợi thế cạnh tranh với chương trình đào tạo nhất quán do bạn kiểm soát.",
      banner_image: dashboardImage,
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.96 17.0007V15.4707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.96 8.43098V7.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.9002 9.34066C13.7502 9.19066 13.5202 8.99066 13.2102 8.82066C12.9302 8.66066 12.5702 8.46066 12.0702 8.44066C11.8902 8.44066 11.3802 8.42066 10.8802 8.75066C10.7302 8.85066 10.3902 9.08066 10.2502 9.52066C10.0602 10.1107 10.3802 10.6507 10.4802 10.8007C10.7802 11.2407 11.1802 11.5207 11.8502 11.8507C12.6102 12.2207 12.8202 12.2807 13.3002 12.7007C13.4902 12.8607 13.8702 13.3207 13.8402 13.9307C13.8002 14.6607 13.1702 15.1007 13.0202 15.1907C12.6102 15.4607 12.2002 15.4707 11.9602 15.4807C11.7602 15.4807 11.1802 15.5007 10.5902 15.1407C10.0402 14.8107 9.7902 14.3407 9.7002 14.1407" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M20.4004 7.15129V2.32129" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 9.35098C3.17 5.11098 7.05 2.00098 11.66 2.00098C15.43 2.00098 18.71 4.08098 20.42 7.15098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3.04004 21.7111V16.8711" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.59 13.9307C20.69 18.5307 16.64 22.0007 11.78 22.0007C8.02004 22.0007 4.75004 19.9307 3.04004 16.8707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giúp đối tác bán hàng ngay lập tức",
        description:
          "Chuyển đổi kiến thức sản phẩm thành các cuộc trò chuyện bán hàng tích cực nhanh hơn đối thủ cạnh tranh. Bỏ qua hàng tháng trời thời gian chuẩn bị và bắt đầu tạo doanh thu từ các mối quan hệ đối tác mới một cách nhanh chóng.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M7.5 10.001V2.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3.5 6.00098H11.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12 21.751C12.76 20.131 12.74 17.671 12.66 16.291C12.63 15.741 12.83 15.201 13.23 14.821C13.6 14.461 14.1 14.291 14.6 14.331C15.88 14.441 18.49 14.491 20.25 13.491" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.5 12.501V20.001C4.5 21.101 5.4 22.001 6.5 22.001H11.26C12.06 22.001 12.82 21.681 13.38 21.121L19.62 14.881C20.18 14.321 20.5 13.551 20.5 12.761V4.00098C20.5 2.90098 19.6 2.00098 18.5 2.00098H14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giảm thiểu phiếu hỗ trợ từ đối tác",
        description:
          "Các đối tác được đào tạo bài bản sẽ tự xử lý các câu hỏi và thắc mắc của khách hàng, giải phóng đội ngũ hỗ trợ của bạn khỏi các cuộc gọi và yêu cầu hỗ trợ liên tục từ đối tác.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12 18.501C13.1046 18.501 14 17.6055 14 16.501C14 15.3964 13.1046 14.501 12 14.501C10.8954 14.501 10 15.3964 10 16.501C10 17.6055 10.8954 18.501 12 18.501Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10"></path>\n<path d="M7.44043 11.001V6.53098C7.44043 4.03098 9.48043 2.00098 12.0004 2.00098C14.5204 2.00098 16.5604 4.03098 16.5604 6.53098V11.001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M18.03 11.001H5.97C4.882 11.001 4 11.883 4 12.971V20.031C4 21.119 4.882 22.001 5.97 22.001H18.03C19.118 22.001 20 21.119 20 20.031V12.971C20 11.883 19.118 11.001 18.03 11.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Bảo vệ thương hiệu của bạn",
        description:
          "Mỗi đối tác đều truyền đạt chính xác giá trị cốt lõi của bạn trên tất cả các thị trường. Bảo vệ thông điệp thương hiệu của bạn khỏi bị pha loãng hoặc xuyên tạc trong các cuộc trò chuyện bán hàng của đối tác.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M5.33984 15.6045H9.77984V22.0045H4.33984V16.6045C4.33984 16.0545 4.78984 15.6045 5.33984 15.6045Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.2202 16.9644H19.6602C20.2102 16.9644 20.6602 17.4144 20.6602 17.9644V22.0044H15.2202V16.9644Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M10.7798 12.8843H14.2198C14.7698 12.8843 15.2198 13.3343 15.2198 13.8843V22.0043H9.77979V13.8843C9.77979 13.3343 10.2298 12.8843 10.7798 12.8843Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.2099 2.59445L13.9299 4.04445C14.0299 4.24445 14.2899 4.43445 14.5099 4.47445L15.8099 4.69445C16.6399 4.83445 16.8399 5.44445 16.2399 6.04445L15.2299 7.06445C15.0599 7.23445 14.9599 7.57445 15.0199 7.80445L15.3099 9.06445C15.5399 10.0645 15.0099 10.4545 14.1299 9.92445L12.9099 9.19445C12.6899 9.06445 12.3299 9.06445 12.0999 9.19445L10.8799 9.92445C10.0099 10.4445 9.4799 10.0545 9.6999 9.06445L9.9899 7.80445C10.0399 7.56445 9.9499 7.23445 9.7799 7.06445L8.7699 6.04445C8.1699 5.44445 8.3699 4.83445 9.1999 4.69445L10.4999 4.47445C10.7199 4.43445 10.9799 4.24445 11.0799 4.04445L11.7999 2.59445C12.1899 1.80445 12.8299 1.80445 13.2199 2.59445H13.2099Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2.5 22.0044H22.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Trở thành ưu tiên hàng đầu của đối tác",
        description:
          "Được lựa chọn khi các đối tác phải cân nhắc giữa nhiều mối quan hệ với nhà cung cấp. Đào tạo và hỗ trợ tốt hơn sẽ giúp bạn nhận được thời gian và sự chú ý, từ đó thúc đẩy doanh thu.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.96 17.0007V15.4707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.96 8.43098V7.00098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.9002 9.34066C13.7502 9.19066 13.5202 8.99066 13.2102 8.82066C12.9302 8.66066 12.5702 8.46066 12.0702 8.44066C11.8902 8.44066 11.3802 8.42066 10.8802 8.75066C10.7302 8.85066 10.3902 9.08066 10.2502 9.52066C10.0602 10.1107 10.3802 10.6507 10.4802 10.8007C10.7802 11.2407 11.1802 11.5207 11.8502 11.8507C12.6102 12.2207 12.8202 12.2807 13.3002 12.7007C13.4902 12.8607 13.8702 13.3207 13.8402 13.9307C13.8002 14.6607 13.1702 15.1007 13.0202 15.1907C12.6102 15.4607 12.2002 15.4707 11.9602 15.4807C11.7602 15.4807 11.1802 15.5007 10.5902 15.1407C10.0402 14.8107 9.7902 14.3407 9.7002 14.1407" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M20.4004 7.15129V2.32129" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2 9.35098C3.17 5.11098 7.05 2.00098 11.66 2.00098C15.43 2.00098 18.71 4.08098 20.42 7.15098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M3.04004 21.7111V16.8711" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.59 13.9307C20.69 18.5307 16.64 22.0007 11.78 22.0007C8.02004 22.0007 4.75004 19.9307 3.04004 16.8707" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Thúc đẩy mở rộng thị trường",
        description:
          "Tận dụng chuyên môn và mối quan hệ tại địa phương của đối tác để phát triển địa lý. Biến đối tác thành chiến lược thâm nhập thị trường của bạn mà không cần xây dựng đội ngũ địa phương tốn kém.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M15.0172 14.8407C16.0872 14.1907 17.0272 14.4507 17.5872 14.8707C17.8172 15.0407 17.9372 15.1307 17.9972 15.1307C18.0572 15.1307 18.1772 15.0407 18.4072 14.8707C18.9672 14.4507 19.9072 14.1907 20.9772 14.8407C22.3872 15.6907 22.7072 18.5107 19.4572 20.8807C18.8372 21.3307 18.5272 21.5607 17.9972 21.5607C17.4672 21.5607 17.1472 21.3307 16.5372 20.8807C13.2872 18.5107 13.6072 15.6907 15.0172 14.8407Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.597 6.16098C15.597 8.46098 13.757 10.221 11.487 10.221C9.21695 10.221 7.37695 8.45098 7.37695 6.16098C7.37695 3.87098 9.21695 2.00098 11.487 2.00098C13.757 2.00098 15.597 3.86098 15.597 6.16098Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12.0066 13.521H8.08657C6.44657 13.521 4.87657 14.171 3.71657 15.331L2.87657 16.171C1.89657 17.151 1.71657 18.691 2.44657 19.871L2.88657 20.581C3.43657 21.461 4.39657 22.001 5.43657 22.001H10.9966" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Tạo ra những người ủng hộ thương hiệu",
        description:
          "Nuôi dưỡng những người ủng hộ sản phẩm, những người tích cực giới thiệu và bảo vệ giải pháp của bạn. Các đối tác trở thành những người tin tưởng thực sự, bán hàng với niềm tin, không chỉ vì động lực hoa hồng.",
      },
    ],
    content_blocks: [
      {
        title: "Các chi nhánh cho việc đào tạo toàn cầu có thể mở rộng",
        description:
          "Dễ dàng tổ chức các đối tác của bạn thành các chi nhánh phản ánh sản phẩm họ bán và tránh quá tải thông tin. Cung cấp chương trình đào tạo phù hợp với nhu cầu riêng của từng nhóm.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
      },
      {
        title: "Một nền tảng phản ánh thương hiệu của bạn",
        description:
          "Tùy chỉnh các cổng thông tin với logo, màu sắc và thông điệp của bạn, để các đối tác luôn nhận ra họ đang ở trong môi trường đào tạo của bạn. Một trải nghiệm chuyên nghiệp, mang thương hiệu củng cố sự đầu tư của bạn vào thành công của họ.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Small.webp",
      },
      {
        title: "Nội dung luôn phù hợp (mà không tốn công sức)",
        description:
          "Tạo các khóa học nhanh chóng và giữ cho nội dung luôn cập nhật mà không cần cập nhật thủ công liên tục. Không còn tài liệu đào tạo lỗi thời hoặc đối tác bán hàng với thông tin cũ.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Courses-04-Small.webp",
      },
      {
        title: "Đào tạo nói ngôn ngữ của bạn",
        description:
          "Loại bỏ rào cản ngôn ngữ đối với thành công của đối tác. Đào tạo đa ngôn ngữ tạo ra các đối tác tự tin, những người hiểu và liên hệ với sản phẩm của bạn trên mọi thị trường.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Multilingual-01-Large.webp",
      },
    ],
    transform: {
      title: "Đối tác mạnh hơn. Mạng lưới rộng hơn. Doanh thu cao hơn.",
      features: [
        {
          title: "Phân phối nội dung cho hệ sinh thái đối tác",
          description: "Cung cấp chương trình đào tạo thống nhất cho toàn bộ đối tác.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
        },
        {
          title: "Chuẩn hóa năng lực triển khai",
          description: "Đảm bảo đối tác nắm vững quy trình và tiêu chuẩn vận hành.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Small.webp",
        },
        {
          title: "Theo dõi mức độ sẵn sàng",
          description: "Đánh giá khả năng tham gia bán hàng hoặc triển khai của từng đối tác.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Courses-04-Small.webp",
        },
        {
          title: "Cập nhật thông tin nhanh chóng",
          description: "Triển khai kịp thời các thay đổi về sản phẩm và chính sách.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Multilingual-01-Large.webp",
        },
      ],
    },
  },
  7: {
    banner: {
      note: "TalentLMS cho Đội ngũ làm việc từ xa:",
      title: "Thu hẹp khoảng cách giữa người học và việc học",
      description: "Đào tạo nhân viên của bạn ở bất cứ đâu, bất cứ lúc nào–và ngay cả khi ngoại tuyến.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/08/remote-training-header-mobile.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M9.51916 4.33C9.13902 4.12 8.69886 4 8.22869 4C6.73815 4 5.5177 5.23 5.5177 6.74C5.5177 7.61 5.91785 8.36 6.54808 8.85" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2.58655 16.2301L2.29645 15.7601C1.81627 14.9801 1.92631 13.9701 2.57655 13.3201L3.12675 12.7701C3.88703 12.0101 4.92741 11.5801 6.0078 11.5801H7.22825" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M14.4808 4.33C14.861 4.12 15.3011 4 15.7713 4C17.2619 4 18.4823 5.23 18.4823 6.74C18.4823 7.61 18.0822 8.36 17.4519 8.85" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.4134 16.2301L21.7035 15.7601C22.1837 14.9801 22.0737 13.9701 21.4234 13.3201L20.8732 12.7701C20.1129 12.0101 19.0726 11.5801 17.9922 11.5801H16.7717" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M15.0912 9.00988C15.0912 10.7399 13.7107 12.0699 12.0001 12.0699C10.2894 12.0699 8.90894 10.7399 8.90894 9.00988C8.90894 7.27988 10.2894 5.87988 12.0001 5.87988C13.7107 5.87988 15.0912 7.27988 15.0912 9.00988Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M18.4724 16.5398L17.8422 15.9098C16.9719 15.0398 15.7914 14.5498 14.551 14.5498H9.44911C8.21866 14.5498 7.03823 15.0398 6.15791 15.9098L5.52768 16.5398C4.78741 17.2798 4.65736 18.4298 5.20756 19.3198L5.53768 19.8498C5.94783 20.5098 6.6781 20.9198 7.45838 20.9198H16.5417C17.322 20.9198 18.0523 20.5198 18.4624 19.8498L18.7925 19.3198C19.3427 18.4298 19.2127 17.2798 18.4724 16.5398Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Giữ cho các đội làm việc từ xa luôn gắn kết",
        description:
          "Tăng cường mối liên kết giữa các đội ngũ phân tán và xây dựng một văn hóa nơi mọi người cảm thấy được hòa nhập, ngay cả khi làm việc tại nhà. Cho nhân viên làm việc từ xa thấy bạn đầu tư vào sự phát triển của họ để xây dựng lòng trung thành và giảm tỷ lệ nghỉ việc.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M14.9677 11.6678C17.6744 8.96115 18.8017 5.70003 17.4856 4.38393C16.1695 3.06783 12.9084 4.19513 10.2017 6.90183C7.49499 9.60852 6.36769 12.8696 7.68379 14.1857C8.99989 15.5018 12.261 14.3745 14.9677 11.6678Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M17.4856 14.1854C18.8017 12.8693 17.6744 9.60819 14.9677 6.90149C12.261 4.19479 8.99989 3.06749 7.68379 4.38359C6.36769 5.69969 7.49499 8.96081 10.2017 11.6675C12.9084 14.3742 16.1695 15.5015 17.4856 14.1854Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M12.5842 10.1918C13.0858 10.1918 13.4925 9.78506 13.4925 9.28338C13.4925 8.7817 13.0858 8.375 12.5842 8.375C12.0825 8.375 11.6758 8.7817 11.6758 9.28338C11.6758 9.78506 12.0825 10.1918 12.5842 10.1918Z" stroke="currentColor" stroke-width="1.2"></path>\n<path d="M21.5 5.67871C22.11 6.19871 22.5 6.97871 22.5 7.83871V16.6587C22.5 18.2287 21.23 19.4987 19.66 19.4987H5.34C3.77 19.4987 2.5 18.2287 2.5 16.6587V7.83871C2.5 6.96871 2.89 6.19871 3.5 5.67871" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M9.5 21.9985H15.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Cung cấp việc học linh hoạt",
        description:
          "Tạo ra chương trình đào tạo có thể truy cập mọi lúc, mọi nơi, để nhân viên có thể học theo cách phù hợp với lịch trình và địa điểm của họ. Đào tạo tự định hướng giúp loại bỏ rào cản về múi giờ và đảm bảo việc cung cấp kiến thức nhất quán trên quy mô lớn.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M6.21265 14.3112C6.23271 14.9735 9.17255 18.2143 10.4468 18.5855C11.1291 18.7762 12.6843 18.3247 13.4769 18.0237C13.7479 17.9233 14.8716 17.4718 16.2061 16.5588C16.8884 16.0972 18.0121 15.2343 19.1359 13.8898C20.6309 12.1039 21.3332 10.4182 21.5439 9.88644C22.5774 7.25765 22.5674 4.8797 22.4369 3.48503C22.4369 3.37466 22.4168 3.17399 22.2964 2.98335C22.0055 2.53184 21.4235 2.52181 21.3834 2.52181C20.5807 2.48168 19.4469 2.49171 18.1024 2.71245C17.0088 2.88302 15.2228 3.19406 13.2662 4.32785C12.002 5.0603 11.1893 5.84292 10.5271 6.48507C9.15248 7.8095 8.27956 9.08376 7.78792 9.89648C7.78792 9.89648 7.17587 10.9099 6.52369 12.6055C6.41332 12.8865 6.27285 13.2878 6.23271 13.8296C6.23271 13.8296 6.21265 14.0805 6.22268 14.3213L6.21265 14.3112Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M8.92131 8.24146C7.82766 8.26152 7.01494 8.29162 6.01158 8.31169C5.60021 8.31169 5.21893 8.53243 4.99819 8.87357C4.58682 9.50568 4.18547 10.1278 3.7741 10.7599C3.29249 11.5024 3.7139 12.4957 4.58682 12.6663C5.15873 12.7766 5.73064 12.877 6.39286 12.9873" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M16.8581 16.1775C16.838 17.2711 16.8079 18.0839 16.7878 19.0872C16.7878 19.4986 16.5671 19.8799 16.2259 20.1006C15.5938 20.512 14.9717 20.9133 14.3396 21.3247C13.5971 21.8063 12.6038 21.3849 12.4333 20.512C12.3229 19.9401 12.2226 19.3682 12.1122 18.7059" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M16.5364 10.3785C17.6281 10.3785 18.513 9.49356 18.513 8.4019C18.513 7.31025 17.6281 6.42529 16.5364 6.42529C15.4448 6.42529 14.5598 7.31025 14.5598 8.4019C14.5598 9.49356 15.4448 10.3785 16.5364 10.3785Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n<path d="M6.83492 20.9037C7.6075 20.1311 7.6075 18.8769 6.83492 18.1043C6.06233 17.3318 4.80814 17.3318 4.03555 18.1043C3.26297 18.8769 2.05894 21.6763 2.66095 22.2783C3.3031 22.9204 6.06233 21.6763 6.83492 20.9037Z" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>\n</svg>',
        title: "Tăng năng suất, giảm gánh nặng quản trị",
        description:
          "Cung cấp cho nhân viên các kỹ năng để giải quyết vấn đề một cách độc lập và phát triển trong vai trò của họ. Đào tạo tự động giúp các nhà quản lý tiết kiệm thời gian theo dõi trong khi đảm bảo không ai bị tụt lại phía sau.",
      },
    ],
    content_blocks: [
      {
        title: "AI Coach hỗ trợ học tập 24/7",
        description:
          "Cung cấp cho nhân viên làm việc từ xa quyền truy cập câu trả lời ngay lập tức khi người quản lý hoặc đồng nghiệp không có mặt. Giúp họ giải quyết vấn đề và giữ vững sự tự tin mà không cần chờ đến cuộc họp nhóm tiếp theo.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
      },
      {
        title: "Các buổi học trực tiếp (ILT) để kết nối với chuyên gia ở bất cứ đâu",
        description:
          "Cung cấp cho các đội ngũ làm việc từ xa cơ hội tương tác với các chuyên gia trong ngành thông qua các buổi đào tạo trực tuyến, có người hướng dẫn. Xây dựng kỹ năng, đặt câu hỏi trong thời gian thực và tăng cường kết nối đội nhóm.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Videoconferencing-02-Small.webp",
      },
      {
        title: "Báo cáo chi tiết để theo dõi đội ngũ từ xa",
        description:
          "Theo dõi tỷ lệ hoàn thành, mức độ tham gia và sự phát triển kỹ năng trên toàn bộ lực lượng lao động phân tán của bạn. Xác định ai cần hỗ trợ và chứng minh hiệu quả đào tạo cho ban lãnh đạo.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small-1.webp",
      },
      {
        title: "Bảng thảo luận xây dựng cộng đồng học tập",
        description:
          "Biến việc đào tạo thành một trải nghiệm chung. Với các bảng thảo luận, các đội ngũ làm việc từ xa có thể kết nối, học hỏi lẫn nhau và cảm thấy mình là một phần của một hệ sinh thái hỗ trợ.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Discussions-01-Large.webp",
      },
    ],
    transform: {
      title: "Làm việc từ xa hiệu quả hơn. Gắn kết hơn. Không giới hạn.",
      features: [
        {
          title: "Truy cập mọi lúc mọi nơi",
          description: "Cho phép học tập trên nhiều thiết bị mà không phụ thuộc địa điểm.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-coach-01-Large.webp",
        },
        {
          title: "Đồng bộ nội dung đa nền tảng",
          description: "Đảm bảo trải nghiệm học tập nhất quán trên web và mobile.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Videoconferencing-02-Small.webp",
        },
        {
          title: "Theo dõi hoạt động học tập",
          description: "Ghi nhận đầy đủ hành vi và tiến độ học của người dùng.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-03-Small-1.webp",
        },
        {
          title: "Tối ưu trải nghiệm học online",
          description: "Cung cấp giao diện thân thiện, dễ sử dụng để tăng mức độ tham gia.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Discussions-01-Large.webp",
        },
      ],
    },
  },
  8: {
    banner: {
      note: "TalentLMS cho Đào tạo Doanh nghiệp Mở rộng:",
      title: "Thúc đẩy tăng trưởng trên toàn bộ mạng lưới của bạn",
      description: "Đào tạo mọi bên liên quan và nhận lại lợi nhuận không gì sánh bằng.",
      banner_image: "https://www.talentlms.com/wp-content/uploads/2025/08/Extended-enterprise-training-web.webp",
    },
    features: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M8.5 14.0012V12.4312" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M16.5 14.001V10.001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M11.1699 14.0011V10.8711" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M13.8301 14.0011V11.6211" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M8.51953 9.55098L11.2695 6.98098L13.0895 8.68098L16.4795 5.50098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M19.25 18.001V21.001C19.25 21.551 18.8 22.001 18.25 22.001H6.12C4.95 22.001 4 21.051 4 19.881C4 18.711 4.95 17.751 6.12 17.751H20C20.55 17.751 21 17.301 21 16.751V3.00098C21 2.45098 20.55 2.00098 20 2.00098H6.12C4.95 2.00098 4 2.95098 4 4.12098V20.001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Mở rộng quy mô đào tạo mà không cần tăng nguồn lực",
        description:
          "Đào tạo hàng nghìn đối tác bên ngoài, đại lý và bên nhận quyền mà không cần tuyển thêm nhân viên nội bộ. Việc tạo và cung cấp nội dung tự động có nghĩa là mạng lưới của bạn phát triển nhưng khối lượng công việc của bạn thì không.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M11.8802 6.94195C13.2443 6.94195 14.3502 5.8361 14.3502 4.47195C14.3502 3.10781 13.2443 2.00195 11.8802 2.00195C10.516 2.00195 9.41016 3.10781 9.41016 4.47195C9.41016 5.8361 10.516 6.94195 11.8802 6.94195Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M19.2796 21.752C20.6437 21.752 21.7496 20.6462 21.7496 19.282C21.7496 17.9179 20.6437 16.812 19.2796 16.812C17.9154 16.812 16.8096 17.9179 16.8096 19.282C16.8096 20.6462 17.9154 21.752 19.2796 21.752Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M4.47 21.752C5.83414 21.752 6.94 20.6462 6.94 19.282C6.94 17.9179 5.83414 16.812 4.47 16.812C3.10586 16.812 2 17.9179 2 19.282C2 20.6462 3.10586 21.752 4.47 21.752Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M2.58023 14.8918C2.52023 14.4718 2.49023 14.0418 2.49023 13.6118C2.49023 10.2418 4.26023 7.28184 6.93023 5.63184" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.1603 14.9821C21.2303 14.5321 21.2603 14.0721 21.2603 13.6021C21.2603 10.2321 19.4903 7.27207 16.8203 5.62207" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M8.86035 21.6118C9.81035 21.8618 10.8204 22.0018 11.8804 22.0018C12.9404 22.0018 13.9504 21.8618 14.9004 21.6118" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n</svg>',
        title: "Duy trì sự nhất quán của thương hiệu trên toàn mạng lưới của bạn",
        description:
          "Đảm bảo mọi đối tác đều đại diện cho thương hiệu của bạn một cách chính xác với đào tạo và thông điệp được tiêu chuẩn hóa. Kiểm soát những gì đối tượng bên ngoài học được trong khi cho họ sự linh hoạt để truy cập theo cách của họ.",
      },
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">\n<path d="M12.4996 14.001C13.8251 14.001 14.8996 11.3147 14.8996 8.00098C14.8996 4.68727 13.8251 2.00098 12.4996 2.00098C11.1741 2.00098 10.0996 4.68727 10.0996 8.00098C10.0996 11.3147 11.1741 14.001 12.4996 14.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M12.5 14.001C15.8137 14.001 18.5 11.3147 18.5 8.00098C18.5 4.68727 15.8137 2.00098 12.5 2.00098C9.18629 2.00098 6.5 4.68727 6.5 8.00098C6.5 11.3147 9.18629 14.001 12.5 14.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M6.5 8.00098H18.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>\n<path d="M21.5 5.68115C22.11 6.20115 22.5 6.98115 22.5 7.84115V16.6612C22.5 18.2312 21.23 19.5012 19.66 19.5012H5.34C3.77 19.5012 2.5 18.2312 2.5 16.6612V7.84115C2.5 6.97115 2.89 6.20115 3.5 5.68115" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n<path d="M9.5 22.001H15.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>\n</svg>',
        title: "Quản lý tuân thủ và báo cáo toàn cầu",
        description:
          "Theo dõi việc hoàn thành đào tạo và tuân thủ trên toàn bộ mạng lưới mở rộng của bạn từ một bảng điều khiển duy nhất. Đáp ứng các yêu cầu quy định và chứng minh ROI bằng báo cáo tập trung bao quát tất cả các tổ chức bên ngoài.",
      },
    ],
    content_blocks: [
      {
        title: "Tạo và cập nhật nội dung AI chuyên sâu",
        description:
          "Xây dựng các khóa học và bài kiểm tra nhanh chóng với các công cụ hỗ trợ AI, để tất cả các đội ngũ bên ngoài của bạn có thể được thông báo và đồng bộ với thương hiệu của bạn. Không cần phải quá tải nguồn lực nội bộ của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
      },
      {
        title: "Các tùy chọn truy cập an toàn phù hợp với tất cả mọi người",
        description:
          "Dễ dàng giới thiệu người học với các tùy chọn bao gồm tự đăng ký, nhập hàng loạt hoặc SSO. Duy trì toàn quyền kiểm soát trong khi cho phép người dùng bên ngoài tham gia và bắt đầu học.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Interface-01-Small.webp",
      },
      {
        title: "Sự nhất quán thương hiệu lan tỏa khắp mọi nơi",
        description:
          "Thiết kế một cổng đào tạo phản ánh hoàn hảo thương hiệu của bạn. Từ phông chữ đến màu sắc và hơn thế nữa, mọi người dùng bên ngoài giờ đây có thể cảm thấy kết nối hơn với tổ chức của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Large.webp",
      },
      {
        title: "Phân khúc đào tạo thông minh với các chi nhánh",
        description:
          "Tùy chỉnh trải nghiệm học tập tùy thuộc vào người bạn đang đào tạo, địa điểm và hơn thế nữa. Cung cấp chính xác những gì mỗi đối tượng cần mà không có sự lộn xộn hoặc nhầm lẫn không cần thiết.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
      },
      {
        title: "Báo cáo toàn mạng lưới tại một nơi duy nhất",
        description:
          "Theo dõi sự tham gia của người dùng, tỷ lệ hoàn thành và bất kỳ lỗ hổng kiến thức nào bạn có thể xác định. Thu thập thông tin chi tiết quan trọng để cải thiện và củng cố chương trình đào tạo toàn cầu của bạn.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/Report-04-Large.webp",
      },
      {
        title: "Đào tạo nói ngôn ngữ của mọi người",
        description:
          "Cung cấp đào tạo đa ngôn ngữ bằng 15 ngôn ngữ để làm cho việc đào tạo dễ tiếp cận và phù hợp với mọi người. Thay đổi ngôn ngữ cổng thông tin của bạn, thêm dịch khóa học bằng AI và xem tỷ lệ chấp nhận tăng lên.",
        image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-translation-01-Small.webp",
      },
    ],
    transform: {
      title: "Mở rộng quy mô. Đồng bộ thương hiệu. Tăng trưởng toàn cầu.",
      features: [
        {
          title: "Quản lý đào tạo đa tổ chức",
          description: "Hỗ trợ vận hành đào tạo cho nhiều đơn vị, chi nhánh hoặc hệ thống.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/AI-course-creation-01-Large.webp",
        },
        {
          title: "Phân quyền và kiểm soát linh hoạt",
          description: "Thiết lập quyền truy cập và quản lý theo từng cấp độ tổ chức.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Interface-01-Small.webp",
        },
        {
          title: "Chuẩn hóa nhưng vẫn linh hoạt",
          description: "Đảm bảo thống nhất nội dung nhưng cho phép tùy chỉnh theo từng đơn vị.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Customization-02-Large.webp",
        },
        {
          title: "Mở rộng quy mô dễ dàng",
          description: "Hệ thống sẵn sàng đáp ứng khi số lượng người học và chương trình tăng lên.",
          image: "https://www.talentlms.com/wp-content/uploads/2025/07/Branches-01-Large.webp",
        },
      ],
    },
  },
};

const goBack = () => {
  router.push({ name: "solutions" });
};
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
const handleRegister = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
onMounted(() => {
  const id = parseInt(route.params.id);
  solution.value = solutionsData[id];
});
</script>

<style scoped></style>
