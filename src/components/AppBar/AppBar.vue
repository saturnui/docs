<script setup lang="ts">
const router = useRouter()
const showDrawer = ref(false)

const rootClass = ref('')

const handleSwipeEnd = (data: { direction: string }) => {
  if (data.direction === 'LEFT') showDrawer.value = false
}

const close = () => {
  showDrawer.value = false
}

onMounted(() => {
  const { y } = useScroll(document.getElementById('scrollTarget'))

  watch(y, (val) => {
    // console.log(val)
    if (val > 30) 
      rootClass.value = 'bg-white/90 dark:bg-dark-900/90 dark:border-dark-800'
    else 
      rootClass.value = ''
  })
})
</script>

<template>
  <div class="app-appbar transition-all duration-500" :class="rootClass">
    <div class="flex w-full max-w-8xl items-center gap-2 px-0">
      <VButton icon class="lg:hidden" @click="showDrawer = !showDrawer">
        <tabler-menu-2 />
      </VButton>
      <!-- Logo -->
      <div class="flex items-center gap-0 lg:pl-6 cursor-pointer" @click="router.push('/')">
        <assets-logo-saturn class="w-8 h-8 fill-gray-600 dark:fill-teal-400" />
        <!-- <div class="font-bold text-2xl text-gray-600 dark:text-teal-400">saturn</div> -->
        <assets-type-saturn alt="Saturn UI" class="h-6 w-20 fill-gray-600 dark:fill-teal-400" />
        <div class="mt-1.5 ml-4 font-mono">0.0.1</div>
        <!-- <div class="px-3 py-1 bg-purple-600 text-white rounded-full font-medium text-sm">Pre-Alpha</div> -->
      </div>
      <div class="flex-grow"></div>
      <!-- teleport -->
      <div id="appbar-actions"></div>
      <router-link
        to="/introduction"
        class="font-semibold text-sm mr-7 hover:text-blue-500 dark:hover:text-teal-400"
      >Docs</router-link>
      <router-link
        to="/components/alert"
        class="font-semibold text-sm hover:text-blue-500 dark:hover:text-teal-400"
      >Components</router-link>
      <div class="border-r h-6 mx-2 px-2 sa-border"></div>
      <div class="flex gap-3 opacity-70">
        <ToggleDarkMode />
        <a href="https://github.com/saturnui/vue" target="_blank" icon class="sa-btn">
          <carbon-logo-github />
        </a>
      </div>
    </div>
    <VOverlay v-model="showDrawer" class="z-0" position="left" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 sa-light-dark border-r sa-border overflow-y-auto pt-4">
        <Navigation @close="showDrawer = false" />
      </div>
    </VOverlay>
  </div>
</template>
