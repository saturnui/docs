<script setup lang="ts">
import ToastExample from './examples/notification/toast.vue'
import NotificationExample from './examples/notification/notification.vue'

// const api = [
//   {
//     name: 'theme',
//     type: 'string',
//     defaultVal: 'vuwi',
//     desc: 'Used as the prefix for all Vuwi CSS classes',
//   },
//   {
//     name: 'show',
//     type: '"auto" | true',
//     defaultVal: 'auto',
//     desc: 'Show or hide toast',
//   },
// ]

const sidenavItems = [
  { title: 'Toast', anchor: '#toast' },
  // { title: 'Style Guide', anchor: '#styles' },
]

const showDrawer = ref(false)
const handleSwipeEnd = (data: { direction: string }) => {
  if (data.direction === 'RIGHT') showDrawer.value = false
}

const mounted = ref(false)
onMounted(async () => {
  mounted.value = true
})

// const log = (label: string, data?: any) => {
//   console.log(`${label}:`, JSON.stringify(data))
// }

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
    <VOverlay v-model="showDrawer" position="right" @swipe:end="handleSwipeEnd">
      <div class="h-full flex flex-col w-80 wi-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <button class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="example-notification wi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Notifications</div>
    <div class="doc-desc space-y-4">
      <p>
        Notifications allow you to display messages to users in various ways. Notifications
        can be built using the
        <a href="#" class="doc-link">VuwiCollapse</a>
        component.
      </p>
      <p>
        The examples below show a simple notification in the form of a toast to a more complex example using
        the
        <a href="#" class="doc-link">useMessenger</a> composable and a more complex display.
      </p>
    </div>

    <!-- Toast -->
    <div id="toast" class="doc-subtitle">Toast</div>
    <div class="doc-detail">An example of a simple toast.</div>
    <ExampleCard source="notification/toast.vue" content-class="">
      <ToastExample />
    </ExampleCard>

    <!-- Notification -->
    <div id="toast" class="doc-subtitle">Notification</div>
    <div class="doc-detail">
      An example of a notification that supports pagination and uses
      <a href="#" class="doc-link">useMessenger</a> and a
      custom component that supports pagination.
    </div>
    <ExampleCard source="notification/notification.vue" content-class="">
      <NotificationExample />
    </ExampleCard>

    <!-- API -->
    <!-- <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />-->

    <!-- Style Guide -->
    <!-- <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Toast/VuwiToast.css" />-->
  </div>
</template>

<style>
.example-notification .example-preview {
  padding: 0;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
