<script setup lang="ts">
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js'

onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <DemoStars />
  <img
    src="/background.png"
    class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none pointer-events-none"
  />
  <AppBar class="fixed top-0 sa-text" />
  <div id="scrollTarget" class="flex flex-col h-screen items-center gap-4 overflow-y-auto">
    <div>
      <assets-logo-saturn class="h-40 w-40 mt-30 fill-gray-600 dark:fill-teal-400" />
    </div>
    <div class="w-max-7xl flex flex-col items-center px-10 gap-8">
      <assets-type-saturn alt="Saturn" class="mt-2 h-20 w-80 fill-gray-600 dark:fill-teal-400" />
      <div class="grid gap-12">
        <div class="relative max-w-5xl mx-auto pt-20">
          <h1
            class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
          >Effortlessly build applications using Vue 3 and Tailwind CSS.</h1>
          <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Fully customizable components that are
            <span
              class="font-bold text-xl text-sky-500 dark:text-sky-400"
            >design driven</span> and
            <span class="font-bold text-xl text-sky-500 dark:text-sky-400">developer</span> friendly.
          </p>
        </div>
        <div class="max-w-5xl pt-20">
          <div class="sa-mock-window bg-dark-100 dark:bg-dark-800 border sa-border">
            <div class="absolute sa-tl mt-3 text-center w-full font-semibold flex justify-center">
              <div>Explore Saturn Demo</div>
              <VTooltip class="absolute sa-mr z-50">
                <template #tooltip>
                  <div class="whitespace-nowrap">Open In Separate Tab</div>
                </template>
                <a href="/demo" target="_blank" icon class="sa-btn">
                  <tabler-external-link />
                </a>
              </VTooltip>
            </div>
            <div class="border-t sa-border text-white">
              <VResizer component="demo-resizer" class="h-140 min-w-120 max-w-full" resize="width">
                <iframe src="/demo" frameborder="0" width="100%" height="100%"></iframe>
                <template #handle="{ startDrag }">
                  <div class="resizer-handle" @mousedown="startDrag">
                    <VTooltip placement="left" component="demo-tooltip" show="focus">
                      <template #tooltip>
                        <DemoTooltip
                          title="Resizer Component"
                          link="/components/resizer"
                        >Use the resizer to adjust a content's width, height or both.</DemoTooltip>
                      </template>
                      <button class="w-2 h-10 bg-gray-300 dark:bg-teal-400 rounded-full"></button>
                    </VTooltip>
                  </div>
                </template>
              </VResizer>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col p-6 pb-0 rounded-lg bg-dark-800 gap-4">
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
      </div>

      <div class="flex justify-center gap-4 w-full p-3">
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
      </div>
    </div>

    <div class="flex-grow"></div>
    <div class="w-full text-center p-14 bg-dark-400 bg-opacity-10 text-sm mt-14">
      <div>Released under the MIT License</div>
      <div>Copyright &copy; 2021-2022 Rob Taylor</div>
    </div>
  </div>
</template>

<style>
pre code.hljs {
  color: rgba(255, 255, 255, 0.78) !important;
}

.hljs {
  font-size: 15px !important;
  padding: 10px !important;
}

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

.hljs-tag {
  color: #ffffff50;
}

.hljs-ln {
  position: relative;
  padding-left: 3em !important;
}

.hljs-ln .ln-bg {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 2.2em;
  height: 100%;
  border-right: 1px solid #555;
  background: rgba(255, 255, 255, 0.18);
}

.hljs-ln .ln-num {
  position: relative;
  display: inline-block;
  height: 1em;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hljs-ln .ln-num::before {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  margin-right: 1em;
  color: #777;
  font-style: normal;
  font-weight: normal;
  content: attr(data-num);
}
</style>

<route lang="yaml">
meta:
  layout: plain
</route>
