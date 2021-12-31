<template>
  <img
    src="/vuwi-background.png"
    class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none pointer-events-none"
  />
  <div class="flex flex-col h-screen items-center">
    <div class="vuwi-content flex flex-col items-center px-10 gap-8">
      <assets-logo-vuwi class="h-60 w-60 mt-20 -mr-13" />
      <div class="grid gap-12">
        <div class="font-light space-y-2 text-center">
          <div class="text-5xl">Tailwind UI Framework</div>
          <div class="text-3xl pl-2">powered by Vue</div>
        </div>
        <div class="relative grid gap-4 w-full p-3">
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
        Vuwi is a Vue UI Library with beautifly handcrafted Tailwind Components. Leverage the power
        of Tailwind CSS on top of Vue 3. Everything you need to create fully
        customizable applications is at your fingertips.
      </div>
      <div class="flex justify-center gap-4 w-full p-3">
        <div class="vuwi-col-3-1 gap-5 max-w-80 lg:max-w-max">
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Simple</div>
            <div>Leverage the power of Tailwind instead of a bunch of properties defined by an API</div>
          </div>
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Performant</div>
            <div>Each component has been designed to leverage Tailwind CSS where possible sprinking Vue when needed</div>
          </div>
          <div class="text-center space-y-4">
            <div class="text-3xl text-primary-light font-light">Powerful</div>
            <div>Vuwi uses modern developer tools such as Vite, Vitesse and WindiCSS to build applications</div>
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
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
