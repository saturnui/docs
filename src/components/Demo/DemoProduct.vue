<template>
  <div class="flex flex-col gap-4">
    <img
      src="/demo/spaceship.jpg"
      class="h-50 w-full object-cover rounded-t-xl overflow-hidden"
    />
    <div class="p-4 px-6">
      <div class="flex items-center gap-1 font-bold text-xl">
        <div>Card Component</div>
        <VTooltip show="focus">
          <template #tooltip>
            <div class="w-70 space-y-3">
              <DemoTooltip
                title="TextInput Component"
                link="/components/button"
              >Use TextInput for single line and multiline entries.</DemoTooltip>
            </div>
          </template>
          <VButton icon>
            <tabler-info-circle class="text-primary dark:text-teal-400" />
          </VButton>
        </VTooltip>
      </div>
      <div class="text-sm text-gray-500">
        Use card component to easily show blog posts, products, features, items and more.
      </div>
      <div class="flex justify-end pt-6">
        <VButton size="lg" class="bg-purple-600 rounded-xl text-white">Buy Now</VButton>
      </div>
    </div>
  </div>
</template>
