<script setup lang="ts">
const text = ref('')
const currentPage = ref(0)
const slideIndex = ref(0)
const slides = [
  'bg-yellow-400 h-full',
  'bg-teal-400 h-full',
  'bg-blue-400 h-full',
  'bg-red-400 h-full',
  'bg-pink-400 h-full',
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
const percent = 35

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
  <div class="light flex justify-center p-8">
    <div class="flex flex-col items-center w-full">
      <div class="w-full max-w-2xl p-4 space-y-6">
        <div class="text-4xl font-bold">Tailwind CSS</div>
        <div class="text-2xl">Alert</div>
        <VAlert class="wi-alert bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
          <span class="p-3">I'm an alert that informs you of stuff.</span>
        </VAlert>

        <div class="text-2xl">Avatar</div>
        <VAvatar
          name="Eddie Van Halen"
          size="xl"
          class="wi-avatar-xl rounded-full bg-purple-600 text-white"
        />

        <div class="text-2xl">Button</div>
        <!-- <VTextInput
          label="Name"
          placeholder="Hi there"
          v-model="text"
          multiline
          class="border wi-border"
        />-->
        <div class="flex gap-4">
          <VButton class="wi-primary">Primary</VButton>
          <VButton class="wi-success">Success</VButton>
          <VButton class="wi-error">error</VButton>
          <VButton class="wi-warning">warning</VButton>
          <VButton class="wi-info">Info</VButton>
          <VButton disabled>Disabled</VButton>
        </div>

        <div class="text-2xl">Carousel</div>
        <VCarousel v-model="slideIndex" class="w-full h-80" slider-class="scroll-smooth">
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
              <VButton
                icon
                class="absolute left-4 wi-ml bg-dark-700 text-white"
                @click="prevSlide(1)"
              >
                <VChevronLeftIcon />
              </VButton>

              <!-- Navigation Next -->
              <VButton
                icon
                class="absolute wi-mr right-4 bg-dark-700 text-white"
                @click="nextSlide(1)"
              >
                <VChevronRightIcon />
              </VButton>

              <!-- Navigation Pagination -->
              <div class="absolute bottom-3 wi-bc flex gap-2">
                <button
                  v-for="(slide, index) in slides"
                  :key="slide"
                  class="bg-black w-5 h-2 rounded-full bg-opacity-30"
                  :class="{ '!bg-white bg-opacity-100': slideIndex === index }"
                  @click="slideIndex = index"
                ></button>
              </div>
            </div>
          </template>
        </VCarousel>

        <div class="text-2xl">Code Input</div>
        <div class="flex items-center gap-4">
          <VCodeInput v-model="code" pattern="XXX-XXX" input-class="border-2 wi-border wi-shade" />
          <div class="font-mono text-xl font-bold">{{ code }}</div>
        </div>

        <div class="text-2xl">Collapse</div>
        <div>
          <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full -mb-1 last:mb-0">
            <template #header="{ open: isOpen }">
              <div
                class="relative p-3 flex items-center gap-4 w-full border wi-border z-0 wi-light-dark"
              >
                <span class="font-bold flex-grow">Title here</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition duration-150 transform"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :class="{ 'rotate-90': isOpen }"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </template>
            <div class="border-b border-r border-l wi-border wi-light-dark p-4">
              <VSkeletonListItem class="w-96" />
              <VSkeletonListItem class="w-full" />
            </div>
          </VCollapse>
        </div>

        <div class="text-2xl">Dialog / Overlay</div>
        <div class="relative w-full h-48 overflow-hidden border">
          <div class="absolute wi-mc z-0">
            <VButton class="wi-primary" @click="show = true">Open Dialog</VButton>
          </div>
          <VOverlay
            v-model="show"
            modal
            disable-scroll-target="parent"
            class="wi-overlay-absolute wi-overlay-shade"
          >
            <VDialog
              class="bg-white max-w-xl border wi-border filter shadow-lg"
              @close="show = false"
            >
              <!-- Title -->
              <template #title>
                <div class="font-bold">Dialog example</div>
              </template>
              <!-- Content -->
              <div class="p-4 border-t wi-border">This is an example of a modal dialog.</div>
              <!-- Actions -->
              <template #actions>
                <VButton @click="show = false">Cancel</VButton>
                <VButton class="wi-primary" @click="show = false">OK</VButton>
              </template>
            </VDialog>
          </VOverlay>
        </div>

        <div class="text-2xl">Drawer</div>
        <div class="relative flex w-full h-96">
          <VDrawer
            v-model="showDrawer"
            class="wi-highlight min-w-16 max-w-16 sm:min-w-75 sm:max-w-75"
          >
            <div class="flex h-full overflow-hidden">
              <div
                class="flex flex-col items-center p-2 gap-2 min-w-16 max-w-16 w-full overflow-y-auto bg-dark-800 wi-dark"
              >
                <VTooltip v-for="i in 8" :key="i" placement="right">
                  <template #tooltip>Menu Tooltip #{{ i }}</template>
                  <VButton class="p-4 border wi-border rounded-lg">
                    <!-- <tabler-box /> -->
                    A
                  </VButton>
                </VTooltip>
              </div>
              <div class="hidden sm:block p-2 space-y-2 overflow-y-auto">
                <VButton
                  v-for="i in 8"
                  :key="i"
                  class="p-4 justify-start w-full border wi-border wi-light-dark rounded-lg gap-3"
                >
                  <!-- <tabler-box />Menu Item -->
                  A
                </VButton>
              </div>
            </div>
          </VDrawer>
          <div class="w-full p-4 overflow-y-auto">
            <VSkeletonListItem v-for="i in 8" :key="i" />
          </div>
        </div>

        <div class="text-2xl">Dropzone</div>
        <VDropzone class="flex flex-col bg-gray-300 rounded overflow-hidden" @change="handleChange">
          <template #default="{ active }">
            <div
              v-if="pendingFiles.length"
              class="flex flex-wrap gap-4 h-48 overflow-y-auto w-full p-4 doc-preview rounded"
              :class="{ 'bg-green-400': active }"
            >
              <div
                v-for="(file, index) in pendingFiles"
                :key="index"
                class="relative flex flex-col items-center w-50 bg-white p-2 rounded-lg"
              >
                <div class="h-25 w-25 flex items-center justify-center">
                  <VImage :src="file" width="100" height="100" class="rounded max-h-24 max-w-24" />
                </div>
                <div class="wi-center wi-dark rounded-lg mt-2 px-3 py-2">
                  <div class="truncate text-sm font-bold max-w-40">{{ file.name }}</div>
                </div>
                <VButton
                  icon
                  class="absolute -top-2 -right-2 rounded-full wi-dark"
                  @click="removeFile(file)"
                >
                  <VCloseIcon />
                </VButton>
              </div>
            </div>
            <div
              v-else
              class="flex flex-col items-center justify-center h-48 w-full p-4 doc-preview"
            >
              <div class="font-bold text-2xl opacity-30 pointer-events-none select-none">Drop Files</div>
            </div>
            <!-- Total Files -->
            <div class="bg-gray-100 flex items-center gap-2 px-3 py-2 font-medium">
              <span>Total files:</span>
              <span>{{ pendingFiles.length || 0 }}</span>
              <div class="flex-grow"></div>
              <VButton class="wi-primary" @click="clearFiles">Clear</VButton>
            </div>
          </template>
        </VDropzone>

        <div class="text-2xl">File Selector / Image</div>
        <div class="border p-4 rounded-lg">
          <VFileSelector :accepts="['jpg', 'jpeg', 'png', 'gif', 'svg']" @change="handleFileChange">
            <VButton size="lg" class="wi-primary w-full">Select Image File</VButton>
          </VFileSelector>

          <div v-if="file" class="wi-shade-stronger p-4 rounded-3xl">
            <VImage :src="file" width="100" height="100" @change="handleImageChange" />
          </div>

          <div v-if="url" class="p-4">
            <div class="font-mono text-sm max-w-lg overflow-auto">{{ url }}</div>
          </div>
        </div>

        <div class="text-2xl">Form Section</div>
        <div class="border p-4 rounded-lg">
          <VFormSection title="Profile" desc="Public profile available for all to see.">
            <div class="space-y-4">
              <VTextInput v-model="name" label="Name" required class="border wi-border" />
              <VTextInput v-model="email" label="Email" class="border wi-border" />
            </div>
          </VFormSection>
        </div>

        <div class="text-2xl">Line</div>
        <VLine />

        <div class="text-2xl">Mock Window</div>
        <div class="wi-mock-window border wi-border">
          <div class="p-4 border-t wi-border">
            <span>Hello, world!</span>
          </div>
        </div>

        <div class="text-2xl">Pagination</div>
        <VPagination v-model="currentPage" :length="12" :total-visible="5" />

        <div class="text-2xl">Progress Bar</div>
        <VProgressBar :percent="percent" class="wi-bg rounded-full overflow-hidden">
          <div class="bg-green-500 wi-stripe wi-animate-right wi-slow h-10">
            <div
              class="absolute wi-mr right-1 min-w-12 text-center px-3 py-1 rounded-3xl font-bold bg-gray-800 text-white"
            >
              <span>{{ percent }}</span>
            </div>
          </div>
        </VProgressBar>

        <div class="text-2xl">Progress Circle</div>
        <VProgressCircle :percent="percent" class="wi-highlight" color="border-red-500" :width="12">
          <div class="absolute wi-mc wi-text text-3xl">{{ percent }}</div>
        </VProgressCircle>

        <div class="text-2xl">Resizer</div>
        <div class="w-full h-48 bg-dark-700">
          <VResizer class="h-full min-w-1/2 max-w-full bg-dark-100">
            <div class="relative h-full">
              <div class="absolute wi-tl h-10 w-10 bg-teal-500 text-white wi-center font-bold">TL</div>
              <div class="absolute wi-tr h-10 w-10 bg-teal-500 text-white wi-center font-bold">TR</div>
              <div class="absolute wi-bl h-10 w-10 bg-teal-500 text-white wi-center font-bold">BL</div>
              <div class="absolute wi-br h-10 w-10 bg-teal-500 text-white wi-center font-bold">BR</div>
            </div>
          </VResizer>
        </div>

        <div class="text-2xl">Select</div>
        <VSelect
          v-model="selectedItem"
          label="Select your mood"
          :options="items"
          class="border wi-border min-w-60"
        >
          <template #prepend>
            <!-- <tabler-mood-neutral class="text-xl opacity-30 w-10 min-w-10 -ml-2 text-left" /> -->
            <div
              class="wi-center text-3xl font-bold h-12 w-16 min-w-16 mr-2 rounded-lg bg-blue-700 text-white"
            >?</div>
          </template>
          <template #append>
            <VButton v-if="selectedItem" icon @click="selectedItem = ''">
              <VCloseIcon />
            </VButton>
          </template>
        </VSelect>

        <div class="text-2xl">Skeleton List Item</div>
        <VSkeletonListItem />

        <div class="text-2xl">Slider</div>
        <div class="p-4 bg-yellow-300 font-bold">TODO: Not working with Tailwind</div>
        <div class="flex gap-4 items-center">
          <VTextInput
            v-model="val1"
            type="number"
            min="-100"
            :max="val2"
            class="border wi-border w-24"
          />
          <!-- wi-slider -->
          <VSlider v-model="range" :min="-100" :max="100" />
          <VTextInput
            v-model="val2"
            type="number"
            :min="val1"
            max="100"
            class="border wi-border w-24"
          />
        </div>

        <div class="text-2xl">Spinner</div>
        <div class="flex justify-center items-center gap-8">
          <VSpinner
            class="w-6 h-6 border-2 border-green-400 border-r-transparent border-t-transparent"
          />

          <VSpinner
            class="wi-fastest w-8 h-8 border-4 border-blue-500 border-r-transparent border-l-transparent"
          />

          <VSpinner
            class="wi-fast w-16 h-16 border-8 border-purple-500 border-r-purple-800 border-l-purple-800"
          />

          <VSpinner
            class="wi-slowest w-20 h-20 border-8 border-r-yellow-400 border-l-green-400 border-t-blue-400 border-b-red-400"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </VSpinner>
        </div>

        <div class="text-2xl">Switch</div>
        <div class="flex items-center gap-8">
          <!-- Small -->
          <VSwitch v-model="switchVal" class="wi-switch-sm">
            <div class="px-2 font-bold">On</div>
          </VSwitch>

          <!-- Medium (Default) -->
          <VSwitch v-model="switchVal">
            <div class="px-2 font-bold">On</div>
          </VSwitch>

          <!-- Large -->
          <VSwitch v-model="switchVal" class="wi-switch-lg">
            <div class="px-2 font-bold">On</div>
          </VSwitch>

          <!-- Disabled -->
          <VSwitch v-model="switchVal" class="wi-switch-lg" disabled>
            <div class="px-2 font-bold">On</div>
          </VSwitch>
        </div>

        <div class="text-2xl">Tab</div>
        <div class="p-4 bg-yellow-300 font-bold">TODO: Implement</div>

        <div class="text-2xl">Text Input</div>
        <VTextInput
          v-model="text"
          :type="fieldType"
          label="Password"
          placeholder="*****"
          class="border wi-border h-14"
        >
          <template #append>
            <VButton @click="showPassword = !showPassword">
              <span v-if="showPassword">Hide</span>
              <span v-else>Show</span>
            </VButton>
          </template>
        </VTextInput>

        <div class="text-2xl">Toast</div>
        <div>
          <div class="flex items-center gap-4 p-2 px-4 wi-highlight-strongest text-sm font-bold">
            <VSwitch v-model="showToast" class="wi-text">
              <span class="pl-2">Show</span>
            </VSwitch>

            <VSwitch v-model="showClose" class="wi-text">
              <span class="pl-2">Closeable</span>
            </VSwitch>

            <VSwitch v-model="enableAbsolute" class="wi-text">
              <span class="pl-2">Float</span>
            </VSwitch>

            <div class="flex-grow"></div>

            <VSwitch v-model="showRegion" class="wi-text">
              <span class="pl-2">Show Region</span>
            </VSwitch>
          </div>

          <!-- Preview -->
          <div
            class="relative doc-preview h-60 flex flex-col text-white rounded-b wi-highlight overflow-hidden"
          >
            <div :class="{ 'absolute top-0 w-full z-10': enableAbsolute }">
              <VCollapse v-model="showToast" class="pointer-events-none" slide="down">
                <div class="flex items-center justify-between bg-black pointer-events-auto">
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
              <VButton
                icon
                size="xl"
                class="absolute top-2 left-2 filter drop-shadow-lg wi-primary"
              >
                <span class="text-2xl font-bold">?</span>
              </VButton>
              <VButton
                icon
                size="xl"
                class="absolute bottom-2 right-2 filter drop-shadow-lg wi-primary"
              >
                <span class="text-2xl font-bold">?</span>
              </VButton>
            </div>

            <div :class="{ 'absolute bottom-0 w-full z-10': enableAbsolute }">
              <VCollapse v-model="showToast" class="pointer-events-none" slide="up">
                <div class="flex items-center justify-between bg-black pointer-events-auto">
                  <div class="py-3 px-4">Hello, world!</div>
                  <VButton v-if="showClose" icon class="mr-2" @click="showToast = false">
                    <VCloseIcon />
                  </VButton>
                </div>
              </VCollapse>
            </div>
          </div>
        </div>

        <div class="text-2xl">Tooltip</div>
        <div class="flex gap-4">
          <VTooltip placement="right">
            <template #tooltip>This is a tooltip</template>
            <VButton class="wi-primary">Right</VButton>
          </VTooltip>

          <VTooltip placement="bottom">
            <template #tooltip>This is a tooltip</template>
            <VButton class="wi-primary">Bottom</VButton>
          </VTooltip>

          <VTooltip placement="top">
            <template #tooltip>This is a tooltip</template>
            <VButton class="wi-primary">Top</VButton>
          </VTooltip>

          <VTooltip placement="left">
            <template #tooltip>This is a tooltip</template>
            <VButton class="wi-primary">Left</VButton>
          </VTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: plain
</route>
