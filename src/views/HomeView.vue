<template>
  <div class="home">
    <WeatherApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherApp from "@/components/WeatherApp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    WeatherApp,
  },
});
</script>
