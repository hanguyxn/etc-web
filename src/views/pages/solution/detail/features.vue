<template>
  <div class="w-full flex justify-center items-center flex-col gap-6 py-10 px-4 text-center max-w-4xl mx-auto">
    <img :src="TechSpeedIcon" alt="" srcset="" height="70" width="70">
    <h1 class="font-bold text-[42px]">Đội ngũ mạnh hơn. Giảm căng thẳng về công nghệ. Kết quả thực tế.</h1>
    <h4 class="text-[21px] opacity-90">Phần mềm đào tạo nhân viên giúp xây dựng kỹ năng, sự tự tin và xây dựng đội ngũ
      làm việc
      hạnh phúc hơn.</h4>
  </div>

  <!-- Pricing Value Proposition Section -->
  <div class="max-w-[1340px] mx-auto px-4 text-center">
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      <div
          v-for="feature in features"
          :key="feature.id"
          class="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div class="mb-4 text-blue-600" v-html="feature.icon"/>
        <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TechSpeedIcon from '@/assets/images/tech-speed.svg'

const features = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M23.0167 15.9106C23.2367 15.8006 23.2067 15.4806 22.9667 15.4206L18.3667 13.9606C17.9767 13.8606 17.6267 14.2106 17.7267 14.6006L19.1867 19.2006C19.2467 19.4406 19.5767 19.4706 19.6767 19.2506L20.4167 17.3906C20.5667 17.0706 20.8267 16.8106 21.1467 16.6606L23.0067 15.9206L23.0167 15.9106Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M20.1968 11.8909C18.9268 11.1009 17.2368 11.2609 16.1368 12.3609C15.0368 13.4609 14.8768 15.1409 15.6568 16.4009" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M12.6665 18.741H6.3265C4.5865 18.741 3.1665 17.331 3.1665 15.581V7.16098C3.1665 5.41098 4.5765 4.00098 6.3265 4.00098H18.9565C20.6965 4.00098 22.1165 5.41098 22.1165 7.16098V8.90098" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`,
    title: "Dễ sử dụng (dù có chuyên môn hay không)",
    description:
        "Đừng loay hoay với những nền tảng đào tạo quá phức tạp mà không mang lại hiệu quả. Hãy sử dụng giao diện trực quan, thân thiện với người dùng, giúp bạn và nhóm của bạn dễ dàng tiếp cận chương trình đào tạo.",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M14.6701 8.95012C14.6701 10.4401 13.4701 11.5901 12.0001 11.5901C10.5301 11.5901 9.33008 10.4401 9.33008 8.95012C9.33008 7.46012 10.5301 6.25012 12.0001 6.25012C13.4701 6.25012 14.6701 7.46012 14.6701 8.95012Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.0404 17.5004C18.3004 16.8004 18.1304 16.0004 17.5904 15.4604L17.0404 14.9104C16.2904 14.1604 15.2704 13.7404 14.2004 13.7404H9.79044C8.73044 13.7404 7.71044 14.1604 6.96044 14.9104L6.41044 15.4604C5.87044 16.0004 5.70044 16.8004 5.96044 17.5004" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M12 17.5001V20.5001" stroke="currentColor" stroke-width="1.2"></path>
<path d="M9 20.5001H15" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
<path d="M19.16 3.00012H4.84C3.27151 3.00012 2 4.27163 2 5.84012V14.6601C2 16.2286 3.27151 17.5001 4.84 17.5001H19.16C20.7285 17.5001 22 16.2286 22 14.6601V5.84012C22 4.27163 20.7285 3.00012 19.16 3.00012Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
</svg>`,
    title: "Xây dựng các kỹ năng cụ thể cho từng vai trò",
    description:
        "Đào tạo nhân viên phải giúp họ phát triển, chứ không chỉ dừng lại ở việc đáp ứng các tiêu chuẩn. Hãy tham gia, nâng cao kỹ năng và tuân thủ các chương trình đào tạo phù hợp với vai trò, lịch trình bận rộn và nhu cầu hiện tại cũng như tương lai của họ.",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M14.5 20.8002L17.07 18.2302L18.77 19.9302L22.5 16.2002" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M20.2798 16.2002H22.4998V18.7002" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M16.0901 6.66C16.0901 8.96 14.2501 10.72 11.9801 10.72C9.71012 10.72 7.87012 8.95 7.87012 6.66C7.87012 4.37 9.71012 2.5 11.9801 2.5C14.2501 2.5 16.0901 4.36 16.0901 6.66Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15.5002 14.02H8.58022C6.94023 14.02 5.37023 14.67 4.21023 15.83L3.37023 16.67C2.39023 17.65 2.21023 19.19 2.94023 20.37L3.38023 21.08C3.93023 21.96 4.89023 22.5 5.93023 22.5H11.4902" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`,
    title: "Phát triển & giữ chân nhân viên",
    description:
        "Từ việc tuyển dụng đến nâng cao kỹ năng, hãy đầu tư vào sự phát triển của đội ngũ. Hãy trao cho họ những công cụ để phát triển, và họ sẽ chọn phát triển cùng bạn.",
  },
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M12 16.501C16.0041 16.501 19.25 13.255 19.25 9.25098C19.25 5.24691 16.0041 2.00098 12 2.00098C7.99594 2.00098 4.75 5.24691 4.75 9.25098C4.75 13.255 7.99594 16.501 12 16.501Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M12 6.41113V9.35113C12 9.35113 12.02 9.41113 12.05 9.42113L14.6 10.1911" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.75 20.751H6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M22 20.751H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M17.5 20.751H13.25" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M4 20.751H2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M5.25 22.001C5.94036 22.001 6.5 21.4413 6.5 20.751C6.5 20.0606 5.94036 19.501 5.25 19.501C4.55964 19.501 4 20.0606 4 20.751C4 21.4413 4.55964 22.001 5.25 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M12 22.001C12.6904 22.001 13.25 21.4413 13.25 20.751C13.25 20.0606 12.6904 19.501 12 19.501C11.3096 19.501 10.75 20.0606 10.75 20.751C10.75 21.4413 11.3096 22.001 12 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.75 22.001C19.4404 22.001 20 21.4413 20 20.751C20 20.0606 19.4404 19.501 18.75 19.501C18.0596 19.501 17.5 20.0606 17.5 20.751C17.5 21.4413 18.0596 22.001 18.75 22.001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`,
    title: "Theo dõi dữ liệu thời gian thực cho mọi học viên",
    description:
        "Đưa ra quyết định kịp thời, tự tin mà không cần bảng tính rườm rà. Sử dụng bảng thông tin để có ảnh chụp nhanh và báo cáo tùy chỉnh để phân tích sâu hơn. Lên lịch để chúng đến đúng lúc bạn cần nhất.",
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M17.1136 9.59641L17.7636 9.96623C18.0736 10.1461 18.1836 10.5459 18.0036 10.8558L17.3536 11.9753C17.1736 12.2851 16.7736 12.395 16.4636 12.2151L15.6036 11.7254C15.3936 11.6054 15.1236 11.6054 14.9236 11.7454C14.6436 11.9453 14.3436 12.1052 14.0136 12.2351C13.7736 12.3351 13.6236 12.575 13.6236 12.8248V13.3646C13.6236 13.7244 13.3336 14.0143 12.9736 14.0143H11.6736C11.3136 14.0143 11.0236 13.7244 11.0236 13.3646V12.8248C11.0236 12.565 10.8736 12.3251 10.6336 12.2351C10.3136 12.1052 10.0036 11.9353 9.72358 11.7454C9.52358 11.6054 9.26358 11.6054 9.04358 11.7254L8.18358 12.2151C7.87358 12.395 7.47358 12.2851 7.29358 11.9753L6.64358 10.8558C6.46358 10.5459 6.57358 10.1461 6.88358 9.96623L7.53358 9.59641C7.77358 9.45648 7.91358 9.18661 7.86358 8.91674C7.80358 8.62689 7.77358 8.32703 7.77358 8.00719C7.77358 7.87725 7.77358 7.74732 7.79358 7.62737C7.81358 7.38749 7.67358 7.1576 7.46358 7.02767L6.89358 6.69783C6.58358 6.51792 6.47358 6.11811 6.65358 5.80826L7.30358 4.68881C7.48358 4.37896 7.88358 4.26901 8.19358 4.44893L8.57358 4.66882C8.81358 4.80875 9.11358 4.78876 9.31358 4.59885C9.70358 4.24902 10.1436 3.97916 10.6336 3.77925C10.8736 3.6793 11.0236 3.43942 11.0236 3.17955V2.6498C11.0236 2.28998 11.3136 2.00012 11.6736 2.00012H12.9736C13.3336 2.00012 13.6236 2.28998 13.6236 2.6498V3.17955C13.6236 3.43942 13.7736 3.6793 14.0136 3.77925C14.5036 3.97916 14.9536 4.24902 15.3336 4.59885C15.5336 4.77877 15.8336 4.79876 16.0736 4.66882L16.4536 4.44893C16.7636 4.26901 17.1636 4.37896 17.3436 4.68881L17.9936 5.80826C18.1736 6.11811 18.0636 6.51792 17.7536 6.69783L17.1836 7.02767C16.9736 7.14761 16.8336 7.3775 16.8536 7.62737C16.8636 7.75731 16.8736 7.87725 16.8736 8.00719C16.8736 8.31704 16.8436 8.61689 16.7836 8.91674C16.7336 9.18661 16.8736 9.45648 17.1136 9.59641Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M12.3333 9.50623C13.1617 9.50623 13.8333 8.83498 13.8333 8.00696C13.8333 7.17894 13.1617 6.50769 12.3333 6.50769C11.5048 6.50769 10.8333 7.17894 10.8333 8.00696C10.8333 8.83498 11.5048 9.50623 12.3333 9.50623Z" stroke="currentColor" stroke-width="1.2"></path>
<path d="M21.3333 5.68774C21.9433 6.20749 22.3333 6.98711 22.3333 7.84669V16.6624C22.3333 18.2316 21.0633 19.501 19.4933 19.501H5.17325C3.60325 19.501 2.33325 18.2316 2.33325 16.6624V7.84669C2.33325 6.97711 2.72325 6.20749 3.33325 5.68774" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
<path d="M9.33325 22.0001H15.3333" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
</svg>`,
    title: "Giải phóng thời gian của bạn",
    description:
        "Tự động hóa sẽ đảm nhiệm công việc quản trị—chẳng hạn như phân công khóa học, gửi lời nhắc và theo dõi tiến độ—để bạn không phải làm những việc này. Bằng cách này, bạn tập trung vào nhân viên của mình. Không tốn thời gian vào các quy trình thủ công.",
  },
  {
    id: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation" style="vertical-align:middle;">
<path d="M14.7999 14.301L14.6699 13.541" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M14.0497 10.031L13.9297 9.31104" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15.0999 10.3109C15.0099 10.2509 14.8799 10.1709 14.7099 10.1109C14.5599 10.0609 14.3599 9.99089 14.1099 10.0209C14.0199 10.0309 13.7599 10.0709 13.5499 10.2809C13.4799 10.3409 13.3299 10.4909 13.2999 10.7209C13.2599 11.0309 13.4699 11.2709 13.5299 11.3409C13.7199 11.5309 13.9399 11.6409 14.3099 11.7409C14.7199 11.8609 14.8299 11.8709 15.1099 12.0409C15.2199 12.1009 15.4499 12.3009 15.4899 12.6109C15.5399 12.9809 15.2599 13.2509 15.1899 13.3109C15.0099 13.4809 14.7999 13.5209 14.6899 13.5509C14.5899 13.5709 14.2999 13.6309 13.9799 13.5009C13.6799 13.3809 13.5099 13.1709 13.4499 13.0809" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15.5403 18.2012H15.5303" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15.9299 18.1807H15.9199" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8.4898 14.9611C8.2298 13.9911 8.1498 12.9911 8.1798 12.4811C8.3498 10.0111 9.8098 8.18106 10.5098 7.41106C11.2398 6.59106 11.9798 5.77106 13.0398 5.42106C13.2298 5.36106 13.4298 5.31106 13.6398 5.28106C13.6398 5.28106 13.6698 5.26106 13.6898 5.26106C13.7598 5.26106 13.8198 5.26106 13.8998 5.24106C14.2298 5.22106 14.5398 5.24106 14.8298 5.29106C15.4698 5.40106 16.0198 5.67106 16.4998 5.90106C16.9398 6.12106 19.7398 7.51106 20.6398 10.6811C20.8998 11.6011 21.3198 14.7711 20.2498 16.1511C20.1498 16.3211 19.9698 16.5311 19.7698 16.7411" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M11.6098 2.40098L15.1198 2.00098C15.2298 2.00098 15.5598 2.05098 15.7398 2.30098C15.8498 2.46098 15.8798 2.68098 15.7398 3.13098C15.5798 3.64098 15.1498 5.01098 13.9898 5.23098C13.2898 5.36098 12.7098 5.01098 12.2798 4.75098C11.4398 4.24098 11.1398 3.71098 10.9398 3.36098C10.8298 3.16098 10.8098 2.82098 10.9398 2.67098C11.0998 2.48098 11.3498 2.44098 11.6098 2.41098V2.40098Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M13.4797 5.30078H13.4697" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M14.8201 5.29102C14.8201 5.29102 14.8501 5.38102 14.8601 5.45102C14.8901 5.73102 14.7301 5.91102 14.6501 6.12102C14.5801 6.34102 14.5801 6.69102 14.8901 7.22102" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M14.2102 5.24121H14.2002" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M13.04 5.41113C13.08 5.57113 13.2 5.75113 13.28 6.01113C13.34 6.25113 13.35 6.54113 13.12 6.93113" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15.3204 18.3812H15.3304C15.4004 18.3312 15.4704 18.2812 15.5404 18.2112C15.5404 18.2112 15.5404 18.2212 15.5504 18.2112C15.8204 17.9412 15.9504 17.5612 15.8804 17.2012C15.8004 16.8112 15.4804 16.4412 15.0504 16.3812C14.6204 16.3212 13.8704 16.3712 13.2804 16.3712C12.7004 16.3612 12.1404 16.2212 11.6404 15.9412C11.3604 15.7912 11.0804 15.6312 10.9104 15.5412C10.2904 15.1812 9.59035 14.9912 8.88035 14.9812C8.77035 14.9812 8.63035 14.9712 8.49035 14.9712C7.83035 14.9612 6.97035 14.9512 6.61035 14.9512" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M7 19.8407C7.1 19.8407 7.27 19.8607 7.48 19.9107C7.79 19.9907 8 20.1207 8.1 20.1807C8.48 20.4107 9.34 20.9007 10.5 21.5807C10.63 21.6607 10.78 21.7407 10.95 21.8107C11.44 22.0007 11.89 22.0207 12.19 22.0007C12.46 21.9807 12.78 21.9507 13.13 21.8607C13.68 21.7207 14.07 21.5207 14.23 21.4407C14.93 21.0907 15.66 20.8307 16.36 20.4907C17.13 20.1107 18.41 19.5207 20.6 18.5707C20.98 18.2707 21.12 17.7607 20.94 17.3407C20.74 16.8707 20.21 16.6107 19.69 16.7507C18.3 17.2707 17.12 17.7407 15.79 18.2407C15.32 18.4207 13.25 19.0507 11.36 18.3907" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M5.57 13.3213H4.03C3.46115 13.3213 3 13.7824 3 14.3513V20.2713C3 20.8401 3.46115 21.3013 4.03 21.3013H5.57C6.13885 21.3013 6.6 20.8401 6.6 20.2713V14.3513C6.6 13.7824 6.13885 13.3213 5.57 13.3213Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`,
    title: "Cắt giảm chi phí, không phải góc cạnh",
    description:
        "Đào tạo không nên tốn kém quá nhiều. Đó là lý do tại sao chúng tôi tạo điều kiện tiếp cận đào tạo dễ dàng bằng mọi cách. Với mức giá hợp lý và các tính năng mạnh mẽ, bạn sẽ nhận được nhiều giá trị hơn với chi phí thấp hơn và đạt được ROI nhanh hơn gấp 2 lần.",
  },
];
</script>

<style scoped>

</style>