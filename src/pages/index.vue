<template>
  <img
    src="/vuwi-background.png"
    class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none pointer-events-none"
  />
  <div class="flex flex-col h-screen items-center gap-4 overflow-y-auto">
    <div>
      <assets-logo-vuwi class="h-60 w-60 -mr-13" />
    </div>
    <div class="vuwi-content flex flex-col items-center px-10 gap-8">
      <div class="grid gap-12">
        <div class="font-light space-y-2 text-center">
          <div class="text-5xl">Web UI Framework</div>
          <div class="text-3xl pl-2">Built with Vue 3 and Tailwind CSS</div>
          <div class="flex items-center justify-center gap-2">
            <simple-icons-windicss class="text-light-blue-400" />WindiCSS is also fully supported
          </div>
        </div>
        <div class="relative grid gap-4 w-full">
          <div class="vuwi-col-3-1 gap-4">
            <router-link
              to="/getting-started"
              class="vuwi-btn vuwi-btn-primary vuwi-btn-lg vuwi-btn-pill"
            >Get Started</router-link>
            <router-link
              to="/introduction"
              class="vuwi-btn vuwi-btn-primary vuwi-btn-outline vuwi-btn-lg vuwi-btn-pill"
            >Why Vuwi?</router-link>
            <a
              href="https://github.com/vuwijs/vuwi"
              target="_blank"
              class="vuwi-btn vuwi-btn-lg vuwi-btn-pill bg-dark-600 bg-opacity-10 gap-2"
            >
              <carbon-logo-github />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      <div class="text-xl font-light max-w-xl text-center text-dark-700 dark:text-dark-300">
        Vuwi is a Vue UI Library built on top of theme-driven Tailwind CSS components. Everything you need to create
        fully customizable applications is at your fingertips.
      </div>

      <div>
        Supports using third-party Tailwind components such as
        <a href="https://tailwindui.com/" class="text-primary vuwi-btn-link">Tailwind UI</a>,
        <a
          href="https://www.themes.dev/library/aircontrol-tailwindcss-admin-theme"
          class="text-primary vuwi-btn-link"
        >Aircontrol</a> and others.
      </div>

      <router-link
        to="/getting-started"
        class="vuwi-btn vuwi-btn-primary font-medium px-6 py-4 rounded-lg my-8"
      >Style components with CSS instead of JavaScript APIs</router-link>
      <div class="flex justify-center gap-4 w-full p-3">
        <div class="vuwi-col-3-1 gap-12 max-w-80 lg:max-w-max">
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Simple</div>
            <div>Style components with CSS instead of a bunch of properties defined by APIs</div>
          </div>
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Performant</div>
            <div>CSS-driven components driven by the power of Vue when needed</div>
          </div>
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Powerful</div>
            <div>Use tooling such as Vite, Vitesse and WindiCSS to build full applications</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow"></div>
    <div class="w-full text-center p-14 bg-dark-400 bg-opacity-10 text-sm mt-14">
      <div>Released under the MIT License</div>
      <div>Copyright &copy; 2021-2022 Vuwi</div>
    </div>
  </div>
  <ToggleDarkMode class="fixed vuwi-tr m-4" />
  <Banner class="top-8 right-8" />
</template>

<style>
.logo-enter-active {
  transition: transform 5s ease-out;
}

.logo-leave-active {
  transition: transform 5s ease-in;
}

/* .logo-enter-from {
  transform: translateY(-40px);
} */
.logo-leave-to {
  transform: translateY(40px);
}
</style>

<route lang="yaml">
meta:
  layout: plain
</route>
