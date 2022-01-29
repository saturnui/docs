<template>
  <img
    src="/vuwi-background.png"
    class="fixed top-0 -right-120 filter blur-xl opacity-60 dark:opacity-40 select-none pointer-events-none"
  />
  <div class="wi-main">
    <AppBar
      class="fixed top-0 bg-white/90 dark:bg-dark-900/90 wi-text border-b dark:border-dark-800"
    />
    <div class="pt-13 flex justify-center">
      <div class="flex w-full max-w-8xl wi-text">
        <VDrawer autohide="lg" class="app-has-appbar text-sm fixed pr-4 top-0 h-screen">
          <Navigation class="py-8" />
        </VDrawer>
        <div class="wi-drawer-left w-full">
          <router-view />
        </div>
        <VDrawer autohide="xl" class="w-80 relative h-full">
          <div id="sidenav" class="fixed"></div>
        </VDrawer>
      </div>
      <div id="sidemenu" class="absolute z-10"></div>
    </div>
  </div>
</template>
