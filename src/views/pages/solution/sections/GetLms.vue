<template>
  <section class="py-16 px-5 via-white to-purple-50">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold  mb-4">
          Nhận giải pháp LMS để hỗ trợ mọi loại hình đào tạo
        </h2>
        <p class="text-lg text-gray-600">
          Bắt đầu miễn phí. Không cần thanh toán.
        </p>
      </div>

      <!-- Form Container -->
      <div class="relative">
        <div class="bg-white rounded-3xl shadow-xl border-2 border-blue-500 p-8 md:p-12 relative z-10">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Row 1: Full Name & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div class="relative">
                  <input
                      v-model="formData.fullName"
                      type="text"
                      placeholder="Họ Và Tên"
                      class="w-full px-4 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      :class="{ 'ring-2 ring-red-500': errors.fullName }"
                  />
                </div>
                <span v-if="errors.fullName" class="text-red-500 text-sm mt-1">{{ errors.fullName }}</span>
              </div>

              <div>
                <div class="relative">
                  <input
                      v-model="formData.email"
                      type="email"
                      placeholder="Email"
                      class="w-full px-4 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      :class="{ 'ring-2 ring-red-500': errors.email }"
                  />
                </div>
                <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
              </div>
            </div>

            <!-- Row 2: Username & Password -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div class="relative">
                  <input
                      v-model="formData.username"
                      type="text"
                      placeholder="Tài khoản"
                      class="w-full px-4 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      :class="{ 'ring-2 ring-red-500': errors.username }"
                  />
                </div>
                <span v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</span>
              </div>

              <div>
                <div class="relative">
                  <input
                      v-model="formData.password"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="Mật khẩu"
                      class="w-full px-4 py-4 pr-12 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      :class="{ 'ring-2 ring-red-500': errors.password }"
                  />
                  <button
                      type="button"
                      @click="togglePasswordVisibility"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  </button>
                </div>
                <span v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</span>
              </div>
            </div>

            <!-- Row 3: Domain Name -->
            <!--            <div>-->
            <!--              <div class="relative flex items-center">-->
            <!--                <input-->
            <!--                    v-model="formData.domain"-->
            <!--                    type="text"-->
            <!--                    placeholder="Domain name"-->
            <!--                    class="flex-1 px-4 py-4 bg-gray-50 rounded-l-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"-->
            <!--                    :class="{ 'ring-2 ring-red-500': errors.domain }"-->
            <!--                />-->
            <!--                <button-->
            <!--                    type="button"-->
            <!--                    class="px-3 py-4 bg-gray-50 text-gray-400 hover:text-gray-600 border-l border-gray-200"-->
            <!--                    title="For example, enter your company's name without spaces."-->
            <!--                >-->
            <!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"-->
            <!--                       stroke="currentColor">-->
            <!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
            <!--                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>-->
            <!--                  </svg>-->
            <!--                </button>-->
            <!--                <span class="px-4 py-4 bg-gray-50 rounded-r-xl text-gray-600 border-l border-gray-200">-->
            <!--                  .xbest.io-->
            <!--                </span>-->
            <!--              </div>-->
            <!--              <span v-if="errors.domain" class="text-red-500 text-sm mt-1">{{ errors.domain }}</span>-->
            <!--            </div>-->

            <!-- Terms Checkbox -->
            <div>
              <div class="flex items-start gap-3">
                <input
                    v-model="formData.acceptTerms"
                    type="checkbox"
                    id="accept-terms"
                    class="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    :class="{ 'ring-2 ring-red-500': errors.acceptTerms }"
                />
                <label for="accept-terms" class="text-gray-700">
                  Tôi chấp nhận
                  <a href="#" class="text-blue-600 hover:underline">Điều khoản dịch vụ.</a>
                </label>
              </div>
              <span v-if="errors.acceptTerms" class="text-red-500 text-sm mt-1 block">{{ errors.acceptTerms }}</span>
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-4">
              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-block px-12 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Tạo tài khoản mới</span>
                <span v-else>Đang tạo tài khoản...</span>
              </button>
              <!--              <p class="text-sm text-gray-500 mt-4">-->
              <!--                No credit card required.-->
              <!--              </p>-->
            </div>
          </form>
        </div>

        <!-- Decorative Background Elements -->
        <!--        <div-->
        <!--            class="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"></div>-->
        <!--        <div-->
        <!--            class="absolute -z-10 bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2"></div>-->
      </div>
    </div>
  </section>
</template>
<script setup>
import {ref} from 'vue'

const formData = ref({
  fullName: '',
  email: '',
  username: '',
  password: '',
  domain: '',
  acceptTerms: false
})

const showPassword = ref(false)
const errors = ref({})
const isSubmitting = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const validateForm = () => {
  errors.value = {}

  if (!formData.value.fullName.trim()) {
    errors.value.fullName = 'Full name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }

  if (!formData.value.username.trim()) {
    errors.value.username = 'Username is required'
  }

  if (!formData.value.password.trim()) {
    errors.value.password = 'Password is required'
  } else if (formData.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
  }

  if (!formData.value.domain.trim()) {
    errors.value.domain = 'Domain name is required'
  }

  if (!formData.value.acceptTerms) {
    errors.value.acceptTerms = 'You must accept the Terms of Service'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    isSubmitting.value = true

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData.value)
      isSubmitting.value = false
      // Reset form or redirect
    }, 2000)
  }
}
</script>
<style scoped>
/* Custom focus styles */
input:focus {
  outline: none;
}

/* Smooth transitions */
input,
button {
  transition: all 0.3s ease;
}

/* Checkbox custom styling */
input[type="checkbox"] {
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
</style>

