import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  /**
   * Current named of the user.
   */
  const name = ref(import.meta.env.APP_NAME)
  // const previousNames = ref(new Set<string>())

  // const usedNames = computed(() => Array.from(previousNames.value))
  // const otherNames = computed(() =>
  //   usedNames.value.filter(name => name !== savedName.value)
  // )

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  // function setNewName(name: string) {
  //   if (savedName.value) previousNames.value.add(savedName.value)

  //   savedName.value = name
  // }

  const componentPages = [
    { title: 'Alert', to: '/components/alert' },
    { title: 'Avatar', to: '/components/avatar' },
    { title: 'Button', to: '/components/button' },
    { title: 'Carousel', to: '/components/carousel' },
    { title: 'CodeInput', to: '/components/codeinput' },
    { title: 'Collapse', to: '/components/collapse' },
    { title: 'DatePicker', to: '/components/datepicker' },
    { title: 'Dialog', to: '/components/dialog' },
    { title: 'Drawer', to: '/components/drawer' },
    { title: 'Dropzone', to: '/components/dropzone' },
    { title: 'FileSelector', to: '/components/fileselector' },
    { title: 'FormSection', to: '/components/formsection' },
    { title: 'Image', to: '/components/image' },
    { title: 'Line', to: '/components/line' },
    { title: 'Menu', to: '/components/menu' },
    { title: 'Mocks', to: '/components/mock' },
    { title: 'Notification', to: '/components/notification' },
    { title: 'Overlay', to: '/components/overlay' },
    { title: 'Pagination', to: '/components/pagination' },
    { title: 'Progress Bar', to: '/components/progressbar' },
    { title: 'Progress Circle', to: '/components/progresscircle' },
    { title: 'Select', to: '/components/select' },
    { title: 'Skeleton', to: '/components/skeleton' },
    { title: 'Slider', to: '/components/slider' },
    { title: 'Spinner', to: '/components/spinner' },
    { title: 'Switch', to: '/components/switch' },
    { title: 'Tab', to: '/components/tab' },
    { title: 'TextInput', to: '/components/textinput' },
    { title: 'Tooltip', to: '/components/tooltip' },
  ]

  const stylingPages = [
    { title: 'Color', to: '/styling/color' },
    { title: 'Layout', to: '/styling/layout' },
    { title: 'Themes', to: '/styling/themes' },
  ]

  return {
    componentPages,
    stylingPages,
    name,
    // setNewName,
    // otherNames,
    // savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
