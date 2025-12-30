<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  });
</script>

<template>
  <div class="md:h-max h-2/3 bg-white shadow-lg px-10 py-8 rounded-xl">
    <h1
      class="text-2xl mb-5 flex items-center font-bold font-sans text-blue-900"
    >
      <ILogoBai class="h-5 mr-2" :filled="true" :font-controlled="false" />
      <span>Criar uma conta</span>
    </h1>
    <form
      class="md:h-max h-10/12 md:w-124 w-full grid md:grid-cols-2 overflow-y-scroll gap-4 font-semibold"
    >
      <div class="flex flex-col gap-1.5">
        <label for="first_name">Primeiro Nome</label>
        <UiInput type="text" name="first_name" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="last_name">Sobrenome</label>
        <UiInput type="text" name="last_name" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="nickname">Apelido</label>
        <UiInput type="text" name="nickname" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="nif">NIF</label>
        <UiInput type="text" name="nif" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="tel">Telefone</label>
        <UiInput type="tel" name="tel" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="email">Email</label>
        <UiInput type="email" name="email" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="password">Senha</label>
        <UiInput type="password" name="password" />
      </div>

      <div class="flex flex-col gap-1.5 mb-1">
        <label for="confirm">Confirmar Senha</label>
        <UiInput type="password" name="confirm" />
      </div>
      <UiButton class="col-span-full mb-2"> Criar conta </UiButton>
    </form>
    <p class="font-semibold text-center">
      Já possui uma conta?
      <NuxtLink class="text-blue-900 cursor-pointer" to="/auth/login">
        Iniciar sessão
      </NuxtLink>
    </p>
  </div>
</template>
