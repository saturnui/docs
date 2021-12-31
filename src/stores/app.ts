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

  const components = [
    { title: 'Alert', to: '/ui/alert' },
    { title: 'Avatar', to: '/ui/avatar' },
    { title: 'Button', to: '/ui/button' },
    { title: 'Card', to: '/ui/card' },
    { title: 'Carousel', to: '/ui/carousel' },
    { title: 'CodeInput', to: '/ui/codeinput' },
    { title: 'Collapse', to: '/ui/collapse' },
    { title: 'Color', to: '/ui/color' },
    { title: 'DatePicker', to: '/ui/datepicker' },
    { title: 'Decoration', to: '/ui/decoration' },
    { title: 'Dialog', to: '/ui/dialog' },
    { title: 'Drawer', to: '/ui/drawer' },
    { title: 'Dropzone', to: '/ui/dropzone' },
    { title: 'FileSelector', to: '/ui/fileselector' },
    { title: 'FormSection', to: '/ui/formsection' },
    { title: 'Layout', to: '/ui/layout' },
    { title: 'Line', to: '/ui/line' },
    { title: 'Menu', to: '/ui/menu' },
    { title: 'Notification', to: '/ui/notification' },
    { title: 'Overlay', to: '/ui/overlay' },
    { title: 'Pagination', to: '/ui/pagination' },
    { title: 'Progress Bar', to: '/ui/progressbar' },
    { title: 'Progress Circle', to: '/ui/progresscircle' },
    { title: 'Select', to: '/ui/select' },
    { title: 'Slider', to: '/ui/slider' },
    { title: 'Spinner', to: '/ui/spinner' },
    { title: 'Switch', to: '/ui/switch' },
    { title: 'Tab', to: '/ui/tab' },
    { title: 'TextInput', to: '/ui/textinput' },
    { title: 'Tooltip', to: '/ui/tooltip' },
    { title: 'Window', to: '/ui/window' },
  ]

  return {
    components,
    name,
    // setNewName,
    // otherNames,
    // savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
