<template>
  <div class="">
    <img
      src="https://img.freepik.com/free-vector/earth-view-night-from-alien-planet-neon-space_33099-1876.jpg?size=626&ext=jpg"
      class="absolute sa-tl h-65 w-full object-cover rounded-t-xl overflow-hidden"
    />
    <div class="relative flex flex-col items-center gap-4 z-1">
      <div class="flex justify-center">
        <div class="relative w-24 h-24">
          <VTooltip show="focus" component="demo-tooltip" class="absolute top-2 right-2 z-10">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Colors"
                  link="/styling/color"
                  action="See colors"
                >Saturn provides default colors to provide consistency across the application.</DemoTooltip>
              </div>
            </template>
            <div tabindex="0" class="bg-success rounded-full w-6 h-6 border-3 border-white"></div>
          </VTooltip>
          <VTooltip show="focus" target="#profile" component="demo-tooltip">
            <template #tooltip>
              <div class="w-70 space-y-3">
                <DemoTooltip
                  title="Avatar Component"
                  link="/components/avatar"
                >Use the avatars to represent users and optionally their status. Use masks to create unique designs.</DemoTooltip>
              </div>
            </template>
            <div tabindex="0" class="bg-purple-600 w-full h-full p-1 sa-mask-5">
              <VAvatar
                id="profile"
                tabindex="0"
                name="Saturn"
                image="/demo/profile.png"
                class="sa-mask-5 text-5xl bg-dark-700"
              />
            </div>
          </VTooltip>
        </div>
      </div>
      <div class="text-center font-bold text-3xl text-white">Gizmo</div>
      <div
        class="flex gap-3 justify-center bg-black bg-opacity-70 p-4 px-8 font-bold leading-tight text-center text-white rounded-full"
      >
        <div>Alien Lifeform</div>
        <div>&#183;</div>
        <div>Cute</div>
        <div>&#183;</div>
        <div>Superstar</div>
      </div>

      <div class="flex gap-3 w-full max-w-120 justify-between px-8 font-bold mt-12 mb-8">
        <div class="text-center uppercase text-xs">
          <div>Followers</div>
          <div class="text-pink-500 dark:text-teal-400 text-4xl font-bold">684B</div>
        </div>
        <div class="text-center uppercase text-xs">
          <div>Following</div>
          <div class="text-pink-500 dark:text-teal-400 text-4xl font-bold">16K</div>
        </div>
        <div class="text-center uppercase text-xs">
          <div>Klout</div>
          <div class="text-pink-500 dark:text-teal-400 text-4xl font-bold">273k</div>
        </div>
      </div>
    </div>

    <!-- <div class="flex flex-wrap justify-center gap-4">
      <div class="w-24 h-24 sa-mask-10">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-9">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-8">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-7">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-6">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-5">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-4">
        <img src="/demo/profile.png" />
      </div>

      <div class="w-24 h-24 sa-mask-3">
        <img src="/demo/profile.png" />
      </div>
    </div> -->

    <div class="flex items-center justify-center gap-4">
      <VTooltip placement="top" show="focus" component="demo-tooltip">
        <template #tooltip>
          <DemoTooltip
            title="Button Component"
            link="/components/button"
          >Buttons can be styled anyway and with any content such as icons and text</DemoTooltip>
        </template>
        <VButton size="lg" class="border border-blue-400 text-blue-400 gap-2 font-bold">
          <div>
            <tabler-check />
          </div>
          <div>Follow</div>
        </VButton>
      </VTooltip>

      <VTooltip placement="top" show="focus" component="demo-tooltip">
        <template #tooltip>
          <DemoTooltip
            title="Button Component"
            link="/components/button"
          >Buttons support an icon mode.</DemoTooltip>
        </template>
        <VButton icon size="xl" class="text-dark-500">
          <tabler-bell />
        </VButton>
      </VTooltip>
    </div>
  </div>
</template>
