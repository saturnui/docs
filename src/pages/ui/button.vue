<template>
  <div class="vuwi-content sm:p-8 space-y-8">
    <div class="vuwi-window filter sm:drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Button</span>
      <VuwiLine />
      <div class="space-y-4">
        <div class="vuwi-highlight font-bold text-sm px-4 py-2">Default</div>
        <div class="px-4 max-w-2xl flex flex-wrap items-center gap-4">
          <button class="vuwi-btn vuwi-btn-xs">Extra Small</button>
          <button class="vuwi-btn vuwi-btn-sm">Small</button>
          <button class="vuwi-btn">Normal</button>
          <button class="vuwi-btn vuwi-btn-lg">Large</button>
          <button class="vuwi-btn vuwi-btn-xl">Extra Large</button>
        </div>

        <div class="vuwi-highlight font-bold text-sm px-4 py-2">Solid</div>

        <div class="px-4 max-w-2xl flex flex-wrap items-center gap-4">
          <button class="vuwi-btn vuwi-btn-xs vuwi-btn-primary">Extra Small</button>
          <button class="vuwi-btn vuwi-btn-sm vuwi-btn-primary">Small</button>
          <button class="vuwi-btn vuwi-btn-primary">Normal</button>
          <button class="vuwi-btn vuwi-btn-lg vuwi-btn-primary">Large</button>
          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-primary">Extra Large</button>
        </div>

        <div class="vuwi-highlight font-bold text-sm px-4 py-2">Outline</div>
        <div class="px-4 max-w-2xl flex flex-wrap items-center gap-4">
          <button class="vuwi-btn vuwi-btn-xs vuwi-btn-outline">Extra Small</button>
          <button class="vuwi-btn vuwi-btn-sm vuwi-btn-outline vuwi-btn-primary">Small</button>
          <button class="vuwi-btn vuwi-btn-outline">Normal</button>
          <button class="vuwi-btn vuwi-btn-lg vuwi-btn-outline vuwi-btn-primary">Large</button>
          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-outline">Extra Large</button>
        </div>

        <div class="vuwi-highlight font-bold text-sm px-4 py-2">Pill</div>
        <div class="px-4 max-w-2xl flex flex-wrap items-center gap-4">
          <button
            class="vuwi-btn vuwi-btn-xs vuwi-btn-outline vuwi-btn-pill vuwi-btn-primary"
          >Extra Small</button>
          <button class="vuwi-btn vuwi-btn-sm vuwi-btn-pill vuwi-btn-primary">Small</button>
          <button class="vuwi-btn vuwi-btn-outline vuwi-btn-pill">Normal</button>
          <button class="vuwi-btn vuwi-btn-lg vuwi-btn-pill vuwi-btn-primary">Large</button>
          <button
            class="vuwi-btn vuwi-btn-xl vuwi-btn-outline vuwi-btn-pill vuwi-btn-primary"
          >Extra Large</button>
        </div>

        <div class="vuwi-highlight font-bold text-sm px-4 py-2">Icon</div>
        <div class="px-4 max-w-2xl flex flex-wrap items-center gap-4 pb-6">
          <button class="vuwi-btn vuwi-btn-xs vuwi-btn-icon vuwi-btn-primary">
            <tabler-box class="text-[0.5rem]" />
          </button>
          <button class="vuwi-btn vuwi-btn-sm vuwi-btn-icon vuwi-btn-primary">
            <tabler-box class="text-sm" />
          </button>
          <button class="vuwi-btn vuwi-btn-icon vuwi-btn-primary">
            <tabler-box />
          </button>
          <button class="vuwi-btn vuwi-btn-lg vuwi-btn-icon vuwi-btn-primary">
            <tabler-box class="text-2xl" />
          </button>

          <!-- Alternatives -->
          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-icon vuwi-btn-primary">
            <tabler-box class="text-3xl" />
          </button>

          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-icon">
            <tabler-box class="text-3xl" />
          </button>

          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-icon vuwi-btn-outline vuwi-btn-primary">
            <tabler-box class="text-3xl" />
          </button>

          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-icon vuwi-btn-outline">
            <tabler-box class="text-3xl" />
          </button>

          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-outline px-4 vuwi-btn-primary">
            <tabler-box class="text-3xl mr-2" />Text
          </button>

          <button class="vuwi-btn vuwi-btn-xl vuwi-btn-outline vuwi-btn-pill px-4 vuwi-btn-primary">
            <tabler-box class="text-3xl mr-2" />Text
          </button>
        </div>
      </div>
    </div>

    <!-- Code Snippet -->
    <div class="vuwi-window filter drop-shadow-lg relative">
      <span
        class="absolute top-1 left-26 px-6 py-2 font-bold border-l dark:border-dark-600 vuwi-text"
      >Code Snippet</span>
      <VuwiLine />
      <div class="p-4 vuwi-dark text-sm text-teal-400">
        <code>&lt;button class="vuwi-btn">Normal&lt;/button></code>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vuwi
</route>
