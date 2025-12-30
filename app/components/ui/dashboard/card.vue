<script setup lang="ts">
  defineProps<{
    icon: string;
    title: string;
  }>();
</script>

<template>
  <div
    class="bg-white h-28 w-64 min-w-max rounded-lg p-4 flex flex-col justify-between shadow-md"
  >
    <h3 class="flex items-center gap-2 font-poppins">
      <Icon :name="icon" class="text-2xl text-green-500" />
      <span class="text-slate-600 text-base font-medium"> {{ title }} </span>
    </h3>
    <div class="flex justify-between font-poppins items-center">
      <span class="font-semibold text-lg text-slate-950 mr-5">
        45,000.00 akz
      </span>
      <span class="flex items-center gap-1 text-green-500 font-bold">
        <Icon name="material-symbols:trending-up" />
        <span class="text-xs">+4.5%</span>
      </span>
    </div>
  </div>
</template>
