<script lang="ts" setup></script>
<template>
  <h5 class="mb-5 underline">Horizontal Card</h5>
  <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <div class="card sm:flex">
      <div>
        <img
          class="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-l-md"
          src="@/assets/images/small/img-4.jpg"
          alt="Image"
        />
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-col h-full card-body">
          <h6 class="mb-4 text-15">Card title</h6>
          <p class="text-slate-500 dark:text-zink-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="mt-5 sm:mt-auto">
            <p class="text-sm text-slate-500 dark:text-zink-200">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card sm:flex">
      <div class="flex flex-wrap">
        <div class="flex flex-col h-full card-body">
          <h6 class="text-gray-800 text-15 dark:text-zink-50">Card title</h6>
          <p class="mt-2 text-slate-500 dark:text-zink-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="mt-5 sm:mt-auto">
            <p class="text-slate-500 ext-sm dark:text-zink-200">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          class="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-r-md"
          src="@/assets/images/small/img-1.jpg"
          alt="Image"
        />
      </div>
    </div>
  </div>
</template>
