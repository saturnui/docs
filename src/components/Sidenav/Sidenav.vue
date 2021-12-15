<script setup lang="ts">

type SidenavLink = {
  title: string
  to?: string
  icon?: string
}

type SidenavItem = {
  links?: SidenavLink[]
  open?: boolean
  title: string
  to?: string
  anchor?: string
}

const props = defineProps({
  data: {
    default: (): SidenavItem[] => [],
  },
})

const emit = defineEmits(['click:link'])

const scrollToTargetAdjusted = (selector: string, offset = 52) => {
  const element = document.querySelector(selector)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

const navTo = (item: SidenavItem) => {
  if (item.anchor)
    scrollToTargetAdjusted(item.anchor)
  emit('click:link', item)
}
</script>

<template>
  <div class="sidenav">
    <div class="sidenav-title vuwi-text">
      <span>On this page</span>
    </div>

    <div v-for="(item, i) in props.data" :key="i">
      <div class="sidenav-label" :class="{ 'sidenav-link': item.anchor }" @click="navTo(item)">
        <span>{{ item.title }}</span>
      </div>

      <div class="flex flex-col">
        <div
          v-for="(link, n) in item.links"
          :key="n"
          class="sidenav-label sidenav-link pl-2"
          @click="navTo(link)"
        >
          <tabler-chevron-right />
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>
</template>
