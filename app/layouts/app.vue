<template>
  <div class="h-screen flex">
    <LayoutSidebar />
    <section class="flex-1 flex flex-col w-4/5 items-center">
      <header class="bg-white w-full flex py-2 px-4 h-16">
        <div class="flex items-center ml-auto gap-3 h-full">
          <button
            class="border hover:text-white hover:bg-slate-400 transition border-slate-300 flex items-center justify-center p-1.5 rounded-md mr-2 text-slate-500 active:bg-slate-600"
          >
            <Icon
              name="material-symbols:notifications"
              class="text-xl cursor-pointer"
            />
          </button>
          <img
            class="h-11 w-11 rounded-full object-cover"
            src="@/assets/img/young-man.jpg"
            alt="profile_picture"
          />
          <div class="flex flex-col gap-0.5">
            <strong class="font-bold text-blue-950 text-sm"
              >Alessandro Almeida</strong
            >
            <span class="text-xs font-semibold text-slate-500">
              propriedade0@gmail.com
            </span>
          </div>
        </div>
      </header>
      <div class="bg-slate-50 px-8 py-6 h-full w-full overflow-y-scroll">
        <slot />
      </div>
    </section>
  </div>
</template>
