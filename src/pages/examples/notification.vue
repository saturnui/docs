<script setup lang="ts">
import ToastBasic from './examples/toast/basic.vue'
import ToastPagination from './examples/toast/pagination.vue'
import { useNotify } from '~/modules/vuwi/composables/notification'

const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes',
  },
  // {
  //   name: 'placement',
  //   type: 'string',
  //   defaultVal: 'bottom',
  //   desc: 'Options are "top", "left", "right" and "bottom"',
  // },
  // {
  //   name: 'delayShow',
  //   type: 'string',
  //   defaultVal: 300,
  //   desc: 'Time in milliseconds before tooltip shows',
  // },
  // {
  //   name: 'delayHide',
  //   type: 'string',
  //   defaultVal: 2000,
  //   desc: 'Time in milliseconds before tooltip hides',
  // },
  // {
  //   name: 'show',
  //   type: '"auto" | true',
  //   defaultVal: 'auto',
  //   desc: 'Force show tooltip',
  // },
]

const sidenavItems = [
  { title: 'Basic Usage', anchor: '#basic' },
  { title: 'Pagination', anchor: '#pagination' },
  { title: 'API', anchor: '#api' },
  { title: 'Style Guide', anchor: '#styles' },
]

const showDrawer = ref(false)
const handleSwipeEnd = (data: { direction: string }) => {
  if (data.direction === 'RIGHT') showDrawer.value = false
}

const mounted = ref(false)
onMounted(async () => {
  mounted.value = true
})

const log = (label: string, data?: any) => {
  console.log(`${label}:`, JSON.stringify(data))
}

// const m2 = useNotify()
// m2.watch((msg) => {
//   log('watch', msg)
// })
// m2.push({ text: 'a' })
// m2.push({ text: 'b' })
// m2.push({ text: 'c' })
// m2.push({ text: 'd' })
// m2.push({ text: 'e' })
// log('list', JSON.stringify(m2.list()))
// log('len', m2.len())
// log('hasPrev', m2.hasPrev())
// log('next', m2.next())
// log('get', m2.get())
// log('next', m2.next())
// log('hasNext', m2.hasNext())
// const msgC = m2.next()
// log('next', msgC)
// log('snooze')
// m2.snooze(msgC, { delay: 1000 })
// log('list', JSON.stringify(m2.list()))
// log('get', m2.get())
// log('get', m2.get())
</script>

<template>
  <teleport v-if="mounted" to="#sidenav">
    <Sidenav :data="sidenavItems" />
  </teleport>

  <teleport v-if="mounted" to="#sidemenu">
    <VuwiOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 vuwi-card overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VuwiOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden vuwi-btn vuwi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="vuwi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Toast</div>
    <div class="doc-desc">Provides alert and notifications.</div>

    <!-- Basic -->
    <div id="basic" class="doc-subtitle">Basic Usage</div>
    <ExampleCard source="toast/basic.vue">
      <ToastBasic />
    </ExampleCard>

    <div id="pagination" class="doc-subtitle">Pagination</div>
    <ExampleCard source="toast/pagination.vue">
      <ToastPagination />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Toast/VuwiToast.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
