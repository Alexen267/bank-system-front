<template>
  <button
    @click.prevent=""
    class="cursor-pointer active:bg-blue-600 transition mt-auto mb-4 text-white py-2 rounded-lg bg-primary"
  >
    <slot />
  </button>
</template>
