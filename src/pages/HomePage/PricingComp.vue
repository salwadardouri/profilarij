<template>
  <section
    id="Pricing"
    class="flex flex-col items-center justify-center h-[380px]"
    style="background-color: #bb4b7a"
  >
    <!-- Title -->
    <div
      class="text-[50px] mt-[-50px] leading-[80px] ml-[400px] mr-[400px] font-serif font-bold text-white"
    >
      Super simple transparent pricing
    </div>

    <!-- Buttons -->
    <div class="flex mt-2 space-x-20 justify-between">
      <!-- View Pricing Button -->
      <button
        class="text-[16px] hover:shadow-lg hover:text-white leading-[20px] font-['PT_Serif'] font-serif font-bold text-gray-100 py-[12px] px-0 rounded-tl-[50px] rounded-tr-[50px] border-b-2 border-[#374C4F]"
      >
        View Pricing
      </button>

      <!-- Contact Me Button -->
      <button
        class="text-[16px] hover:shadow-lg hover:text-white leading-[20px] font-['PT_Serif'] font-serif font-bold text-gray-100 py-[12px] px-0 rounded-tl-[50px] rounded-tr-[50px] border-b-2 border-[#374C4F]"
      >
        Contact Me
      </button>
    </div>
  </section>
  <div
    class="flex flex-col items-center justify-center h-[700px]"
    style="background-color: #f4cfe0"
  >
    <div
      class="mt-[-90px] pt-[40px] w-[720px] justify-center pr-[25px] pb-[60px] pl-[25px] text-[50px] font-poppins rounded-[50px] bg-white text-gray-700"
    >
      <div
        class="text-center justify-center mt-0 text-[60px] font-bold leading-[74px] font-['PT_Serif']"
      >
        Pricing options
      </div>
      <div class="flex space-x-0 mt-[50px]">
        <!-- Cadre Gauche -->
        <div class="flex-1 p-[15px] pt-[15px] px-0 border border-[#E2DFDF]">
          <!-- Contenu du Cadre Gauche -->
          <p
            class="text-gray-700 text-center font-bold text-[25px] leading-[24px] font-poppins"
          >
            {{ pricingData[0]?.name || 'Starter' }}
          </p>
          <div class="mt-[20px] mb-[20px] pt-[15px] bg-[#F7F7F7] text-center">
            <div class="flex items-center justify-center space-x-4">
              <h2 class="text-[65px] leading-[24px] font-poppins font-bold">
                {{ pricingData[0]?.price  }}
              </h2>
              <p
                class="text-[28px] leading-[24px] font-poppins mt-[30px] ml-[-10px]"
              >
                $
              </p>
            </div>
            <div class="mt-[5px]">
              <p class="text-[15px] leading-[24px] font-poppins">
                {{ pricingData[0]?.payment_frequency  }}
              </p>
            </div>
          </div>
          <div class="mt-0 mr-[10px] ml-[10px] mb-[23px] text-center">
            <p class="text-[11px] leading-[30px] font-poppins">
              {{ pricingData[0]?.strategy_consultation }}   Strategy Consultation
            </p>
            <p class="text-[11px] leading-[30px] font-poppins">
              Full Profile Revamp:
            </p>
            <p class="text-[11px] leading-[24px] font-poppins">
              {{ pricingData[0]?.full_profile_revamp }}
            </p>
            <p class="text-[13px] font-bold leading-[30px] font-poppins">
              {{ pricingData[0]?.additional_features  }}
            </p>
            <button
              class="mt-[-20px] text-[10px] leading-[19px] font-poppins text-black py-[10px] px-[38px] rounded-none border border-black hover:text-black hover:border-solid border-[2px] hover:border-[3px] hover:border-black focus:outline-none"
            >
              GET STARTED
            </button>
          </div>
        </div>

        <!-- Cadre Central -->
        <div
          class="flex-1 p-[15px] mt-[-10px] mb-[-10px] pt-[12px] px-0 border border-[#E2DFDF] shadow-2xl"
        >
          <!-- Contenu du Cadre Central -->
          <p
            class="text-gray-700 text-center font-bold text-[25px] leading-[24px] font-poppins"
          >
            {{ pricingData[1]?.name  }}
          </p>
          <div class="mt-[20px] mb-[20px] pt-[15px] bg-[#F9EAEA] text-center">
            <div class="flex items-center justify-center space-x-4">
              <h2
                class="text-[65px] leading-[24px] font-poppins text-[#bb4b7a] font-bold"
              >
                {{ pricingData[1]?.price  }}
              </h2>
              <p
                class="text-[28px] leading-[24px] font-poppins mt-[30px] ml-[-10px]"
              >
                $
              </p>
            </div>
            <div class="mt-[5px]">
              <p class="text-[15px] leading-[24px] font-poppins">
                {{ pricingData[1]?.payment_frequency }}
              </p>
            </div>
          </div>
          <div class="mt-0 mr-[10px] ml-[10px] mb-[23px] text-center">
            <p class="text-[11px] leading-[30px] font-poppins">
              {{ pricingData[1]?.strategy_consultation }}  Strategy Consultation
            </p>
            <p class="text-[11px] leading-[30px] font-poppins">
              Full Profile Revamp:
            </p>
            <p class="text-[11px] leading-[24px] font-poppins">
              {{ pricingData[1]?.full_profile_revamp  }}
            </p>
            <p class="text-[13px] font-bold leading-[30px] font-poppins">
              {{ pricingData[1]?.custom_posts  }} Post Scheduling & Optimization
            </p>
            <p class="text-[13px] font-bold leading-[30px] font-poppins">
              {{ pricingData[1]?.additional_features  }}
            </p>
            <button
              class="mt-[-20px] text-[10px] leading-[19px] font-poppins text-black py-[10px] px-[38px] rounded-none border border-black hover:text-black hover:border-solid border-[2px] hover:border-[3px] hover:border-black focus:outline-none"
            >
              GET STARTED
            </button>
          </div>
        </div>

        <!-- Cadre Droit -->
        <div class="flex-1 p-[15px] pt-[15px] px-0 border border-[#E2DFDF]">
          <!-- Contenu du Cadre Droit -->
          <p
            class="text-gray-700 text-center font-bold text-[25px] leading-[24px] font-poppins"
          >
            {{ pricingData[2]?.name }}
          </p>
          <div class="mt-[20px] mb-[20px] pt-[15px] bg-[#F7F7F7] text-center">
            <div class="flex items-center justify-center space-x-4">
              <h2 class="text-[65px] leading-[24px] font-poppins font-bold">
                {{ pricingData[2]?.price  }}
              </h2>
              <p
                class="text-[28px] leading-[24px] font-poppins mt-[30px] ml-[-10px]"
              >
                $
              </p>
            </div>
            <div class="mt-[5px]">
              <p class="text-[15px] leading-[24px] font-poppins">
                {{ pricingData[2]?.payment_frequency }}
              </p>
            </div>
          </div>
          <div class="mt-0 mr-[10px] ml-[10px] mb-[23px] text-center">
            <p class="text-[11px] leading-[30px] font-poppins">
              {{ pricingData[2]?.strategy_consultation }}   Strategy Consultation
            </p>
            <p class="text-[11px] leading-[30px] font-poppins">
              Full Profile Revamp:
            </p>
            <p class="text-[11px] leading-[24px] font-poppins">
              {{ pricingData[2]?.full_profile_revamp  }}
            </p>
            <p class="text-[13px] font-bold leading-[30px] font-poppins">
              {{ pricingData[2]?.custom_posts  }}
            </p>
            <p class="text-[13px] font-bold leading-[30px] font-poppins">
              {{ pricingData[2]?.additional_features  }}
            </p>
            <button
              class="mt-[-20px] text-[10px] leading-[19px] font-poppins text-black py-[10px] px-[38px] rounded-none border border-black hover:text-black hover:border-solid border-[2px] hover:border-[3px] hover:border-black focus:outline-none"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PricingSection',
  data() {
    return {
      pricingData: []
    };
  },
  mounted() {
    axios.get('http://localhost:5000/prices')
      .then(response => {
        this.pricingData = response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
};
</script>

<style scoped>
/* Votre style ici, si nécessaire */
</style>
