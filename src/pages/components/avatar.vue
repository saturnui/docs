<script setup lang="ts">
import AvatarPhoto from './avatar/photo.vue'
import AvatarName from './avatar/name.vue'
import AvatarCss from './avatar/css.vue'
import VueTitleBar from '~/components/ExampleTitleBar/VueTitleBar.vue'

const props = [
  {
    name: 'className',
    type: 'string',
    defaultVal: 'wi-avatar',
    desc: 'Default class used by component',
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
  { title: 'CSS Only', anchor: '#css' },
  { title: 'Name', anchor: '#name' },
  { title: 'Photo', anchor: '#photo' },
  { title: 'Properties', anchor: '#props' },
  { title: 'Default Theme', anchor: '#theme' },
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
    <button class="xl:hidden wi-btn wi-btn-icon doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </button>
  </teleport>

  <div class="wi-content doc-content">
    <!-- Title -->
    <div class="doc-title">Avatar</div>
    <div class="doc-desc">
      The
      <code>VAvatar</code> component is typically used to display user
      profile pictures. The default behavior is to display a picture
      or first initial.
    </div>

    <!-- CSS Only -->
    <CssTitleBar id="css" title="CSS Only">Tailwind Component - No JavaScript.</CssTitleBar>
    <ExampleCard
      source="/avatar/css"
      content-class="p-4 flex flex-wrap gap-4 items-center justify-center"
    >
      <AvatarCss />
    </ExampleCard>

    <!-- Name -->
    <VueTitleBar id="name" title="Name">
      Example show
      <code>name</code> usage.
    </VueTitleBar>

    <ExampleCard
      source="/avatar/name"
      content-class="p-4 flex flex-wrap gap-4 items-center justify-center"
    >
      <AvatarName />
    </ExampleCard>

    <!-- Photo -->
    <VueTitleBar id="photo" title="Photo">
      Example show
      <code>photo</code> usage.
    </VueTitleBar>
    <ExampleCard
      source="/avatar/photo"
      content-class="p-4 flex flex-wrap gap-4 items-center justify-center"
    >
      <AvatarPhoto />
    </ExampleCard>

    <!-- API -->
    <VueTitleBar id="css" title="Properties" />
    <ApiCard :api="props" class="w-full" />

    <!-- Style Guide -->
    <CssTitleBar id="theme" title="Default Theme">
      The default styles for this component.
    </CssTitleBar>
    <StyleCard source="Avatar.css" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
