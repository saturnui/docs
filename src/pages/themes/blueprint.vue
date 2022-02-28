<script setup lang="ts">
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
const selectedItem = ref<any>('')
const items = [
  { label: 'No selection', value: '' },
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
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
</script>

<template>
  <div class="blueprint sa-bg p-8">
    <div class="text-6xl font-bold mb-8 text-center">Blueprint</div>
    <div class="flex justify-center">
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-10xl">
        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Alerts</div>
          <VAlert class="sa-fill sa-border rounded-lg" role="alert">
            <span class="p-3">I'm an alert that informs you of stuff.</span>
          </VAlert>

          <VAlert class="sa-border rounded" role="alert">
            <span class="p-3">I'm an alert that informs you of stuff.</span>
          </VAlert>

          <VAlert class="sa-inverted sa-rounded" role="alert">
            <span class="p-3">I'm an alert that informs you of stuff.</span>
          </VAlert>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Avatars</div>
          <div class="flex flex-wrap items-center justify-center h-full gap-8 p-8">
            <VAvatar name="Bean" size="xl" />
            <VAvatar name="Bean" size="xl" class="sa-border sa-rounded sa-lighten sa-fill" />
            <VAvatar name="Bean" size="xl" class="sa-circle sa-inverted" />
            <VAvatar name="Bean" size="xl" class="sa-circle sa-fill sa-border" />
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Buttons</div>
          <div class="flex flex-wrap items-center justify-center h-full gap-8 p-8">
            <VButton>Button</VButton>
            <VButton class="sa-fill sa-border">Button</VButton>
            <VButton class="sa-inverted">Button</VButton>
            <VButton disabled class="sa-border">Button</VButton>
            <VButton icon>
              <tabler-box />
            </VButton>
            <VButton icon class="sa-border">
              <tabler-box />
            </VButton>
            <VButton icon class="sa-inverted">
              <tabler-box />
            </VButton>
            <VButton icon disabled class="sa-border">
              <tabler-box />
            </VButton>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Carousel</div>
          <VCarousel
            v-model="slideIndex"
            class="w-full h-80 border-3 border-primary overflow-hidden"
            slider-class="scroll-smooth"
          >
            <!-- Carousel Items -->
            <VCarouselItem
              v-for="(slide, index) in slides"
              :key="index"
              class="flex items-center justify-center w-full h-80 text-4xl text-white"
              :class="slide"
            >
              <div>Slide {{ index + 1 }}</div>
            </VCarouselItem>
            <template #overlay="{ prevSlide, nextSlide }">
              <div class="absolute top-0 w-full h-full">
                <!-- Navigation Prev -->
                <VButton icon class="absolute sa-ml ml-4 sa-inverted" @click="prevSlide(1)">
                  <VChevronLeftIcon />
                </VButton>

                <!-- Navigation Next -->
                <VButton icon class="absolute sa-mr mr-4 sa-inverted" @click="nextSlide(1)">
                  <VChevronRightIcon />
                </VButton>

                <!-- Navigation Pagination -->
                <div class="absolute sa-bc mb-3 flex gap-2">
                  <button
                    v-for="(slide, index) in slides"
                    :key="slide"
                    class="w-5 h-2 sa-circle sa-inverted sa-disabled"
                    :class="{ '!opacity-100': slideIndex === index }"
                    @click="slideIndex = index"
                  ></button>
                </div>
              </div>
            </template>
          </VCarousel>
        </div>

        <div class="relative col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Code Input</div>
          <div class="absolute sa-tl flex flex-col h-full items-center justify-center w-full gap-4">
            <VCodeInput
              v-model="code"
              pattern="XXX-XXX"
              input-class="sa-border sa-rounded sa-lighten"
            />
            <div class="text-3xl font-bold">{{ code }}</div>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Collapse</div>
          <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full -mb-1 last:mb-0">
            <template #header="{ open: isOpen }">
              <div class="relative p-3 flex items-center gap-4 w-full sa-border">
                <span class="font-bold flex-grow">Title here</span>
                <tabler-chevron-right
                  class="transition duration-150 transform"
                  :class="{ 'rotate-90': isOpen }"
                />
              </div>
            </template>
            <div class="grid gap-5 border-b-3 border-r-3 border-l-3 sa-border-primary p-4">
              <VSkeletonListItem />
              <VSkeletonListItem />
            </div>
          </VCollapse>
        </div>

        <div class="relative col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Dialog / Overlay</div>
          <div class="absolute sa-tl w-full h-full overflow-hidden">
            <div class="absolute sa-mc z-0">
              <VButton class="sa-inverted" @click="show = true">Open Dialog</VButton>
            </div>
            <VOverlay
              v-model="show"
              modal
              disable-scroll-target="parent"
              class="sa-overlay-absolute"
            >
              <VDialog class="max-w-xl sa-border sa-rounded sa-fill" @close="show = false">
                <!-- Title -->
                <template #title>
                  <div class="font-bold">Dialog example</div>
                </template>
                <!-- Content -->
                <div class="p-4 border-t-2 sa-border-primary">This is an example of a modal dialog.</div>
                <!-- Actions -->
                <template #actions>
                  <VButton @click="show = false">Cancel</VButton>
                  <VButton class="sa-inverted" @click="show = false">OK</VButton>
                </template>
              </VDialog>
            </VOverlay>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Drawer</div>
          <div class="flex items-center gap-4 sa-border sa-rounded">
            <div class="relative flex w-full h-96">
              <VDrawer v-model="showDrawer" class="min-w-16 max-w-16 sm:min-w-75 sm:max-w-75">
                <div class="flex h-full overflow-hidden px-2">
                  <div
                    class="flex flex-col items-center p-2 gap-2 min-w-16 max-w-16 w-full overflow-y-auto"
                  >
                    <VTooltip v-for="i in 8" :key="i" placement="right" class="delay-0">
                      <template #tooltip>Menu Tooltip #{{ i }}</template>
                      <VButton class="p-4 sa-inverted sa-border">
                        <tabler-box class="h-6" />
                      </VButton>
                    </VTooltip>
                  </div>
                  <div class="hidden sm:block p-2 space-y-2 overflow-y-auto">
                    <VButton
                      v-for="i in 8"
                      :key="i"
                      class="p-4 justify-start w-full border sa-border sa-light-dark rounded-lg gap-3"
                    >Button</VButton>
                  </div>
                </div>
              </VDrawer>
              <div class="w-full p-4 overflow-y-auto sa-inverted">
                <VSkeletonListItem v-for="i in 8" :key="i" color="sa-fill" />
              </div>
            </div>
          </div>
        </div>

        <div class="relative col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Drop Zone</div>
          <VDropzone
            class="absolute sa-tl pt-14 w-full h-full flex flex-col overflow-hidden"
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
                  class="relative flex flex-col items-center w-50 h-48 sa-rounded sa-fill sa-border p-2"
                >
                  <div
                    class="h-38 w-45 flex items-center justify-center overflow-hidden sa-rounded bg-blue-900"
                  >
                    <VImage
                      :src="file"
                      width="100"
                      height="100"
                      class="h-full w-60 object-contain"
                    />
                  </div>
                  <div class="sa-center px-3 pt-2">
                    <div class="truncate text-sm font-bold max-w-40">{{ file.name }}</div>
                  </div>
                  <VButton
                    icon
                    class="absolute -top-2 -right-2 sa-circle sa-inverted"
                    @click="removeFile(file)"
                  >
                    <VCloseIcon class="text-xl" />
                  </VButton>
                </div>
              </div>
              <div v-else class="flex flex-col items-center justify-center h-full w-full p-4">
                <div class="font-bold text-2xl pointer-events-none select-none">Drop Files Here...</div>
              </div>
              <!-- Total Files -->
              <div
                class="flex items-center gap-2 px-3 py-2 font-medium border-t-3 sa-border-primary"
              >
                <span>Total files:</span>
                <span>{{ pendingFiles.length || 0 }}</span>
                <div class="flex-grow"></div>
                <VButton class="sa-border" @click="clearFiles">Clear</VButton>
              </div>
            </template>
          </VDropzone>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">File Selector / Image</div>
          <VFileSelector :accepts="['jpg', 'jpeg', 'png', 'gif', 'svg']" @change="handleFileChange">
            <VButton size="lg" class="sa-border w-full">Select Image File</VButton>
          </VFileSelector>

          <div v-if="file" class="sa-shade-stronger p-4 rounded-3xl">
            <VImage :src="file" width="100" height="100" @change="handleImageChange" />
          </div>

          <div v-if="url" class="p-4">
            <div class="font-mono text-sm max-w-lg overflow-auto">{{ url }}</div>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Form Section</div>
          <VFormSection title="Profile" desc="Public profile available for all to see.">
            <div class="space-y-4">
              <VTextInput v-model="name" label="Name" required class="border sa-border" />
              <VTextInput v-model="email" label="Email" class="border sa-border" />
            </div>
          </VFormSection>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Line</div>
          <div class="flex items-center justify-center h-full">
            <VLine class="w-full">
              <div class="px-2">Hello, world!</div>
            </VLine>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Masks</div>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="w-24 h-24 sa-mask-10">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">10</div>
            </div>

            <div class="w-24 h-24 sa-mask-9">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">9</div>
            </div>

            <div class="w-24 h-24 sa-mask-8">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">8</div>
            </div>

            <div class="w-24 h-24 sa-mask-7">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">7</div>
            </div>

            <div class="w-24 h-24 sa-mask-6">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">6</div>
            </div>

            <div class="w-24 h-24 sa-mask-5">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl pt-2">5</div>
            </div>

            <div class="w-24 h-24 sa-mask-4">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl">4</div>
            </div>

            <div class="w-24 h-24 sa-mask-3">
              <div class="sa-inverted w-24 h-24 flex items-center justify-center text-4xl pt-4">3</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Mock Window</div>
          <div class="flex flex-wrap items-center justify-center h-full gap-8 p-8">
            <div class="sa-mock-window sa-border sa-rounded w-full">
              <div class="p-4 border-t-2 sa-border-primary">
                <span>Hello, world!</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Pagination</div>
          <div class="flex items-center justify-center h-full">
            <VPagination v-model="currentPage" :length="12" :total-visible="5" />
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Progress Bar</div>
          <div class="flex items-center justify-center h-full">
            <VProgressBar :percent="percent" class="w-full sa-circle overflow-hidden">
              <div class="sa-primary sa-stripe sa-animate-right sa-slow h-10">
                <div
                  class="absolute sa-mr mr-2 min-w-12 text-center px-3 py-1 rounded-3xl font-bold sa-fill text-white"
                >
                  <span>{{ percent }}</span>
                </div>
              </div>
            </VProgressBar>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Progress Circle</div>
          <div class="flex items-center justify-center h-full gap-6">
            <VProgressCircle
              :percent="percent"
              class="sa-darken"
              color="sa-border-primary sa-primary"
              :width="20"
              :size="8"
            />

            <VProgressCircle
              :percent="percent"
              class="sa-highlight"
              color="sa-border-primary"
              :width="20"
              :size="8"
            >
              <div class="absolute sa-mc sa-text text-3xl">{{ percent }}</div>
            </VProgressCircle>

            <VProgressCircle
              :percent="percent"
              class="sa-darken"
              color="sa-border-primary bg-blue-400"
              :width="20"
              :size="8"
            >
              <div class="absolute sa-mc sa-text text-3xl sa-fill sa-circle p-2 sa-bg">
                <tabler-box />
              </div>
            </VProgressCircle>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Resizer</div>
          <div class="w-full h-48 sa-border sa-rounded overflow-hidden">
            <VResizer resize="width" class="h-full min-w-1/2 max-w-full">
              <div class="relative h-full">
                <div class="absolute sa-tl h-10 w-10 sa-inverted sa-center font-bold">TL</div>
                <div class="absolute sa-tr h-10 w-10 sa-inverted sa-center font-bold">TR</div>
                <div class="absolute sa-bl h-10 w-10 sa-inverted sa-center font-bold">BL</div>
                <div class="absolute sa-br h-10 w-10 sa-inverted sa-center font-bold">BR</div>
              </div>
            </VResizer>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Select</div>
          <div class="flex items-center justify-center h-full gap-6">
            <VSelect
              v-model="selectedItem"
              label="Select your mood"
              :options="items"
              class="sa-border w-full"
            >
              <template #prepend>
                <div
                  class="sa-center text-3xl font-bold h-12 w-16 min-w-16 mr-2 rounded-lg sa-inverted"
                >?</div>
              </template>
              <template #append>
                <VButton v-if="selectedItem" icon @click="selectedItem = ''">
                  <VCloseIcon />
                </VButton>
              </template>
            </VSelect>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Skeleton List Item</div>
          <VSkeletonListItem />
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Slider</div>
          <div class="flex gap-4 items-center">
            <VTextInput
              v-model="val1"
              type="number"
              min="-100"
              :max="val2"
              class="border sa-border w-24"
            />
            <!-- sa-slider -->
            <VSlider v-model="range" :min="-100" :max="100" />
            <VTextInput
              v-model="val2"
              type="number"
              :min="val1"
              max="100"
              class="border sa-border w-24"
            />
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Spinner</div>
          <div class="flex justify-center items-center gap-8">
            <VSpinner
              class="w-6 h-6 border-2 border-green-400 border-r-transparent border-t-transparent"
            />

            <VSpinner
              class="sa-fastest w-8 h-8 border-4 border-blue-500 border-r-transparent border-l-transparent"
            />

            <VSpinner
              class="sa-fast w-16 h-16 border-8 border-purple-500 border-r-purple-800 border-l-purple-800"
            />

            <VSpinner
              class="sa-slowest w-20 h-20 border-8 border-r-yellow-400 border-l-green-400 border-t-blue-400 border-b-red-400"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </VSpinner>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Switch</div>
          <div class="flex items-center justify-center h-full gap-6">
            <!-- Small -->
            <VSwitch v-model="switchVal" class="sa-switch-sm">
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Medium (Default) -->
            <VSwitch v-model="switchVal">
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Large -->
            <VSwitch v-model="switchVal" class="sa-switch-lg">
              <div class="px-2 font-bold">On</div>
            </VSwitch>

            <!-- Disabled -->
            <VSwitch v-model="switchVal" class="sa-switch-lg" disabled>
              <div class="px-2 font-bold">On</div>
            </VSwitch>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Tab</div>
          <div class="p-4 bg-yellow-300 font-bold">TODO: Implement</div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Text Input</div>
          <div class="flex items-center justify-center h-full gap-8">
            <VTextInput
              v-model="text"
              :type="fieldType"
              label="Password"
              placeholder="*****"
              class="border sa-border h-14 w-full"
            >
              <template #append>
                <VButton @click="showPassword = !showPassword">
                  <span v-if="showPassword">Hide</span>
                  <span v-else>Show</span>
                </VButton>
              </template>
            </VTextInput>
          </div>
        </div>

        <div class="col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Toast</div>
          <div>
            <div class="flex flex-wrap justify-center items-center gap-4 p-2 px-4 sa-highlight-strongest text-sm font-bold">
              <VSwitch v-model="showToast" class="sa-text">
                <span class="pl-2">Show</span>
              </VSwitch>

              <VSwitch v-model="showClose" class="sa-text">
                <span class="pl-2">Closeable</span>
              </VSwitch>

              <VSwitch v-model="enableAbsolute" class="sa-text">
                <span class="pl-2">Float</span>
              </VSwitch>

              <div class="flex-grow"></div>

              <VSwitch v-model="showRegion" class="sa-text">
                <span class="pl-2">Show Region</span>
              </VSwitch>
            </div>

            <!-- Preview -->
            <div
              class="relative h-60 flex flex-col text-white sa-border sa-rounded overflow-hidden"
            >
              <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
                <VCollapse v-model="showToast" class="pointer-events-none" slide="down">
                  <div class="flex items-center justify-between sa-inverted pointer-events-auto">
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
                <VButton icon size="xl" class="absolute top-2 left-2 sa-border sa-fill">
                  <span class="text-2xl font-bold">?</span>
                </VButton>
                <VButton icon size="xl" class="absolute bottom-2 right-2 sa-border sa-fill">
                  <span class="text-2xl font-bold">?</span>
                </VButton>
              </div>

              <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
                <VCollapse v-model="showToast" class="pointer-events-none" slide="up">
                  <div class="flex items-center justify-between sa-inverted pointer-events-auto">
                    <div class="py-3 px-4">Hello, world!</div>
                    <VButton v-if="showClose" icon class="mr-2" @click="showToast = false">
                      <VCloseIcon />
                    </VButton>
                  </div>
                </VCollapse>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col col-span-1 sa-border sa-rounded sa-lighten p-4">
          <div class="text-2xl pb-4 border-b-3 mb-3">Tooltip</div>
          <div class="flex items-center justify-center h-full gap-8">
            <VTooltip placement="right" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="sa-inverted">Right</VButton>
            </VTooltip>

            <VTooltip placement="bottom" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="sa-inverted">Bottom</VButton>
            </VTooltip>

            <VTooltip placement="top" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="sa-inverted">Top</VButton>
            </VTooltip>

            <VTooltip placement="left" class="delay-0 duration-5000">
              <template #tooltip>This is a tooltip</template>
              <VButton class="sa-inverted">Left</VButton>
            </VTooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
