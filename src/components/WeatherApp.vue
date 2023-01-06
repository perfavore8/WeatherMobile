<template>
  <div class="wrapper">
    <HeaderBtns />
    <main>
      <div class="fact">
        <div class="temp">{{ weather.fact?.temp }}<span>°</span></div>
        <WeatherImg
          :condition="weather.fact?.condition"
          :daytime="weather.fact?.daytime"
        />
        <span class="city">{{ selectedCity.name }}</span>
      </div>
      <div class="another_info">
        <div class="humidity">
          <Icon class="icon" width="24" icon="material-symbols:humidity-mid" />
          <span>{{ weather.fact.humidity }}%</span>
        </div>
        <div class="wind_speed">
          <Icon class="icon" width="24" icon="uil:wind" />
          <span>{{ weather.fact.wind_speed }}M/S</span>
        </div>
        <div class="temp_water">
          <Icon class="icon" width="24" icon="mdi:coolant-temperature" />
          <span>{{
            weather.fact.temp_water ? weather.fact.temp_water + "°" : "-"
          }}</span>
        </div>
      </div>
      <div class="forecasts_parts">
        <ForecastParts
          :forecast="forecast"
          v-for="forecast in weather.forecasts"
          :key="forecast.date"
        />
      </div>
    </main>
    <FooterSliderCities />
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import WeatherImg from "./WeatherImg.vue";
import FooterSliderCities from "./FooterSliderCities.vue";
import HeaderBtns from "./HeaderBtns.vue";
import ForecastParts from "./ForecastParts.vue";
import { defineComponent, ref, watch } from "vue";
import getData from "../composables/Api";
import useGetSrcImg from "../composables/imgsSrcs";
import useCities from "@/composables/cities";

export default defineComponent({
  components: {
    Icon,
    WeatherImg,
    ForecastParts,
    FooterSliderCities,
    HeaderBtns,
  },
  name: "WeatherApp",
  async setup() {
    const { getWeatherData } = getData();
    const { selectedCity } = useCities();

    const weather = ref<any>({});

    watch(selectedCity, () => getWeather());

    const getWeather = async () => {
      const point = selectedCity.value.point;
      weather.value = await getWeatherData(point.lat, point.lon);
    };
    getWeather();
    const { getSrcImg } = useGetSrcImg();
    console.log("weather", weather.value);

    return { weather, selectedCity, getSrcImg };
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 50px calc(100% - 100px) 50px;
  grid-template-areas:
    "h h h h h h"
    "c c c c c c"
    "f f f f f f";
  align-items: center;
  // width: 320px;
  // height: 650px;
  height: 100%;
  min-height: 100vh;
  background-color: #fff1c9;
  padding: 16px;
  transition: all 0.3s ease-out;
  main {
    grid-area: c;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    height: 100%;
    gap: max(8px, 3%);
    .fact {
      display: flex;
      flex-direction: column;
      align-items: center;
      // height: 500%;
      position: relative;
      .temp {
        position: relative;
        // left: -10px;
        font-size: 10rem;
        line-height: 1;
        z-index: 5;
        span {
          position: absolute;
          right: -50px;
        }
      }
      .img {
        z-index: 4;
        position: absolute;
        top: 8%;
        width: 100%;
        max-width: 30rem;
        opacity: 0.8;
      }
      .city {
        // position: absolute;
        // top: 63%;
        margin-top: 140px;
        margin-top: 45%;
        font-size: 3rem;
        font-weight: 700;
        z-index: 3;
      }
    }
    .another_info {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 700;
        text-shadow: #0000004b;
        .icon {
          box-sizing: content-box;
          // border: 1px solid #e6e6e6;
          box-shadow: 2px 2px 3px 2px #0000004b;
          padding: 8px;
          border-radius: 50%;
        }
      }
    }
    .forecasts_parts {
      display: flex;
      flex-direction: row;
      gap: 8px;
      overflow-x: scroll;
      justify-content: space-between;
      padding-bottom: 8px;
    }
    .forecasts_parts::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
