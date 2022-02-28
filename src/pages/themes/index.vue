<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const text = ref('')
const currentPage = ref(0)
const slideIndex = ref(0)
const slides = [
  'bg-blue-600 h-full',
  'bg-blue-600 h-full',
  'bg-blue-600 h-full',
]
const code = ref('')
const show = ref(false)

// Drawer
const showDrawer = ref(false)

// Dropzone
const pendingFiles = ref<File[]>([])
const handleChange = (files: File[]) => {
  const arr = [] as File[]
  pendingFiles.value = arr.concat(pendingFiles.value, files)
}
const removeFile = (file: File) => {
  const index = pendingFiles.value.indexOf(file)
  pendingFiles.value.splice(index, 1)
}

const clearFiles = () => {
  pendingFiles.value = []
}

// File Selector
const file = ref<File>()
const url = ref('')

const handleFileChange = async (val?: FileList) => {
  if (val) file.value = val[0]
}

const handleImageChange = (val: string) => {
  url.value = val
}

// Form Section
const name = ref('')
const email = ref('')

// Progress Bar
const percent = 65

// Select
const selectedItem = ref('dark')

const themeStore = useThemeStore()

const items = [
  { label: 'Dark', value: 'dark' },
  { label: 'Light', value: 'light' },
  { label: 'Blueprint', value: 'blueprint' },
  { label: 'Cupcake', value: 'cupcake' },
  { label: 'Bumblebee', value: 'bumblebee' },
  { label: 'Emerald', value: 'emerald' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Synthwave', value: 'synthwave' },
  { label: 'Retro', value: 'retro' },
  { label: 'Cyberpunk', value: 'cyberpunk' },
  { label: 'Valentine', value: 'valentine' },
  { label: 'Halloween', value: 'halloween' },
  { label: 'Garden', value: 'garden' },
  { label: 'Forest', value: 'forest' },
  { label: 'Aqua', value: 'aqua' },
  { label: 'Lofi', value: 'lofi' },
  { label: 'Pastel', value: 'pastel' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Wireframe', value: 'wireframe' },
  { label: 'Black', value: 'black' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Darcula', value: 'darcula' },
  { label: 'CMYK', value: 'cmyk' },
]

// Slider
const val1 = ref(-50)
const val2 = ref(50)
const range = ref([val1.value, val2.value])

watch(val1, (v: number) => range.value = [v, val2.value])
watch(val2, (v: number) => range.value = [val1.value, v])
watch(range, (v: number[]) => {
  val1.value = v[0]
  val2.value = v[1]
})

// Switch
const switchVal = ref(false)

// TextInput
const showPassword = ref(false)
const fieldType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})

// Toast
const showClose = ref(true)
const showToast = ref(false)
const enableAbsolute = ref(false)
const showRegion = ref(false)
const root = ref()
const themeColorChanged = (themeColor: any) => {
  root.value.style.setProperty(`--color-${themeColor.color}`, themeColor.value)
}
onMounted(() => {
  watch(selectedItem, (val: any) => {
    for (const [k, v] of Object.entries(themeStore.themes[val]))
      root.value.style.setProperty(`--color-${k}`, v)
  }, { immediate: true })
})
</script>

<template>
  <div ref="root" class="dark">
    <div class="grid gap-8 bg-base-300 text-base-content p-8">
      <div class="col-span-full text-6xl font-bold">Theme Explorer</div>
      <div class="text-2xl">Demonstrates how you could use this theme with components.</div>
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-10xl">
        <ThemeCard title="Colors" class="col-span-full">
          <div class="p-4 px-8">
            <VSelect
              v-model="selectedItem"
              name="mood"
              :options="items"
              class="min-w-60 max-w-24 bg-base-200 shape-rounded"
            />
          </div>
          <div class="flex h-full">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 flex-grow justify-center gap-4 p-8"
            >
              <!-- Primary -->
              <div class="col-span-1 w-full">
                <div class="uppercase text-xs font-bold pb-2 pl-2">Primary</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="primary" @changed="themeColorChanged" />
                  <ThemeColor color="primary-focus" @changed="themeColorChanged" />
                  <ThemeColor color="primary-content" @changed="themeColorChanged" />
                </div>
              </div>

              <!-- Secondary -->
              <div class="col-span-1">
                <div class="uppercase text-xs font-bold pb-2 pl-2">Secondary</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="secondary" @changed="themeColorChanged" />
                  <ThemeColor color="secondary-focus" @changed="themeColorChanged" />
                  <ThemeColor color="secondary-content" @changed="themeColorChanged" />
                </div>
              </div>

              <!-- Accent -->
              <div class="col-span-1">
                <div class="uppercase text-xs font-bold pb-2 pl-2">Accent</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="accent" @changed="themeColorChanged" />
                  <ThemeColor color="accent-focus" @changed="themeColorChanged" />
                  <ThemeColor color="accent-content" @changed="themeColorChanged" />
                </div>
              </div>

              <!-- Neutral -->
              <div class="col-span-1">
                <div class="uppercase text-xs font-bold pb-2 pl-2">Neutral</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="neutral" @changed="themeColorChanged" />
                  <ThemeColor color="neutral-focus" @changed="themeColorChanged" />
                  <ThemeColor color="neutral-content" @changed="themeColorChanged" />
                </div>
              </div>

              <!-- Base -->
              <div class="col-span-1">
                <div class="uppercase text-xs font-bold pb-2 pl-2">Base</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="base-100" @changed="themeColorChanged" />
                  <ThemeColor color="base-200" @changed="themeColorChanged" />
                  <ThemeColor color="base-300" @changed="themeColorChanged" />
                  <ThemeColor color="base-content" @changed="themeColorChanged" />
                </div>
              </div>

              <!-- State -->
              <div class="col-span-1">
                <div class="uppercase text-xs font-bold pb-2 pl-2">State</div>
                <div class="rounded-xl overflow-hidden filter drop-shadow-lg">
                  <ThemeColor color="info" @changed="themeColorChanged" />
                  <ThemeColor color="success" @changed="themeColorChanged" />
                  <ThemeColor color="warning" @changed="themeColorChanged" />
                  <ThemeColor color="error" @changed="themeColorChanged" />
                </div>
              </div>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Switch">
          <div class="flex flex-wrap items-center justify-center gap-6 p-8">
            <div>
              <VSwitch
                class="shape-circle"
                dot="bg-primary"
                false-class="border-2 border-primary"
                true-class="border-2 border-primary"
              >
                <div class="px-2 font-bold">On</div>
              </VSwitch>

              <VSwitch
                class="shape-circle"
                dot="bg-primary-content"
                false-class="bg-primary"
                true-class="bg-primary"
              >
                <div class="px-2 font-bold">On</div>
              </VSwitch>

              <VSwitch
                class="shape-circle"
                dot="bg-primary-content"
                false-class="bg-primary"
                true-class="bg-primary"
                disabled
              >
                <div class="px-2 font-bold">On</div>
              </VSwitch>
            </div>

            <div>
              <VSwitch
                dot="bg-primary"
                false-class="border-2 border-secondary"
                true-class="border-2 border-secondary"
              >
                <div class="px-2 font-bold">On</div>
              </VSwitch>

              <VSwitch dot="bg-secondary" false-class="bg-primary" true-class="bg-primary">
                <div class="px-2 font-bold">On</div>
              </VSwitch>

              <VSwitch dot="bg-secondary" false-class="bg-primary" true-class="bg-primary" disabled>
                <div class="px-2 font-bold">On</div>
              </VSwitch>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Alerts">
          <div class="space-y-6 p-8">
            <VAlert class="bg-error text-sm font-medium p-2" role="alert">
              <tabler-alert-octagon class="w-6 h-6" />
              <div class="flex-grow font-bold">This is an alert with a error background</div>
              <VButton icon>
                <tabler-x class="text-xl" />
              </VButton>
            </VAlert>

            <VAlert class="bg-warning text-sm font-medium p-2" role="alert">
              <tabler-alert-triangle class="w-6 h-6" />
              <div class="flex-grow font-bold">This is an alert with a warning background</div>
              <VButton icon>
                <tabler-x class="text-xl" />
              </VButton>
            </VAlert>

            <VAlert class="bg-info text-sm font-medium p-2" role="alert">
              <tabler-info-circle class="w-6 h-6" />
              <div class="flex-grow font-bold">This is an alert with a info background</div>
              <VButton icon>
                <tabler-x class="text-xl" />
              </VButton>
            </VAlert>

            <VAlert class="bg-success text-sm font-medium p-2" role="alert">
              <tabler-circle-check class="w-6 h-6" />
              <div class="flex-grow fong-bold">This is an alert with a success background</div>
              <VButton icon>
                <tabler-x class="text-xl" />
              </VButton>
            </VAlert>
          </div>
        </ThemeCard>

        <ThemeCard title="Avatars">
          <div class="space-y-6 p-8">
            <div class="row justify-center gap-8">
              <VAvatar name="Bean" size="sm" class="bg-primary" />
              <VAvatar name="Bean" size="md" class="rounded-full bg-secondary" />
              <VAvatar name="Bean" size="lg" class="bg-accent text-accent-content shape-rounded" />
              <VAvatar
                name="Bean"
                size="xl"
                class="rounded-full bg-neutral border-4 border-secondary overflow-hidden"
              />
            </div>
            <div class="row justify-center gap-8">
              <VAvatar src="/demo/profile.png" size="sm" class="bg-primary" />
              <VAvatar src="/demo/profile.png" size="md" class="rounded-full bg-secondary" />
              <VAvatar src="/demo/profile.png" size="lg" class="bg-accent shape-rounded" />
              <VAvatar
                src="/demo/profile.png"
                size="xl"
                class="rounded-full bg-neutral border-4 border-secondary overflow-hidden"
              />
            </div>
            <div class="row justify-center gap-8">
              <VAvatar name="Bean" size="sm" class="bg-primary" status="warning" />
              <VAvatar name="Bean" size="md" class="shape-circle bg-secondary" status="info" />
              <VAvatar
                src="/demo/profile.png"
                size="lg"
                class="bg-accent shape-rounded"
                status="neutral"
              />
              <VAvatar
                src="/demo/profile.png"
                size="xl"
                status="error"
                class="border-4 border-secondary shape-circle bg-neutral"
              />
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Buttons">
          <div class="space-y-6 p-8">
            <div class="row flex-wrap justify-center gap-4">
              <VButton>Plain</VButton>
              <VButton class="btn-outline border-primary">Border</VButton>
              <VButton class="btn-outline border-secondary text-secondary">Color</VButton>
              <VButton class="bg-primary">Fill</VButton>
            </div>
            <div class="row flex-wrap justify-center gap-4">
              <VButton class="bg-disabled text-neutral" disabled>Disabled</VButton>
              <VButton class="bg-secondary scale-none">No Scale</VButton>
            </div>
            <div class="row flex-wrap justify-center gap-4">
              <VButton size="xs" class="bg-error">Extra Small</VButton>
              <VButton size="sm" class="bg-success">Small</VButton>
              <VButton size="md" class="bg-info">Normal</VButton>
              <VButton size="lg" class="bg-warning">Large</VButton>
              <VButton size="xl" class="bg-accent">X-Large</VButton>
            </div>
            <div class="row flex-wrap justify-center gap-4">
              <VButton size="xs" icon class="bg-primary">
                <tabler-box />
              </VButton>
              <VButton size="sm" icon class="bg-primary">
                <tabler-box />
              </VButton>
              <VButton size="md" icon class="bg-primary">
                <tabler-box />
              </VButton>
              <VButton size="lg" icon class="bg-primary">
                <tabler-box />
              </VButton>
              <VButton size="xl" icon class="bg-primary">
                <tabler-box />
              </VButton>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Carousel">
          <VCarousel
            v-model="slideIndex"
            class="w-full h-full shape-rounded overflow-hidden"
            slider-class="scroll-smooth"
          >
            <!-- Carousel Items -->
            <VCarouselItem
              v-for="(slide, index) in slides"
              :key="index"
              class="flex items-center justify-center w-full h-96 text-4xl"
              :class="slide"
            >
              <div>Slide {{ index + 1 }}</div>
            </VCarouselItem>
            <template #overlay="{ prevSlide, nextSlide }">
              <div class="absolute top-0 w-full h-full">
                <!-- Navigation Prev -->
                <VButton icon class="absolute pos-ml ml-4 bg-base-100" @click="prevSlide(1)">
                  <VChevronLeftIcon />
                </VButton>

                <!-- Navigation Next -->
                <VButton icon class="absolute pos-mr mr-4 bg-base-100" @click="nextSlide(1)">
                  <VChevronRightIcon />
                </VButton>

                <!-- Navigation Pagination -->
                <div class="absolute pos-bc mb-3 flex gap-2">
                  <button
                    v-for="(slide, index) in slides"
                    :key="slide"
                    class="w-5 h-2 shape-circle bg-neutral"
                    :class="{ 'bg-accent': slideIndex === index }"
                    @click="slideIndex = index"
                  ></button>
                </div>
              </div>
            </template>
          </VCarousel>
        </ThemeCard>

        <ThemeCard title="Code Input">
          <div class="absolute pos-mc grid gap-5 p-8">
            <div class="text-center text-2xl">Type six digit code</div>
            <div class="row justify-center">
              <VCodeInput v-model="code" pattern="XXX-XXX" input-class="decor-border border-neutral" />
            </div>
            <div class="font-mono text-3xl font-bold h-8 text-center">{{ code }}</div>
          </div>
        </ThemeCard>

        <ThemeCard title="Collapse">
          <div class="p-4">
            <VCollapse
              v-for="i in 3"
              :key="i"
              group="myCustomGroup"
              class="w-full -mb-1 last:mb-0 bg-base-200"
            >
              <template #header="{ open: isOpen }">
                <div class="relative p-3 flex items-center gap-4 w-full border-b-2 border-base-100">
                  <span class="font-bold flex-grow">Title here</span>
                  <tabler-chevron-right
                    class="transition duration-150 transform"
                    :class="{ 'rotate-90': isOpen }"
                  />
                </div>
              </template>
              <div class="grid gap-5 border-2 border-base-200 p-4 bg-base-100 -mt-1">
                <VSkeletonListItem />
                <VSkeletonListItem />
              </div>
            </VCollapse>
          </div>
        </ThemeCard>

        <ThemeCard title="Dialog / Overlay">
          <div class="absolute pos-tl w-full h-full overflow-hidden">
            <div class="absolute pos-mc z-0">
              <VButton class="btn-outline border-accent" @click="show = true">Open Dialog</VButton>
            </div>
            <VOverlay
              v-model="show"
              modal
              disable-scroll-target="parent"
              class="h-full overlay-absolute overlay-darken"
            >
              <VDialog
                class="m-8 max-w-xl filter shadow-lg rounded w-full bg-base-100 shape-rounded"
                @close="show = false"
              >
                <!-- Title -->
                <template #title>
                  <div class="font-bold">Dialog example</div>
                </template>
                <!-- Content -->
                <div class="p-4 border-t border-base-200">This is an example of a modal dialog.</div>
                <!-- Actions -->
                <template #actions>
                  <VButton @click="show = false">Cancel</VButton>
                  <VButton class="bg-primary" @click="show = false">OK</VButton>
                </template>
              </VDialog>
            </VOverlay>
          </div>
        </ThemeCard>

        <ThemeCard title="Drawer">
          <div class="relative flex w-full h-96">
            <VDrawer v-model="showDrawer" class="min-w-16 max-w-16 sm:min-w-75 sm:max-w-75">
              <div class="flex h-full overflow-hidden px-2">
                <div
                  class="flex flex-col items-center p-2 gap-2 min-w-16 max-w-16 w-full overflow-y-auto"
                >
                  <VTooltip v-for="i in 8" :key="i" placement="right" class="delay-0">
                    <template #tooltip>Menu Tooltip #{{ i }}</template>
                    <VButton class="p-4 bg-neutral">
                      <tabler-box class="h-6" />
                    </VButton>
                  </VTooltip>
                </div>
                <div class="hidden sm:block p-2 space-y-2 overflow-y-auto">
                  <VButton
                    v-for="i in 8"
                    :key="i"
                    class="p-4 justify-start w-full bg-neutral gap-3"
                  >Button</VButton>
                </div>
              </div>
            </VDrawer>
            <div class="w-full p-4 overflow-y-auto">
              <VSkeletonListItem v-for="i in 8" :key="i" />
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Drop Zone">
          <div class="h-96">
            <VDropzone
              class="absolute pos-tl w-full h-full flex flex-col overflow-hidden"
              @change="handleChange"
            >
              <template #default="{ active }">
                <div
                  v-if="pendingFiles.length"
                  class="flex flex-wrap gap-4 h-full overflow-y-auto w-full p-4"
                  :class="{ 'bg-green-400': active }"
                >
                  <div
                    v-for="(file, index) in pendingFiles"
                    :key="index"
                    class="relative flex flex-col items-center w-50 h-48 shape-rounded p-2"
                  >
                    <div
                      class="h-38 w-45 flex items-center justify-center overflow-hidden shape-rounded bg-base-200"
                    >
                      <VImage
                        :src="file"
                        width="100"
                        height="100"
                        class="h-full w-60 object-contain"
                      />
                    </div>
                    <div class="row-center px-3 pt-2">
                      <div class="truncate text-sm font-bold max-w-40">{{ file.name }}</div>
                    </div>
                    <VButton
                      icon
                      class="absolute -top-2 -right-2 bg-base-300"
                      @click="removeFile(file)"
                    >
                      <VCloseIcon class="text-xl" />
                    </VButton>
                  </div>
                </div>
                <div v-else class="flex flex-col items-center justify-center h-full w-full p-4">
                  <div
                    class="bg-base-200 shape-circle px-8 py-3 font-light pointer-events-none select-none"
                  >Drop Files Here...</div>
                </div>
                <!-- Total Files -->
                <div class="flex items-center gap-2 px-3 py-2 font-bold bg-base-200">
                  <span>Total files:</span>
                  <span>{{ pendingFiles.length || 0 }}</span>
                  <div class="flex-grow"></div>
                  <VButton class="bg-primary" @click="clearFiles">Clear</VButton>
                </div>
              </template>
            </VDropzone>
          </div>
        </ThemeCard>

        <ThemeCard title="File Selector / Image">
          <div class="p-8">
            <VFileSelector
              :accepts="['jpg', 'jpeg', 'png', 'gif', 'svg']"
              @change="handleFileChange"
            >
              <VButton size="lg" class="btn-outline border-accent w-full">Select Image File</VButton>
            </VFileSelector>
          </div>

          <div v-if="file" class="flex justify-center">
            <VImage
              :src="file"
              width="200"
              height="200"
              class="bg-base-300"
              @change="handleImageChange"
            />
          </div>

          <div v-if="url" class="p-4">
            <div class="font-mono text-sm max-w-lg overflow-auto bg-base-300 p-2">{{ url }}</div>
          </div>
        </ThemeCard>

        <ThemeCard title="Form Section">
          <div class="p-8">
            <VFormSection title="Profile" desc="Public profile available for all to see.">
              <div class="space-y-4">
                <VTextInput v-model="name" label="Name" required class="border-2" />
                <VTextInput v-model="email" label="Email" class="border-2" />
              </div>
            </VFormSection>
          </div>
        </ThemeCard>

        <ThemeCard title="Line">
          <div class="flex items-center justify-center h-full">
            <VLine class="w-full">
              <div class="px-2">Hello, world!</div>
            </VLine>
          </div>
        </ThemeCard>

        <ThemeCard title="Masks">
          <div class="flex flex-wrap justify-center gap-4 p-8 font-extrabold">
            <div class="flex justify-center items-center w-24 h-24 mask-10 bg-primary">
              <div class="flex items-center justify-center w-20 h-20 mask-10 bg-base-100">
                <div class="text-xl">10</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-9 bg-secondary">
              <div class="flex items-center justify-center w-20 h-20 mask-9 bg-base-100">
                <div class="text-xl">9</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-8 bg-accent">
              <div class="flex items-center justify-center w-20 h-20 mask-8 bg-base-100">
                <div class="text-xl">8</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-7 bg-neutral">
              <div class="flex items-center justify-center w-20 h-20 mask-7 bg-base-100">
                <div class="text-xl">7</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-6 bg-info">
              <div class="flex items-center justify-center w-20 h-20 mask-6 bg-base-100">
                <div class="text-xl">6</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-5 bg-success">
              <div class="flex items-center justify-center w-20 h-20 mask-5 bg-base-100">
                <div class="text-xl">5</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-4 bg-warning">
              <div class="flex items-center justify-center w-20 h-20 mask-4 bg-base-100">
                <div class="text-xl">4</div>
              </div>
            </div>

            <div class="flex justify-center items-center w-24 h-24 mask-3 bg-error pt-1">
              <div class="flex items-center justify-center w-18 h-18 mask-3 bg-base-100">
                <div class="text-xl mt-3">3</div>
              </div>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Mock Window">
          <div class="flex flex-wrap items-center justify-center h-full gap-8 p-8">
            <div
              class="mock-window bg-base-200 bg-opacity-10d !border-3 border-secondary shape-rounded w-full"
            >
              <div class="p-4 border-t-2 border-secondary">
                <span>Hello, world!</span>
              </div>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Pagination">
          <div class="flex items-center justify-center h-full">
            <VPagination v-model="currentPage" :length="12" :total-visible="5" />
          </div>
        </ThemeCard>

        <ThemeCard title="Progress Bar">
          <div class="flex items-center justify-center h-full p-8">
            <VProgressBar
              :percent="percent"
              class="w-full shape-circle overflow-hidden bg-base-200 bg-opacity-20"
            >
              <div class="bg-primary striped animate-right h-10">
                <div
                  class="absolute pos-mr mr-2 min-w-12 text-center px-3 py-1 shape-circle font-bold bg-base-200"
                >
                  <span>{{ percent }}</span>
                </div>
              </div>
            </VProgressBar>
          </div>
        </ThemeCard>

        <ThemeCard title="Progress Circle">
          <div class="flex items-center justify-center h-full gap-6 p-8">
            <VProgressCircle :percent="percent" class color="border-accent" :width="20" :size="8" />

            <VProgressCircle
              :percent="percent"
              class="bg-base-200"
              color="border-secondary"
              :width="20"
              :size="8"
            >
              <div class="absolute pos-mc text-3xl">{{ percent }}</div>
            </VProgressCircle>

            <VProgressCircle
              :percent="percent"
              class="bg-base-200"
              color="border-primary bg-primary-focus"
              :width="20"
              :size="8"
            >
              <div class="absolute pos-mc text-3xl bg-base-100 shape-circle p-2">
                <tabler-box />
              </div>
            </VProgressCircle>
          </div>
        </ThemeCard>

        <ThemeCard title="Resizer">
          <VResizer resize="width" class="h-full min-w-1/2 max-w-full h-48">
            <div class="relative h-full">
              <div class="absolute pos-tl h-10 w-10 bg-primary row-center font-bold">TL</div>
              <div class="absolute pos-tr h-10 w-10 bg-primary row-center font-bold">TR</div>
              <div class="absolute pos-bl h-10 w-10 bg-primary row-center font-bold">BL</div>
              <div class="absolute pos-br h-10 w-10 bg-primary row-center font-bold">BR</div>
            </div>

            <template #handle="{ startDrag }">
              <div class="resizer-handle" @mousedown="startDrag">
                <div tabindex="0" class="bg-accent w-2 h-10 rounded-full"></div>
              </div>
            </template>
          </VResizer>
        </ThemeCard>

        <ThemeCard title="Select">
          <div class="flex items-center justify-center h-full gap-6 p-8">
            <VSelect
              v-model="selectedItem"
              label="Select your mood"
              :options="items"
              class="shape-rounded border-2 border-base-200 w-full"
            >
              <template #prepend>
                <div
                  class="row-center text-3xl font-bold h-12 w-16 min-w-16 mr-2 rounded-lg bg-secondary"
                >?</div>
              </template>
              <template #append>
                <VButton v-if="selectedItem" icon @click="selectedItem = ''">
                  <VCloseIcon />
                </VButton>
              </template>
            </VSelect>
          </div>
        </ThemeCard>

        <ThemeCard title="Skeleton List Item">
          <div class="p-8">
            <VSkeletonListItem />
          </div>
        </ThemeCard>

        <ThemeCard title="Slider">
          <div class="flex gap-4 items-center p-8">
            <VTextInput
              v-model="val1"
              type="number"
              min="-100"
              :max="val2"
              class="border-2 border-base-content w-24"
            />
            <VSlider v-model="range" :min="-100" :max="100" />
            <VTextInput
              v-model="val2"
              type="number"
              :min="val1"
              max="100"
              class="border-2 border-base-content w-24"
            />
          </div>
        </ThemeCard>

        <ThemeCard title="Spinner">
          <div class="flex justify-center items-center gap-8 p-8">
            <VSpinner
              class="-speed-100 w-6 h-6 border-success border-2 border-r-none border-t-none"
            />

            <VSpinner
              speed="-300"
              class="sa-fastest w-10 h-10 border-4 border-info border-r-none border-t-none"
            />

            <VSpinner
              speed="200"
              class="sa-fast w-16 h-16 border-8 border-r-secondary border-l-secondary border-t-none border-b-none"
            />

            <VSpinner
              class="sa-slowest w-20 h-20 border-12 border-r-warning border-l-error border-t-success border-b-info"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </VSpinner>
          </div>
        </ThemeCard>

        <ThemeCard v-if="false" title="Switch">
          <div class="flex flex-wrap items-center justify-center h-full gap-6">
            <!-- Small -->
            <VSwitch v-model="switchVal" size="sm" pill="bg-primary">
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Medium (Default) -->
            <VSwitch
              v-model="switchVal"
              dot="bg-white shape-circle"
              pill="bg-secondary shape-circle"
            >
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Large -->
            <VSwitch v-model="switchVal" size="lg" pill="bg-accent">
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Disabled -->
            <VSwitch v-model="switchVal" disabled>
              <div class="px-2 font-bold">On</div>
            </VSwitch>
          </div>
        </ThemeCard>

        <ThemeCard title="Tab">
          <div class="p-8">
            <div class="p-4 bg-warning font-bold">TODO: Implement</div>
          </div>
        </ThemeCard>

        <ThemeCard title="Text Input">
          <div class="flex items-center justify-center h-full p-8">
            <VTextInput
              v-model="text"
              :type="fieldType"
              label="Password"
              placeholder="*****"
              class="border-2 border-base-300 h-14 w-full"
            >
              <template #append>
                <VButton @click="showPassword = !showPassword">
                  <span v-if="showPassword">Hide</span>
                  <span v-else>Show</span>
                </VButton>
              </template>
            </VTextInput>
          </div>
        </ThemeCard>

        <ThemeCard title="Toast">
          <div>
            <div
              class="flex flex-wrap justify-center items-center gap-4 p-6 text-sm font-bold bg-base-200 border-t-2 border-base-100"
            >
              <VSwitch v-model="showToast">
                <span class="pl-2">Show</span>
              </VSwitch>

              <VSwitch v-model="showClose">
                <span class="pl-2">Closeable</span>
              </VSwitch>

              <VSwitch v-model="enableAbsolute">
                <span class="pl-2">Float</span>
              </VSwitch>

              <div class="flex-grow"></div>

              <VSwitch v-model="showRegion">
                <span class="pl-2">Show Region</span>
              </VSwitch>
            </div>

            <!-- Preview -->
            <div class="relative h-60 flex flex-col sa-border shape-rounded overflow-hidden">
              <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
                <VCollapse v-model="showToast" class="pointer-events-none" slide="down">
                  <div class="flex items-center justify-between bg-info pointer-events-auto">
                    <div class="py-3 px-4">Hello, world!</div>
                    <VButton v-if="showClose" icon class="mr-2" @click="showToast = false">
                      <VCloseIcon />
                    </VButton>
                  </div>
                </VCollapse>
              </div>

              <!-- Content -->
              <div
                class="relative flex-grow my-1"
                :class="{ 'bg-blue-400 bg-opacity-20 border-dash outline-blue-400': showRegion }"
              >
                <VButton icon size="xl" class="absolute top-2 left-2 bg-info">
                  <span class="text-2xl font-bold">?</span>
                </VButton>
                <VButton icon size="xl" class="absolute bottom-2 right-2 sa-border bg-info">
                  <span class="text-2xl font-bold">?</span>
                </VButton>
              </div>

              <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
                <VCollapse v-model="showToast" class="pointer-events-none" slide="up">
                  <div class="flex items-center justify-between bg-success pointer-events-auto">
                    <div class="py-3 px-4">Hello, world!</div>
                    <VButton v-if="showClose" icon class="mr-2" @click="showToast = false">
                      <VCloseIcon />
                    </VButton>
                  </div>
                </VCollapse>
              </div>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Tooltip">
          <div class="flex items-center justify-center h-full gap-8 p-8 h-48">
            <VTooltip placement="right" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="bg-primary">Right</VButton>
            </VTooltip>

            <VTooltip placement="bottom" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="bg-primary">Bottom</VButton>
            </VTooltip>

            <VTooltip placement="top" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="bg-primary">Top</VButton>
            </VTooltip>

            <VTooltip placement="left" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="bg-primary">Left</VButton>
            </VTooltip>
          </div>
        </ThemeCard>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
