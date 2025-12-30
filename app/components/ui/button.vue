<template>
  <button
    @click.prevent=""
    class="cursor-pointer font-semibold active:bg-blue-800 transition mt-auto mb-4 text-white py-2 rounded-lg bg-blue-900"
  >
    <slot />
  </button>
</template>
