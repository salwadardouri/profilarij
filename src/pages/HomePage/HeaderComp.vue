<template>
  <div class="relative">
    <!-- Navbar -->
    <nav
      class="flex items-center justify-between h-12 px-4 bg-opacity-50"
      style="background-color: #bb4b7a"
    >
      <!-- Left: Logo -->
      <div class="flex items-center space-x-5 ml-[250px]">
        <img src="../../assets/logo.png" alt="Logo" class="h-9" />
      </div>

      <!-- Center: Navigation Menu -->
      <ul
        class="flex space-x-8 text-[17px] leading-[20px] font-poppins font-semibold text-white"
      >
        <li>
          <a href="#home" class="hover:underline hover:text-white">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:underline hover:text-white">About</a>
        </li>
        <li>
          <a href="#service" class="hover:underline hover:text-white"
            >Service</a
          >
        </li>
        <li>
          <a href="#contact" class="hover:underline hover:text-white"
            >Contact</a
          >
        </li>
        <li>
          <a href="#blog" class="hover:underline hover:text-white">Blog</a>
        </li>
      </ul>

      <!-- Right: Button -->
      <div class="mr-[250px]">
        <button
          class="py-[6px] px-[10px] text-[14px] font-poppins font-bold bg-[#E8AABE] text-white rounded-[50px] border border-transparent hover:bg-transparent hover:text-white hover:border-white"
        >
          BOOK A CALL
        </button>
      </div>
    </nav>

    <!-- Welcome Image Section below Navbar -->
    <div class="relative mt-0 h-[593px]">
      <!-- Image Background -->
      <img
        src="../../assets/main.png"
        alt="Main Background"
        class="w-full h-full object-cover"
      />
      <!-- Welcome Text -->
      <div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <!-- h2: Title -->
          <h2
            class="text-white font-['PT_Serif'] text-[32px] font-bold leading-[50px] mt-[180px] ml-[120px] text-center"
          >
            Find New Clients and Close More Deals
          </h2>

          <!-- h1: Subtitle -->
          <h1
            class="text-white font-['PT_Serif'] text-[46px] font-bold leading-[50px] tracking-[2px] ml-[160px] mr-[44px] mt-[0px] mb-[30px] text-center"
          >
            Revamp Your LinkedIn Profile
          </h1>

          <!-- p: Paragraph -->
          <p
            class="text-gray-100 font-poppins text-[17px] leading-[32px] ml-[220px] mr-[100px] mb-[40px] px-[280px] text-center"
          >
            Transform your LinkedIn presence, stand out, connect with the right
            professionals, and close more deals.
          </p>
          <!-- Button -->
          <a href="#Pricing">
            <button
              class="mt-0 mb-0 mr-0 ml-[120px] text-[18px] leading-[24px] font-['PT_Serif'] font-bold bg-[#F6F6F6] text-[#DD63BD] py-[15px] px-[40px] rounded-[30px] hover:bg-transparent hover:text-[#DD63BD] border border-transparent hover:border-[#DD63BD] transition-all"
              style="text-decoration: none"
            >
              View Pricing
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>
