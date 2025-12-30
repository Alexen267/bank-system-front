<script setup lang="ts">
  defineProps<{ to: string; label: string; icon: string }>();
</script>

<template>
  <li>
    <NuxtLink
      :to="to"
      class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition"
    >
      <Icon :name="icon" class="text-lg text-blue-900" />
      <span class="font-semibold">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
  .router-link-active {
    background-color: var(--color-blue-900);
    color: white;
    & span {
      color: white;
    }
  }
</style>
