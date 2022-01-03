<script setup lang="ts">
import AvatarImage from './examples/avatar/image.vue'
import AvatarName from './examples/avatar/name.vue'

const api = [
  {
    name: 'theme',
    type: 'string',
    defaultVal: 'vuwi',
    desc: 'Used as the prefix for all Vuwi CSS classes',
  },
  {
    name: 'photo',
    type: 'string',
    defaultVal: '',
    desc: 'Url to image to be used for avatar',
  },
  {
    name: 'name',
    type: 'string',
    defaultVal: '',
    desc: 'Name to be used to display an initial if photo is not provided.',
  },
]

const sidenavItems = [
  { title: 'Name', anchor: '#name' },
  { title: 'Photo', anchor: '#photo' },
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
    <button
      class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn"
      @click="showDrawer = true"
    >
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Title -->
    <div class="doc-title">Avatar</div>

    <!-- Name -->
    <div id="name" class="doc-subtitle">Name</div>
    <ExampleCard source="/avatar/name">
      <AvatarName />
    </ExampleCard>

    <!-- Photo -->
    <div id="photo" class="doc-subtitle">Photo</div>
    <ExampleCard source="/avatar/image">
      <AvatarImage />
    </ExampleCard>

    <!-- API -->
    <div id="api" class="doc-subtitle">API</div>
    <ApiCard :api="api" class="w-full" />

    <!-- Style Guide -->
    <div id="styles" class="doc-subtitle">Style Guide</div>
    <StyleCard source="Avatar.css" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
