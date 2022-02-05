<template>
  <img src="/background.png" class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none">
  <AppBar
    class="fixed top-0 bg-white/90 dark:bg-dark-900/90 sa-text border-b dark:border-dark-800"
  />
  <div class="pt-13 flex justify-center">
    <div class="flex w-full max-w-8xl sa-text">
      <VDrawer class="app-has-appbar text-sm sa-drawer-autohide fixed top-6 pr-4 h-full">
        <Navigation />
      </VDrawer>
      <div class="sa-drawer-left w-full">
        <router-view />
      </div>
      <div class="w-80 sa-drawer-autohide-xl relative h-full">
        <div id="sidenav" class="fixed"></div>
      </div>
    </div>
    <div id="sidemenu" class="absolute z-10"></div>
  </div>
</template>
