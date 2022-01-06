<script setup lang="ts">
import ToastCollapse from './notification/collapse.vue'
import NotificationExample from './notification/notification.vue'

const sidenavItems = [
  { title: 'Toast', anchor: '#toast' },
  { title: 'Custom', anchor: '#custom' },
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
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="example-notification wi-content doc-content">
    <!-- Header -->
    <div class="doc-title">Toast</div>
    <div class="doc-desc space-y-4">
      <p>
        Toasts allow users to receive feedback in a realtime without obstructing the application.
        There are a few ways to handle toasts in a Vuwi application with existing components.
      </p>
    </div>

    <!-- Toast -->
    <VueTitleBar id="toast" title="Using Collapse">
      This example shows how to create a toast using the <code>VCollapse</code> component. This allows
      items such as a FAB button to remain in view when a toast is displayed.
    </VueTitleBar>
    <ExampleCard source="notification/toast" content-class="">
      <ToastCollapse />
    </ExampleCard>

    <!-- Notification -->
    <VueTitleBar id="custom" title="Custom">
      An example of a notification that supports pagination and uses
      <a
        href="#"
        class="doc-link"
      >useMessenger</a> and a
      custom component that supports pagination.
    </VueTitleBar>
    <ExampleCard source="notification/notification" content-class="">
      <NotificationExample />
    </ExampleCard>

    <!-- API -->
    <!-- <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />-->

    <!-- Default Theme -->
    <CssTitleBar id="theme" title="Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Component.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>

<style>
.example-notification .example-preview {
  padding: 0;
}
</style>
