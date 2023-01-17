<template>
  <footer>
    <button @click="prevCity()" class="prev">
      <Icon icon="line-md:arrow-close-right" />
    </button>
    <span>{{ selectedCity.name }}</span>
    <button @click="nextCity()" class="next">
      <Icon icon="line-md:arrow-close-right" />
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import useCities from "../composables/cities";

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const { nextCity, prevCity, selectedCity } = useCities();
    return { nextCity, prevCity, selectedCity };
  },
});
</script>

<style lang="scss" scoped>
footer {
  grid-area: f;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > button {
    background-color: #eadeb7;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prev {
    transform: rotate(180deg);
  }
  span {
    font-size: larger;
    font-weight: 700;
  }
}
</style>
