<script lang="ts" setup>
const cardConfig = { mask: "#### #### #### ####" };
const expiringConfig = { mask: "##/##" };
const cvvConfig = { mask: "###" };
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h6 class="mb-4 text-15">Payment Information</h6>
      <form action="#!">
        <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div class="xl:col-span-12">
            <TInputField
              placeholder="XXXX XXXX XXXX XXXX"
              label="Card Number"
              v-maska:[cardConfig]
              hide-details
            />
          </div>
          <div class="xl:col-span-6">
            <TInputField
              placeholder="MM/YY"
              label="Expiring (MM/YY)"
              hide-details
              v-maska:[expiringConfig]
            />
          </div>
          <div class="xl:col-span-6">
            <TInputField
              placeholder="000"
              label="CVV Code"
              hide-details
              v-maska:[cvvConfig]
            />
          </div>
        </div>
      </form>

      <div class="mt-3">
        <h6 class="mb-1">We accept the following cards</h6>
        <div class="flex items-center gap-2">
          <img src="@/assets/images/payment/img-01.png" alt="" class="h-8" />
          <img src="@/assets/images/payment/img-02.png" alt="" class="h-8" />
          <img src="@/assets/images/payment/img-03.png" alt="" class="h-8" />
          <img src="@/assets/images/payment/img-04.png" alt="" class="h-8" />
        </div>
      </div>
    </div>
  </div>
</template>
