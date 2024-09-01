<template>
  <footer class="bg-[#333333] text-white p-4 justify-between flex items-center">
    <div class="flex flex-col items-start mb-4">
      <!-- Marketing Butterfly -->
      <p class="text-[26px] leading-[32px] font-['PT_Serif'] ml-[250px] tracking-normal mb-[8px]">
        Marketing Butterfly
      </p>

      <!-- Created with system.io -->
      <p class="text-[18px] leading-[26px] font-poppins font-medium ml-[250px] tracking-[2px] mb-[8px]">
        Created with system.io
      </p>
    </div>

    <div class="flex-col items-end mb-4 text-right ">
      <!-- Terms & Conditions -->
      <p class="text-[16px] leading-[24px] font-poppins mr-[250px] tracking-normal mt-[4px] mb-[8px]">
        <a href="#terms" class="text-white hover:underline">Terms & Conditions</a>
      </p>

      <!-- Privacy Policy -->
      <p class="text-[16px] leading-[24px] font-poppins mr-[250px] tracking-normal mt-[4px] mb-[8px]">
        <a href="#privacy" class="text-white hover:underline">Privacy Policy</a>
      </p>
     
    </div>

  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
};
</script>
