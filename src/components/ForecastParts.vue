<template>
  <div class="column">
    <span class="day">{{ preparationDate(forecast.date) }}</span>
    <div class="day_temp temp">
      <div class="icon">
        <WeatherImg
          :condition="forecast.parts.day_short?.condition"
          :daytime="forecast.parts.day_short?.daytime"
        />
      </div>
      <span>{{ forecast.parts.day_short?.temp }}</span>
    </div>
    <div class="night_temp temp">
      <div class="icon">
        <WeatherImg
          :condition="forecast.parts.night_short?.condition"
          :daytime="forecast.parts.night_short?.daytime"
        />
      </div>
      <span>{{ forecast.parts.night_short?.temp }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import WeatherImg from "@/components/WeatherImg.vue";
import useDate from "@/composables/preparationDate";

defineProps<{
  forecast: {
    date: string;
    parts: {
      day_short: {
        condition: string;
        daytime: string;
        temp: number;
      };
      night_short: {
        condition: string;
        daytime: string;
        temp: number;
      };
    };
  };
}>();

const preparationDate = useDate();
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 4px;
  padding: 8px 7px 2px;
  border-radius: 8px;
  background-color: hsl(44, 100%, 79%);
  box-shadow: 2px 3px 1px 2px rgb(0 0 0 / 25%), 2px 1px 2px 1px rgb(0 0 0 / 10%);
  .day {
    font-size: medium;
    font-weight: 700;
    white-space: nowrap;
  }
  .temp {
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon {
      margin-top: 4px;
      margin-right: 2px;
      > img {
        width: 32px;
      }
    }
    > span {
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
    }
  }
}
</style>
