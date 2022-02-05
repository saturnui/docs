<script setup lang="ts">
const sidenavItems = [
  { title: 'Static', anchor: '#static' },
  { title: 'Mini', anchor: '#mini' },
  { title: 'Popout', anchor: '#popout' },
  { title: 'Right', anchor: '#right' },
  { title: 'Multiple', anchor: '#multiple' },
]

// const props = [
//   {
//     name: 'component',
//     type: 'string',
//     defaultVal: 'sa-component',
//     desc: 'Default class used by component',
//   },
//   {
//     name: 'modelValue',
//     type: 'number',
//     defaultVal: 0,
//     desc: 'Current index of the selected component item',
//   },
// ]

// const slots = [
//   {
//     name: 'default',
//     desc: 'Slot contains component items',
//     binds: [
//       {
//         name: 'nextSlide(step = 1)',
//         desc: 'Moves index to previous item',
//       },

//       {
//         name: 'prevSlide(step = 1)',
//         desc: 'Moves index to next item',
//       },
//     ],
//   },
// ]

// const events = [
//   {
//     name: 'update:modelValue',
//     desc: 'This event is bound to <code>v-model</code> and is not subscribed to directly.',
//   },
// ]

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
    <!-- Header -->
    <div class="doc-title">Drawer</div>
    <div class="doc-desc">
      The
      <span class="font-mono">VDrawer</span> component is what your users can utilize to
      navigate through the application. Drawers can reside on the left, right or both sides. The examples below
      demonstrate how to setup responsive behaviors.
    </div>

    <!-- <CssTitleBar id="css" title="Tailwind Component"></CssTitleBar>
    <ExampleCard source="/component/css">
      <ComponentCss />
    </ExampleCard>-->

    <VueTitleBar title="Vue Component"></VueTitleBar>

    <!-- Static -->
    <VueSection
      id="static"
      title="Static"
    >This example demonstrates navigating items via external control.</VueSection>
    <ExampleCard source="/drawers/static" content-class="flex flex-col p-0 gap-8">
      <!-- <ComponentBasic /> -->
      <div class="w-full h-80 sa-highlight">
        <VResizer class="h-full min-w-1/2 max-w-full">
          <iframe src="/components/drawers/static" frameborder="0" width="100%" height="100%"></iframe>
        </VResizer>
      </div>
    </ExampleCard>

    <!-- Mini -->
    <VueSection
      id="mini"
      title="Mini"
    >This example demonstrates minifying a drawer when the width is reduced</VueSection>
    <ExampleCard source="/drawers/mini" content-class="flex flex-col p-0 gap-8">
      <div class="w-full h-80 sa-highlight">
        <VResizer class="h-full min-w-1/2 max-w-full">
          <iframe src="/components/drawers/mini" frameborder="0" width="100%" height="100%"></iframe>
        </VResizer>
      </div>
    </ExampleCard>

    <!-- Popout -->
    <VueSection
      id="popout"
      title="Popout"
    >This example demonstrates hiding main navigation and showing drawer in a "popout" view.</VueSection>
    <ExampleCard source="/drawers/popout" content-class="flex flex-col p-0 gap-8">
      <div class="w-full h-80 sa-highlight">
        <VResizer class="h-full min-w-1/2 max-w-full">
          <iframe src="/components/drawers/popout" frameborder="0" width="100%" height="100%"></iframe>
        </VResizer>
      </div>
    </ExampleCard>

    <!-- Right Sidemenu -->
    <VueSection
      id="right"
      title="Right Sidenav"
    >This example demonstrates hiding main navigation and showing drawer in a "popout" view.</VueSection>
    <ExampleCard source="/drawers/right" content-class="flex flex-col p-0 gap-8">
      <div class="w-full h-80 sa-highlight">
        <VResizer class="h-full min-w-1/2 max-w-full">
          <iframe src="/components/drawers/right" frameborder="0" width="100%" height="100%"></iframe>
        </VResizer>
      </div>
    </ExampleCard>

    <!-- Multiple Drawers -->
    <VueSection
      id="multiple"
      title="Multiple Navigation"
    >This example demonstrates a drawer containing both a mini variant as well as a regular menu. Both scroll indendently of each other.</VueSection>
    <ExampleCard source="/drawers/multiple" content-class="flex flex-col p-0 gap-8">
      <div class="w-full h-80 sa-highlight">
        <VResizer class="h-full min-w-1/2 max-w-full">
          <iframe src="/components/drawers/multiple" frameborder="0" width="100%" height="100%"></iframe>
        </VResizer>
      </div>
    </ExampleCard>

    <!-- Properties -->
    <!-- <VueSection id="props" title="Properties"></VueSection>
    <ApiCard :api="props" class="w-full" />-->

    <!-- Slots -->
    <!-- <VueSection id="slots" title="Slots"></VueSection>
    <NameDescCard :api="slots" class="w-full" />-->

    <!-- Events -->
    <!-- <VueSection id="events" title="Events"></VueSection>
    <NameDescCard :api="events" class="w-full" />-->

    <!-- Default Theme -->
    <!-- <CssTitleBar id="theme" title="Default Theme">The default styles for this component.</CssTitleBar>
    <StyleCard source="Component.css" />-->

    <!-- Page Nav -->
    <PageNav />
  </div>
</template>
