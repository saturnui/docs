<script setup lang="ts">
const showDialog = ref(false)
const showProfileMenu = ref(false)
// const profileMenuOptions = [
//   { label: 'Your Profile' },
//   { label: 'Dark Mode' },
//   { label: 'Sign out' },
// ]
const menuItems = [
  { label: 'Home', badge: '/demo/badge_8.png' },
  { label: 'Communication', badge: '/demo/badge_1.png' },
  { label: 'Defense', badge: '/demo/badge_2.png' },
  { label: 'Exploration', badge: '/demo/badge_7.png' },
  { label: 'Navigation', badge: '/demo/badge_5.png' },
  { label: 'Robotics', badge: '/demo/badge_9.png' },
  { label: 'Space Crew', badge: '/demo/badge_6.png' },
  { label: 'Visitor Logs', badge: '/demo/badge_10.png' },
  { label: 'Travel Logs', badge: '/demo/badge_11.png' },
]
const showToast = ref(false)
const showLeftDrawer = ref(false)
const percentA = ref(40)
const percentB = ref(35)
const percentC = ref(55)
const percentD = ref(65)

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
    console.log(toastOffset.top, demoOffset.top, toastOffset.top - demoOffset.top)
    scrollTarget.scrollTo({
      top: toastOffset.top - demoOffset.top,
      left: 0,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div id="demo" class="demo sa-border">
    <div class="flex items-center p-2 px-4 filter drop-shadow-md sa-light-dark rounded-xl z-1">
      <div class="w-full flex items-center gap-4">
        <VButton icon class="demo-outline" @click="showLeftDrawer = true">
          <tabler-menu2 />
        </VButton>

        <div class="hidden sm:flex gap-3 font-bold">
          <div>Space Federation</div>
        </div>
        <div class="flex flex-grow items-center gap-2">
          <div class="hidden sm:block flex-grow"></div>
          <VTooltip
            show="focus"
            target="input"
            component="demo-tooltip"
            class="flex-grow sm:max-w-60"
          >
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="TextInput Component"
                  link="/components/button"
                >Use TextInput for single line and multiline entries.</DemoTooltip>
              </div>
            </template>
            <VTextInput placeholder="Search" class="sa-highlight rounded-full pl-6">
              <template #prepend>
                <tabler-search class="mr-2" />
              </template>
            </VTextInput>
          </VTooltip>

          <!-- <VTooltip class="delay-100 duration-2000"> -->
          <VButton icon class="demo-outline" @click="openToast">
            <tabler-bell />
          </VButton>

          <VDropdown v-model="showProfileMenu" class="demo-outline">
            <template #activator="{ toggle }">
              <div class="bg-purple-600 w-8 h-8 p-0.5 sa-mask-8 cursor-pointer" @click="toggle">
                <VAvatar
                  tabindex="0"
                  name="Saturn"
                  image="/demo/profile.png"
                  class="sa-mask-8 text-5xl bg-dark-700"
                />
                <!-- <img src="/demo/profile.png" class="sa-mask-5" /> -->
              </div>
            </template>
            <div
              ref="menu"
              class="p-3 origin-top-right absolute right-0 rounded-md shadow-lg mt-2 bg-purple-800"
              role="menu"
            >
              <DemoTooltip
                title="Dropdown Component"
                link="/components/dropdown"
              >Use dropdown component for menus and selectors.</DemoTooltip>
            </div>
          </VDropdown>
        </div>
      </div>
    </div>
    <div class="py-3 flex-grow grid grid-cols-4 gap-4">
      <div class="col-span-4 md:col-span-3">
        <DemoGallery class="h-full rounded-lg" />
      </div>
      <DemoProgress class="demo-card p-0 col-span-full md:col-span-1" />
      <VResizer
        component="demo-resizer"
        class="col-span-full max-w-full bg-dark-800 rounded"
        resize="width"
      >
        <div class="bg-dark-50 dark:bg-transparent rounded-lg">
          <div class="flex flex-wrap py-4 gap-8 items-center justify-center">
            <div>
              <VTooltip show="focus" component="demo-tooltip" class="flex-grow sm:max-w-60">
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Progress Circle Component"
                      link="/components/progresscircle"
                    >Use Progress Circle to display data in a circular view</DemoTooltip>
                  </div>
                </template>
                <VProgressCircle
                  :percent="percentA"
                  tabindex="0"
                  color="border-yellow-500 bg-yellow-400"
                  class="sa-highlight"
                  :width="1"
                />
              </VTooltip>
              <div class="text-center font-semibold pb-2 pt-1">Food</div>
            </div>

            <div>
              <VTooltip show="focus" component="demo-tooltip" class="flex-grow sm:max-w-60">
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Progress Circle Component"
                      link="/components/progresscircle"
                    >Use Progress Circle to display data in a circular view</DemoTooltip>
                  </div>
                </template>
                <VProgressCircle
                  :percent="percentD"
                  tabindex="0"
                  class="bg-purple-500"
                  color="border-purple-500 bg-purple-800"
                  :width="5"
                />
              </VTooltip>
              <div class="text-center font-semibold pb-2 pt-1">Water</div>
            </div>

            <div>
              <VTooltip show="focus" component="demo-tooltip" class="flex-grow sm:max-w-60">
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Progress Circle Component"
                      link="/components/progresscircle"
                    >Use Progress Circle to display data in a circular view</DemoTooltip>
                  </div>
                </template>
                <VProgressCircle
                  :percent="percentC"
                  tabindex="0"
                  class="bg-gray-700"
                  color="border-teal-600 bg-teal-400"
                  :width="6"
                >
                  <div
                    class="absolute sa-mc flex items-center justify-center rounded-full w-10 h-10 font-bold bg-gray-800 text-white"
                  >
                    <tabler-box class="text-2xl" />
                  </div>
                </VProgressCircle>
              </VTooltip>
              <div class="text-center font-semibold pb-2 pt-1">Supplies</div>
            </div>

            <div>
              <VTooltip show="focus" component="demo-tooltip" class="flex-grow sm:max-w-60">
                <template #tooltip>
                  <div class="w-70 space-y-3">
                    <DemoTooltip
                      title="Progress Circle Component"
                      link="/components/progresscircle"
                    >Use Progress Circle to display data in a circular view</DemoTooltip>
                  </div>
                </template>
                <VProgressCircle
                  :percent="percentB"
                  tabindex="0"
                  class="sa-highlight"
                  color="border-pink-500"
                  :width="12"
                >
                  <div class="absolute sa-mc sa-text text-xl font-bold">{{ percentB }}</div>
                </VProgressCircle>
              </VTooltip>
              <div class="text-center font-semibold pb-2 pt-1">Energy</div>
            </div>
          </div>
        </div>
        <template #handle="{ startDrag }">
          <div class="resizer-handle" @mousedown="startDrag">
            <VTooltip placement="left" component="demo-tooltip" show="focus">
              <template #tooltip>
                <DemoTooltip
                  title="Resizer Component"
                  link="/components/resizer"
                >Use the resizer to adjust a content's width, height or both.</DemoTooltip>
              </template>
              <div tabindex="0" class="w-2 h-10 bg-gray-300 dark:bg-teal-400 rounded-full"></div>
            </VTooltip>
          </div>
        </template>
      </VResizer>
      <DemoProfile class="demo-card col-span-full md:col-span-2" />
      <DemoTabs class="col-span-full md:col-span-2" />
      <!-- <DemoSettings class="demo-cardcol-span-full md:col-span-2" />
      <DemoProduct class="demo-card p-0 col-span-full md:col-span-2" />-->
    </div>

    <!-- Left Drawer -->
    <VOverlay v-model="showLeftDrawer" class="sa-overlay-absolute z-10" position="left">
      <div class="h-full max-w-75 flex flex-col bg-dark-700 overflow-y-auto filter drop-shadow-xl">
        <div class="grid p-4 gap-3 text-white bg-purple-900">
          <div class="text-lg font-bold">Drawer Component</div>
          <span class="text-sm">Use the drawer can be used for menus and secondary content.</span>
          <VButton
            size="sm"
            class="p-5 rounded bg-pink-500 text-xs uppercase font-bold text-white"
            @click="showToast = false"
          >
            <span>See component</span>
          </VButton>
        </div>
        <div class="flex gap-3 items-center px-4 max-h-14 min-h-14 font-bold text-white sa-dark">
          <img src="/demo/logo.png" width="24" height="24" />
          <div>Space Federation</div>
        </div>
        <VDrawer v-model="showLeftDrawer">
          <div class="space-y-2">
            <div
              v-for="item in menuItems"
              :key="item.label"
              class="text-white p-2 px-6 flex items-center justify-start w-full gap-3 hover:bg-dark-500 cursor-pointer"
              @click="showLeftDrawer = false"
            >
              <img :src="item.badge" width="32" height="32" />
              <div>{{ item.label }}</div>
            </div>
          </div>
        </VDrawer>
      </div>
    </VOverlay>

    <!-- FAB / Toast -->
    <div class="absolute sa-br m-2">
      <div class="flex justify-end m-2 demo-outline">
        <VButton
          icon
          size="xl"
          class="filter drop-shadow-lg bg-teal-600 text-white"
          @click="showDialog = true"
        >
          <tabler-message class="text-2xl" />
        </VButton>
      </div>

      <VCollapse id="toast" v-model="showToast" class="pointer-events-none" slide="up">
        <div class="flex justify-end p-2 pointer-events-auto">
          <div class="p-3 bg-purple-900 text-gray-200 w-85 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex justify-center items-center gap-4 px-2">
                <img src="/demo/badge_4.png" width="48" height="48" />
                <div class="h-18 border-r border-purple-400"></div>
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
                  class="rounded bg-pink-600 text-xs uppercase font-bold text-white"
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
    <VOverlay
      v-model="showDialog"
      disable-scroll-target="parent"
      class="sa-overlay-fixed sa-overlay-shade z-50"
    >
      <VDialog class="bg-purple-700 max-w-xl text-white shadow-lg" @close="showDialog = false">
        <!-- Title -->
        <template #title>
          <img src="/demo/badge_4.png" width="48" height="48" />
          <div class="ml-2 text-xl font-semibold">Dialog Component</div>
        </template>
        <!-- Content -->
        <div class="p-6 border-t sa-border">Use dialogs for forms, alerts and messaging.</div>
        <!-- Actions -->
        <template #actions>
          <VButton @click="showDialog = false">Cancel</VButton>
          <VButton
            class="bg-pink-600 text-sm font-bold uppercase"
            @click="navTo('/components/dialog')"
          >See component</VButton>
        </template>
      </VDialog>
    </VOverlay>
  </div>
</template>
