<template>
  <img
    class="img"
    src="@/assets/moon_weather_icon_131714.svg"
    v-if="condition == 'clear' && daytime == 'n'"
  />
  <img
    class="img"
    src="@/assets/cloudy_moon_weather_icon_131719.svg"
    v-else-if="condition == 'partly-cloudy' && daytime == 'n'"
  />
  <img
    class="img"
    src="@/assets/cloudy_moon_weather_icon_131719.svg"
    v-else-if="condition == 'cloudy' && daytime == 'n'"
  />
  <img
    class="img"
    src="@/assets/sunny_weather_icon_131721.svg"
    v-else-if="condition == 'clear'"
  />
  <img
    class="img"
    src="@/assets/cloudy_sunny_weather_icon_131713.svg"
    v-else-if="condition == 'partly-cloudy'"
  />
  <img
    class="img"
    src="@/assets/cloudy_sunny_weather_icon_131713.svg"
    v-else-if="condition == 'cloudy'"
  />
  <img
    class="img"
    src="@/assets/foggy_cloud_weather_icon_131723.svg"
    v-else-if="condition == 'overcast'"
  />
  <img
    class="img"
    src="@/assets/drip_weather_icon_131725.svg"
    v-else-if="condition == 'drizzle'"
  />
  <img
    class="img"
    src="@/assets/drip_weather_icon_131725.svg"
    v-else-if="condition == 'light-rain'"
  />
  <img
    class="img"
    src="@/assets/drip_weather_icon_131725.svg"
    v-else-if="condition == 'rain'"
  />
  <img
    class="img"
    src="@/assets/raining_weather_icon_131726.svg"
    v-else-if="condition == 'moderate-rain'"
  />
  <img
    class="img"
    src="@/assets/raining_weather_icon_131726.svg"
    v-else-if="condition == 'heavy-rain'"
  />
  <img
    class="img"
    src="@/assets/foggy_cloud_weather_icon_131723.svg"
    v-else-if="condition == 'continuous-heavy-rain'"
  />
  <img
    class="img"
    src="@/assets/foggy_cloud_weather_icon_131723.svg"
    v-else-if="condition == 'showers'"
  />
  <img
    class="img"
    src="@/assets/snowing_weather_icon_131711.svg"
    v-else-if="condition == 'wet-snow'"
  />
  <img
    class="img"
    src="@/assets/snowing_weather_icon_131711.svg"
    v-else-if="condition == 'light-snow'"
  />
  <img
    class="img"
    src="@/assets/snowing_weather_icon_131711.svg"
    v-else-if="condition == 'snow'"
  />
  <img
    class="img"
    src="@/assets/snowy_weather_icon_131712.svg"
    v-else-if="condition == 'snow-showers'"
  />
  <img
    class="img"
    src="@/assets/snowing_weather_icon_131711.svg"
    v-else-if="condition == 'hail'"
  />
  <img
    class="img"
    src="@/assets/lightning_cloudy_weather_icon_131717.svg"
    v-else-if="condition == 'thunderstorm'"
  />
  <img
    class="img"
    src="@/assets/lightning_cloudy_weather_icon_131717.svg"
    v-else-if="condition == 'thunderstorm-with-rain'"
  />
  <img
    class="img"
    src="@/assets/lightning_cloudy_weather_icon_131717.svg"
    v-else-if="condition == 'thunderstorm-with-hail'"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    condition: String,
    daytime: String,
  },
});
</script>
