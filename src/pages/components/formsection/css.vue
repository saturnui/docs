<template>
  <div class="sa-formsection">
    <div class="md:col-span-1">
      <div class="p-4 sm:px-0">
        <div class="sa-formsection-title">
          <span class="sa-formsection-title">Profile</span>
        </div>
        <div class="sa-formsection-desc">
          <span class="sa-formsection-desc">Public profile available for all to see.</span>
        </div>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-6 sm:col-span-4">
          <div class="space-y-4">
            <div class="sa-textinput border sa-border">
              <div class="flex flex-col h-full w-full">
                <label for="name" class="sa-textinput-label">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="sa-textinput border sa-border">
              <div class="flex flex-col h-full w-full">
                <label for="email" class="sa-textinput-label">Email</label>
                <input
                  name="email"
                  type="text"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
