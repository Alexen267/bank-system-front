<script setup lang="ts">
  defineProps<{
    type: string;
    name: string;
  }>();

  const open = ref<boolean>(false);
  const baseClasses =
    'border border-slate-300 px-4 py-2 rounded-md outline outline-transparent hover:outline-cyan-400 focus-within:outline-cyan-400 transition flex';
</script>

<template>
  <div :class="baseClasses" class="cursor-text">
    <input
      class="outline-none w-full"
      :type="open ? 'text' : type"
      :name="name"
      :id="name"
    />
    <span
      class="inline-block ml-3 cursor-pointer select-none"
      @click="() => (open = !open)"
      v-if="type === 'password'"
      >{{ open ? 'Ocultar' : 'Mostrar' }}</span
    >
  </div>
</template>

<style lang="scss" scoped></style>
