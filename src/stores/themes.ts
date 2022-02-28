import { acceptHMRUpdate, defineStore } from 'pinia'
import { bumblebee } from './themes/bumblebee'
import { cupcake } from './themes/cupcake'
import { dark } from './themes/dark'
import { light } from './themes/light'
import { emerald } from './themes/emerald'
import { corporate } from './themes/corporate'
import { synthwave } from './themes/synthwave'
import { retro } from './themes/retro'
import { cyberpunk } from './themes/cyberpunk'
import { valentine } from './themes/valentine'
import { halloween } from './themes/halloween'
import { garden } from './themes/garden'
import { forest } from './themes/forest'
import { aqua } from './themes/aqua'
import { lofi } from './themes/lofi'
import { pastel } from './themes/pastel'
import { fantasy } from './themes/fantasy'
import { wireframe } from './themes/wireframe'
import { black } from './themes/black'
import { luxury } from './themes/luxury'
import { darcula } from './themes/darcula'
import { cmyk } from './themes/cmyk'
import { blueprint } from './themes/blueprint'

export const useThemeStore = defineStore('theme', () => {
  const themes: any = {
    dark,
    light,
    cupcake,
    bumblebee,
    emerald,
    corporate,
    synthwave,
    retro,
    cyberpunk,
    valentine,
    halloween,
    garden,
    forest,
    aqua,
    lofi,
    pastel,
    fantasy,
    wireframe,
    black,
    luxury,
    darcula,
    cmyk,
    blueprint,
  }

  return {
    themes,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
