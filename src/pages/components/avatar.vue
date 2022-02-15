<script setup lang="ts">
import AvatarPhoto from './avatar/photo.vue'
import AvatarName from './avatar/name.vue'
import AvatarCss from './avatar/css.vue'
import VueSection from '~/components/ExampleTitleBar/VueSection.vue'

const props = [
  {
    name: 'component',
    type: 'string',
    defaultVal: 'sa-avatar',
    desc: 'Default class used by component',
  },
  {
    name: 'image',
    type: 'string',
    defaultVal: '',
    desc: 'Url to image to be used for avatar',
  },
  {
    name: 'name',
    type: 'string',
    defaultVal: '',
    desc: 'Name to be used to display an initial if image is not provided.',
  },
]

const sidenavItems = [
  { title: 'Tailwind Component', anchor: '#css' },
  { title: 'Name', anchor: '#name' },
  { title: 'Image', anchor: '#image' },
  { title: 'Properties', anchor: '#props' },
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
      <div class="h-full flex flex-col w-80 sa-light-dark overflow-y-auto">
        <Sidenav :data="sidenavItems" @click:link="showDrawer = false" />
      </div>
    </VOverlay>
  </teleport>

  <teleport v-if="mounted" to="#appbar-actions">
    <VButton icon class="xl:hidden doc-sidenav-btn" @click="showDrawer = true">
      <tabler-arrow-bar-to-left />
    </VButton>
  </teleport>

  <div class="sa-content doc-content">
    <!-- Title -->
    <div class="doc-title">Avatar</div>
    <div class="doc-desc">
      The
      <code>VAvatar</code> component is typically used to display user
      profile pictures. The default behavior is to display a picture
      or first initial.
    </div>

    <!-- Tailwind Component -->
    <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard
      source="/avatar/css"
      content-class="p-4 flex flex-col gap-4 items-center justify-center"
      theme="Avatar.css"
    >
      <AvatarCss />
    </ExampleCard>

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Name -->
    <VueSection id="name" title="Name">
      Example show
      <code>name</code> usage.
    </VueSection>

    <ExampleCard
      source="/avatar/name"
      content-class="p-4 flex flex-wrap gap-4 items-center justify-center"
    >
      <AvatarName />
    </ExampleCard>

    <!-- Photo -->
    <VueSection id="image" title="Photo">
      Example show
      <code>image</code> usage.
    </VueSection>
    <ExampleCard
      source="/avatar/photo"
      content-class="p-4 flex flex-wrap gap-4 items-center justify-center"
    >
      <AvatarPhoto />
    </ExampleCard>

    <!-- API -->
    <VueSection id="css" title="Properties" />
    <ApiCard :api="props" class="w-full" />

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
