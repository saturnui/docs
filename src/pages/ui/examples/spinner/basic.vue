<script setup lang="ts">
const percent = ref(35)
// setInterval(() => {
//   if (percent.value >= 100) percent.value = 0
//   else percent.value += 1
// }, 20)
</script>

<template>
  <div class="vuwi-content p-3 flex gap-8 items-center">
    <div class="vuwi-spinner animate-spin w-8 h-8" role="status">
      <span class="sr-only">Loading...</span>
    </div>

    <!-- <div
      class="vuwi-spinner vuwi-spin-slowest w-20 h-20 min-w-8 min-h-8 border-10 border-yellow-400 border-r-transparent"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>-->
    <div class="grid gap-4">
      <VuwiProgressCircle :percent="percent" class="vuwi-highlight" color="border-red-500" :width="12">
        <div class="font-bold">{{ percent }}</div>
      </VuwiProgressCircle>
      <VuwiProgressCircle
        :percent="percent"
        class="bg-gray-700"
        color="border-teal-500 bg-teal-500"
        :width="6"
      >
        <div class="flex items-center justify-center rounded-full w-10 h-10 font-bold text-lg bg-gray-800">{{ percent }}</div>
      </VuwiProgressCircle>
      <VuwiProgressCircle
        :percent="percent"
        class="vuwi-highlight"
        color="border-purple-500 bg-gray-700 dark:bg-yellow-400"
        :width="6"
      />
      <VuwiProgressCircle :percent="percent" color="border-yellow-500 bg-yellow-400" :width="1" />
    </div>

    <div class="grid gap-4">
      <VuwiProgressCircle
        :percent="25"
        class="vuwi-highlight"
        color="border-red-500 bg-red-500"
        :width="12"
      />
    </div>

    <div class="set-size charts-container">
      <div class="pie-wrapper progress-30">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper progress-60">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper progress-90">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper progress-45">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper progress-75">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper progress-95">
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
      </div>

      <div class="pie-wrapper pie-wrapper--solid progress-65"></div>

      <div class="pie-wrapper pie-wrapper--solid progress-25"></div>

      <div class="pie-wrapper pie-wrapper--solid progress-88"></div>
    </div>
  </div>
</template>

<style>
.charts-container:after {
  clear: both;
  content: "";
  display: table;
}

.pie-wrapper {
  height: 5em;
  width: 5em;
  float: left;
  margin: 15px;
  position: relative;
}
.pie-wrapper:nth-child(3n + 1) {
  clear: both;
}
.pie-wrapper .pie {
  height: 100%;
  width: 100%;
  /* THIS IS THE ONE!!!! */
  clip: rect(0, 5em, 5em, 2.5em);
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper .pie .half-circle {
  height: 100%;
  width: 100%;
  border: 4px solid #3498db;
  border-radius: 50%;
  clip: rect(0, 2.5em, 5em, 0);
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper.progress-30 .pie .half-circle {
  border-color: #3498db;
}
.pie-wrapper.progress-30 .pie .left-side {
  transform: rotate(108deg);
}
.pie-wrapper.progress-30 .pie .right-side {
  display: none;
}
.pie-wrapper.progress-60 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-60 .pie .half-circle {
  border-color: #9b59b6;
}
.pie-wrapper.progress-60 .pie .left-side {
  transform: rotate(216deg);
}
.pie-wrapper.progress-60 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-90 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-90 .pie .half-circle {
  border-color: #e67e22;
}
.pie-wrapper.progress-90 .pie .left-side {
  transform: rotate(324deg);
}
.pie-wrapper.progress-90 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-45 .pie .half-circle {
  border-color: #1abc9c;
}
.pie-wrapper.progress-45 .pie .left-side {
  transform: rotate(162deg);
}
.pie-wrapper.progress-45 .pie .right-side {
  display: none;
}
.pie-wrapper.progress-75 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-75 .pie .half-circle {
  border-color: #8e44ad;
}
.pie-wrapper.progress-75 .pie .left-side {
  transform: rotate(270deg);
}
.pie-wrapper.progress-75 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-95 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-95 .pie .half-circle {
  border-color: #e74c3c;
}
.pie-wrapper.progress-95 .pie .left-side {
  transform: rotate(342deg);
}
.pie-wrapper.progress-95 .pie .right-side {
  transform: rotate(180deg);
}

.pie-wrapper--solid {
  border-radius: 50%;
  overflow: hidden;
}
.pie-wrapper--solid:before {
  border-radius: 0 100% 100% 0/50%;
  content: "";
  display: block;
  height: 100%;
  margin-left: 50%;
  transform-origin: left;
}
.pie-wrapper--solid.progress-65 {
  background: linear-gradient(to right, #e67e22 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-65:before {
  background: #e67e22;
  transform: rotate(126deg);
}
.pie-wrapper--solid.progress-25 {
  background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-25:before {
  background: #34495e;
  transform: rotate(-270deg);
}
.pie-wrapper--solid.progress-88 {
  background: linear-gradient(to right, #3498db 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-88:before {
  background: #3498db;
  transform: rotate(43.2deg);
}
</style>
