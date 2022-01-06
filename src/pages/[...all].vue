<template>
  <section class="px-4 py-32 mx-auto">
    <div class="w-full mx-auto lg:w-3/4 space-y-8">
      <router-link to="/" class="flex items-center">
        <assets-logo-vuwi class="w-28 h-14" />
      </router-link>
      <p class="mt-5 mb-3 text-2xl font-light md:text-4xl">
        <span>Page not found (404)</span>
      </p>
      <p class="mb-3 text-base font-medium">
        The page you're looking for may have moved or no longer exists. Head back to our
        <router-link to="/" class="wi-link">homepage</router-link>, or take a look at one of the sections below.
      </p>
    </div>
  </section>
</template>
