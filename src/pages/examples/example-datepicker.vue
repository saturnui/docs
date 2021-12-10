<template>
  <div class="p-4">
    <div>Date Picker Examples:</div>
    <div class="vuwi-card p-2 my-2 rounded-md">
      <div class="m-1">
        Single Date
      </div>
      <DatePicker
        v-model="singleDateValue"
        :as-single="true"
      />
      <div class="p-2">
        {{ singleDateValue }}
      </div>
    </div>
    <div class="vuwi-card p-2 my-2 rounded-md">
      <div class="m-1">
        Date Range
      </div>
      <DatePicker
        v-model="rangeDateValue"
      />
      <div class="p-2">
        {{ rangeDateValue }}
      </div>
    </div>
    <div class="vuwi-card p-2 my-2 rounded-md">
      <div class="m-1">
        Custom Date Formatter
      </div>
      <div class="p-2">
        :formatter: {{ customDateFormatter }}
      </div>
      <div class="p-2">
        The date is for the returned and displayed values and the month is for the month picker in the actual picker
      </div>
      <DatePicker
        v-model="customDateValue"
        :formatter="customDateFormatter"
      />
      <div class="p-2">
        {{ customDateValue }}
      </div>
    </div>
    <div class="vuwi-card p-2 my-2 rounded-md">
      <div class="m-1">
        Disable Dates
      </div>
      <div class="p-2">
        :disable-date: (date: any) => date > new Date()
      </div>
      <DatePicker
        v-model="disableDateValue"
        :disable-date="(date: any) => date > new Date()"
      />
      <div class="p-2">
        {{ disableDateValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import DatePicker from '~/modules/vuwi/components/DatePicker/DatePicker.vue'

const customDateFormatter = {
  date: 'YYYY-MM-DD',
  month: 'MM',
}
const customDateValue = ref([dayjs().startOf('month').format(customDateFormatter.date), dayjs().endOf('day').format(customDateFormatter.date)])
const rangeDateValue = ref([dayjs().startOf('month'), dayjs().endOf('day')])
const singleDateValue = ref([dayjs().startOf('month')])
const disableDateValue = ref([dayjs().startOf('month'), dayjs().endOf('day')])
</script>
