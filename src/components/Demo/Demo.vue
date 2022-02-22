<script setup lang="ts">
import DemoMenu from './DemoMenu.vue'
defineProps({
  theme: String,
})
const showDialog = ref(false)

const showToast = ref(false)
const showDrawer = ref(false)

const navTo = (url: string) => {
  window.parent.location.href = url
  // showToast.value = false
}

const getElementOffset = (el?: HTMLElement) => {
  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent as HTMLElement
  }
  return { top: _y, left: _x }
}

const openToast = () => {
  showToast.value = true
  const scrollTarget = document.getElementById('scrollTarget')
  const demoTarget = document.getElementById('demo')
  const toastTarget = document.getElementById('toast')
  if (scrollTarget && demoTarget && toastTarget) {
    const demoOffset = getElementOffset(demoTarget)
    const toastOffset = getElementOffset(toastTarget)
    // console.log(toastOffset.top, demoOffset.top, toastOffset.top - demoOffset.top)
    scrollTarget.scrollTo({
      top: toastOffset.top - demoOffset.top,
      left: 0,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div id="demo" class="border-t-2 sa-border">
    <DemoAppBar :theme="theme" @toast:open="openToast" @drawer:open="showDrawer = true" />
    <div class="py-3 flex-grow grid grid-cols-4 gap-4">
      <div class="col-span-4 md:col-span-3">
        <DemoGallery class="h-full rounded-lg" :theme="theme" />
      </div>
      <DemoProgress class="sa-card col-span-full md:col-span-1" :theme="theme" />
      <DemoPieCharts :theme="theme" />
      <DemoProfile class="col-span-full md:col-span-2" />
      <DemoTabs class="col-span-full md:col-span-2" />
      <!-- <DemoSettings class="demo-cardcol-span-full md:col-span-2" />
      <DemoProduct class="demo-card p-0 col-span-full md:col-span-2" />-->
    </div>

    <!-- Left Drawer -->
    <DemoMenu v-model="showDrawer" :theme="theme" />

    <!-- FAB / Toast -->
    <div class="absolute sa-br m-2">
      <div class="flex justify-end m-2 demo-outline">
        <VButton
          icon
          size="xl"
          class="filter drop-shadow-lg bg-blue-600 border-2 text-white"
          @click="showDialog = true"
        >
          <tabler-message class="text-2xl" />
        </VButton>
      </div>

      <VCollapse id="toast" v-model="showToast" class="pointer-events-none" slide="up">
        <div class="flex justify-end p-2 pointer-events-auto">
          <div class="p-3 bg-blue-600 border-2 border-white text-gray-200 w-85 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex justify-center items-center gap-4 px-2">
                <div>
                  <div class="bg-white relative p-1 sa-mask-6 w-12 h-12">
                    <img src="/demo/badge_4_white.png" width="40" height="40" />
                  </div>
                </div>
                <div class="h-18 border-r"></div>
                <div class="grid gap-2">
                  <div class="text-lg font-bold">Toast Component</div>
                  <div class="text-sm">Use toasts to notify users of events and important messages</div>
                </div>
              </div>
            </div>

            <div class="pt-4 px-2 flex items-center">
              <div class="flex-grow"></div>
              <div class="flex gap-4">
                <VButton
                  size="sm"
                  class="rounded uppercase text-xs font-bold text-white"
                  @click="showToast = false"
                >
                  <span>Dismiss</span>
                </VButton>
                <VButton
                  size="sm"
                  class="rounded bg-white text-blue-600 text-xs uppercase font-bold"
                  @click="navTo('/components/resizer')"
                >
                  <span>See component</span>
                </VButton>
              </div>
            </div>
          </div>
        </div>
      </VCollapse>
    </div>

    <!-- Vue -->
    <VOverlay v-model="showDialog" disable-scroll-target="parent" class="sa-overlay-fixed z-50">
      <VDialog class="max-w-xl sa-card sa-bg-primary rounded-4xl" @close="showDialog = false">
        <!-- Title -->
        <template #title>
          <!-- <img src="/demo/badge_4_white.png" width="48" height="48" /> -->
          <div class="bg-white relative p-1 sa-mask-6 w-12 h-12">
            <img src="/demo/badge_4_white.png" width="40" height="40" />
          </div>
          <div class="ml-2 text-xl font-semibold">Dialog Component</div>
        </template>
        <!-- Content -->
        <div class="p-6 border-t border-white">Use dialogs for forms, alerts and messaging.</div>
        <!-- Actions -->
        <template #actions>
          <VButton @click="showDialog = false">Cancel</VButton>
          <VButton
            class="bg-white text-blue-500 text-sm font-bold uppercase"
            @click="navTo('/components/dialog')"
          >See component</VButton>
        </template>
      </VDialog>
    </VOverlay>
  </div>
</template>

<style>
.dark .profile-border {
  @apply bg-purple-500;
}

.mono .profile-border {
  @apply bg-white;
}
</style>
