<template>
  <nav
    class="px-2 py-2 flex justify-between fixed w-full top-0 sm:px-4 lg:py-2 max-h-100 h-auto grow-0 align-top flex-start"
  >
    <div class="h-[1px] top-0 absolute left-0 w-full lg:h-1 max-h-100 h-auto grow-0 align-top"></div>
    <router-link
      to="/"
      class="font-logo sm:text-lg text-2xl font-normal select-none slg:font-semibold lg:text-2xl tracking-wider"
      >Michael Synan</router-link
    >
    <div class="flex sm:text-lg text-sm items-center gap-1 sm:gap-2 align-top sm:mx-1 grow-0">
      <router-link
        class="sm:text-sm md:text-base hover:border-b-2 font-theme_bold px-0 py-0 pb-0 sm:mx-1 mx-3 transition-all sm:px-0 sm:py-0 sm:mx-1 uppercase"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="sm:text-sm md:text-base hover:border-b-2 font-theme_bold px-0 py-0 pb-0 sm:mx-1 mx-3 transition-all sm:px-0 sm:py-0 sm:mx-1 uppercase"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="sm:text-sm md:text-base hover:border-b-2 font-theme_bold px-0 py-0 pb-0 sm:mx-1 mx-3 transition-all sm:px0 sm:py-0 sm:mx-1 uppercase"
        to="/projects"
      >
        Projects
      </router-link>
    </div>
  </nav>
</template>
