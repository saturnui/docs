<template>
  <img
    src="/vuwi-background.png"
    class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none pointer-events-none"
  />
  <div class="flex flex-col h-screen items-center gap-4 overflow-y-auto">
    <div>
      <assets-logo-saturn class="h-40 w-40 mt-30 fill-gray-600 dark:fill-cyan-400" />
    </div>
    <div class="sa-content flex flex-col items-center px-10 gap-8">
      <div class="grid gap-12">
        <div class="font-light space-y-2 text-center">
          <div class="text-5xl">Saturn</div>
          <!-- <div class="text-5xl">Headless Vue UI</div> -->
          <div class="text-3xl pl-2">Vue 3 + Tailwind CSS Components</div>
          <!-- <div class="flex items-center justify-center gap-2">
            <simple-icons-windicss class="text-light-blue-400" />Fully supports WindiCSS
          </div> -->
        </div>
        <div class="relative grid gap-4 w-full">
          <div class="sa-col-3-1 gap-4">
            <router-link
              to="/getting-started"
              class="sa-btn sa-primary rounded-full"
              size="lg"
            >Get Started</router-link>
            <router-link
              to="/introduction"
              class="sa-btn border border-primary rounded-full"
              size="lg"
            >Why Saturn?</router-link>
            <a
              href="https://github.com/vuwijs/vuwi"
              target="_blank"
              class="sa-btn rounded-full bg-dark-600 bg-opacity-10 gap-2"
              size="lg"
            >
              <carbon-logo-github />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      <div class="text-xl font-light max-w-xl text-center text-dark-700 dark:text-dark-300">
        <!-- Vuwi is set of beautifully handcrafted Tailwind CSS and Vue 3 components. Everything you need to create
        fully customizable applications is at your fingertips. -->
        Effortlessly build high-performance & high-quality Vue 3 user interfaces with 100% customizable designs <br /> using Tailwind & Windi CSS.
      </div>

      <router-link
        to="/components/alert"
        class="sa-btn sa-dark bg-green-600 rounded-full font-medium px-6 py-4 rounded-lg my-8 font-bold"
      >See component documentation</router-link>
      <div class="flex justify-center gap-4 w-full p-3">
        <div class="sa-col-3-1 gap-12 max-w-80 lg:max-w-max">
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light font-light">CSS First</div>
            <div>Style components with CSS instead of a bunch of properties defined by APIs</div>
          </div>
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light font-light">Headless UI</div>
            <div>Use pre-built Vue 3 headless components to drive Tailwind components</div>
          </div>
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light font-light">Powerful</div>
            <div>Use tooling such as Vite, Vitesse and WindiCSS to build full applications</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow"></div>
    <div class="w-full text-center p-14 bg-dark-400 bg-opacity-10 text-sm mt-14">
      <div>Released under the MIT License</div>
      <div>Copyright &copy; 2021-2022 Rob Taylor</div>
    </div>
  </div>
  <ToggleDarkMode class="fixed sa-tr m-4" />
  <!-- <Banner class="top-8 right-8" /> -->
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
