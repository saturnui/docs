<script setup lang="ts">
const props = defineProps({
  theme: String,
})

defineEmits(['drawer:open', 'toast:open'])

const showProfileMenu = ref(false)

const profileUrl = computed(() => {
  if (props.theme === 'blueprint') return '/demo/bean_profile_white.png'
  return '/demo/profile.png'
})
</script>

<template>
  <div class="sa-card flex items-center p-2 px-4 filter z-1">
    <div class="w-full flex items-center gap-4">
      <VButton icon class="demo-outline" @click="$emit('drawer:open')">
        <tabler-menu2 />
      </VButton>

      <div class="hidden sm:flex gap-3 font-bold">
        <div>Space Federation</div>
      </div>
      <div class="flex flex-grow items-center gap-2">
        <div class="hidden sm:block flex-grow"></div>
        <VTooltip show="focus" target="input" component="sa-tooltip" class="flex-grow sm:max-w-60">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="TextInput Component"
                link="/components/button"
              >Use TextInput for single line and multiline entries.</DemoTooltip>
            </div>
          </template>
          <VTextInput
            component="sa-textinput"
            placeholder="Search"
            class="!rounded-full !pl-6 sa-highlight-strong"
          >
            <template #prepend>
              <tabler-search class="mr-2" />
            </template>
          </VTextInput>
        </VTooltip>

        <!-- <VTooltip class="delay-100 duration-2000"> -->
        <VButton icon class="demo-outline" @click="$emit('toast:open')">
          <tabler-bell />
        </VButton>

        <VDropdown v-model="showProfileMenu" class="demo-outline">
          <template #activator="{ toggle }">
            <div class="profile-border w-8 h-8 p-0.5 sa-mask-8 cursor-pointer" @click="toggle">
              <VAvatar
                tabindex="0"
                name="Saturn"
                :image="profileUrl"
                class="sa-mask-8 text-5xl !bg-blue-600"
              />
              <!-- <img src="/demo/profile.png" class="sa-mask-5" /> -->
            </div>
          </template>
          <div ref="menu" class="origin-top-right absolute right-0 rounded-md mt-2" role="menu">
            <DemoTooltip
              title="Dropdown Component"
              link="/components/dropdown"
              class="sa-card sa-primary p-4"
            >Use dropdown component for menus and selectors.</DemoTooltip>
          </div>
        </VDropdown>
      </div>
    </div>
  </div>
</template>
