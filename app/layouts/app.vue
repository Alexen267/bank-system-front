<template>
  <div class="h-screen flex">
    <aside class="w-60 bg-white border-r py-2 border-slate-50 px-6">
      <h1 class="mt-2 font-semibold mb-4 fill-none">
        <ILogoBai class="h-8" :filled="true" :font-controlled="false" />
      </h1>
      <ul class="flex flex-col gap-2">
        <UiSidebarLink
          to="/client/dashboard"
          label="Dashboard"
          icon="material-symbols:dashboard"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/account"
          label="Conta"
          icon="material-symbols:account-circle"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/transactions"
          label="Transações"
          icon="material-symbols:compare-arrows"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/balance"
          label="Saldo"
          icon="material-symbols:account-balance"
        ></UiSidebarLink>

        <UiSidebarLink
          to="/client/cards"
          label="Cartões"
          icon="material-symbols:add-card-outline"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/requests"
          label="Pedidos"
          icon="material-symbols:request-page"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/history"
          label="Histórico"
          icon="material-symbols:history"
        ></UiSidebarLink>
        <UiSidebarLink
          to="/client/settings"
          label="Configurações"
          icon="material-symbols:settings-account-box-outline"
        ></UiSidebarLink>
      </ul>
    </aside>
    <section class="flex-1 flex flex-col w-full items-center">
      <header class="bg-white w-full py-2 px-4 h-16">HEADER</header>
      <div class="bg-slate-50 h-full w-full">
        <slot />
      </div>
    </section>
  </div>
</template>
