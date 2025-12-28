<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  });
</script>

<template>
  <div class="bg-white shadow-lg px-10 py-8 rounded-xl">
    <h1 class="text-2xl mb-5 font-bold font-sans">Iniciar sessão</h1>
    <form class="h-64 w-100 flex flex-col justify-between font-semibold">
      <div class="flex flex-col gap-1.5 mb-2">
        <label for="email">Email</label>
        <UiInput type="email" name="email" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label for="password">Senha</label>
        <UiInput type="password" name="password" />
      </div>
      <UiButton> Entrar </UiButton>
    </form>
    <p class="font-semibold text-center">
      Não tem uma conta?
      <NuxtLink class="text-primary" to="/auth/sign-up"> Cadastre-se </NuxtLink>
    </p>
  </div>
</template>
