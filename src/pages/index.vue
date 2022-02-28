<script setup lang="ts">
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js'

const theme = ref('')

onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <AppBar class="fixed top-0 sa-text" />
  <div
    id="scrollTarget"
    class="flex flex-col h-screen items-center gap-4 overflow-y-auto bg-demo"
    :class="theme"
  >
    <!-- Deep Space Background -->
    <div class="dark-space">
      <div class="dark-space-stars1"></div>
      <div class="dark-space-stars2"></div>
      <div class="dark-space-stars3"></div>
    </div>

    <div>
      <assets-logo-saturn class="hidden dark-show h-44 w-44 mt-30 fill-teal-400" />
      <assets-logo-saturn-sketch class="hidden blueprint-show h-40 w-40 mt-30 fill-white" />
    </div>
    <div class="flex flex-col items-center gap-8 px-4">
      <assets-type-saturn alt="Saturn" class="hidden dark-show mt-2 h-20 w-80 fill-teal-400" />
      <div class="hidden blueprint-show text-7xl">Saturn UI</div>
      <div class="flex gap-8">
        <div class="cursor-pointer bg-red-500 p-2 px-6 rounded-full" @click="theme = 'mono'">Blueprint</div>
        <!-- <div class="cursor-pointer bg-red-500 p-2 px-6 rounded-full" @click="theme = 'light'">L</div> -->
        <div class="cursor-pointer bg-red-500 p-2 px-6 rounded-full" @click="theme = 'dark'">Space</div>
      </div>
      <div class="grid gap-12 w-full">
        <div class="relative max-w-5xl mx-auto pt-20">
          <!-- <h1
            class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
          >Effortlessly build applications using Vue 3 and Tailwind CSS.</h1>-->
          <h1
            class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
          >
            Build custom applications using headless
            <span
              class="text-light-blue-400 dark:text-teal-400"
            >Vue 3</span> and
            <span class="text-light-blue-400 dark:text-teal-400">Tailwind CSS</span> components.
          </h1>
          <p class="mt-6 text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Fully customizable components that are
            <span
              class="font-bold text-light-blue-400 dark:text-sky-400"
            >CSS driven</span> and
            <span class="font-bold text-light-blue-400 dark:text-sky-400">developer friendly</span>.
          </p>
        </div>
      </div>

      <div class="sa-mock-window mt-14 w-full">
        <Demo class="p-2 max-w-5xl" :theme="theme" />
        <div class="absolute sa-tl mt-3 text-center w-full font-semibold flex justify-center">
          <div>Demo</div>
        </div>
        <VTooltip placement="left" class="absolute sa-tr m-1.5 text-xs delay-0">
          <template #tooltip>
            <div class="whitespace-nowrap">Look for the outlines to discover components.</div>
          </template>
          <div class="border-2 border-transparent rounded-full">
            <tabler-info-circle class="text-2xl text-white" />
          </div>
        </VTooltip>
      </div>

      <!-- <div class="hidden flex flex-col p-6 pb-0 rounded-lg bg-dark-800 gap-4">
        <div class="w-full text-2xl font-bold">CSS driven components</div>
        <div>Style components with CSS instead of a bunch of properties defined by APIs.</div>
        <div class="flex flex-wrap justify-center p-6 gap-6 bg-white bg-opacity-5 rounded-lg z-1">
          <VButton size="xs" class="sa-btn">Size</VButton>
          <VButton class="bg-primary text-white rounded-full">Rounded</VButton>
          <VButton class="border sa-border">Border</VButton>
          <VButton icon size="lg" class="sa-primary">
            <tabler-box class="w-1/2 h-1/2" />
          </VButton>
          <VButton class="sa-success sa-xl">Success</VButton>
          <VButton class="text-primary sa-link px-3">Link</VButton>
        </div>
        <div class="sa-mock-window bg-dark-800 border sa-border -mx-20">
          <div class="border-t sa-border text-white">
            <pre class="hljs"><code class="language-html">1  &lt;VButton size="xs" class="sa-btn">Size&lt;/VButton>
2  &lt;VButton class="bg-primary text-white rounded-full">Rounded&lt;/VButton>
3  &lt;VButton class="border sa-border">Border&lt;/VButton>
4  &lt;VButton icon size="lg" class="sa-primary">
5    &lt;tabler-box class="w-1/2 h-1/2" />
6  &lt;/VButton>
7  &lt;VButton class="sa-success sa-xl">Success&lt;/VButton>
8  &lt;VButton class="text-primary sa-link px-3">Link&lt;/VButton></code></pre>
          </div>
        </div>
      </div> -->

      <!-- <div class="hidden flex justify-center gap-4 w-full p-3">
        <div class="sa-col-3-1 gap-12 max-w-80 lg:max-w-max">
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light dark:text-teal-400 font-light">CSS First</div>
            <div>Style components with CSS instead of a bunch of properties defined by APIs</div>
          </div>
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light dark:text-teal-400 font-light">Headless UI</div>
            <div>Use pre-built Vue 3 headless components to drive Tailwind components</div>
          </div>
          <div class="text-center space-y-4 sa-highlight p-8 rounded-xl">
            <div class="text-3xl text-primary-light dark:text-teal-400 font-light">Powerful</div>
            <div>Use tooling such as Vite, Vitesse and WindiCSS to build full applications</div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="flex-grow"></div>
    <div class="w-full text-center p-14 bg-dark-400 bg-opacity-10 text-sm mt-14">
      <div>Released under the MIT License</div>
      <div>Copyright &copy; 2021-2022 Rob Taylor</div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
