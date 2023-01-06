<template>
  <header>
    <div class="btns">
      <button class="add" @click="showCitiesList = true">
        <Icon icon="ic:round-add" height="24" width="24" />
      </button>
      <button class="del" @click="delCity()">
        <Icon icon="ic:round-delete-forever" height="24" width="24" />
      </button>
      <template v-if="showCitiesList">
        <div class="bacdrop" @click="showCitiesList = false" />
        <div class="cities_list">
          <input
            type="text"
            v-model="searchValue"
            placeholder="Введите название"
          />
          <div class="list">
            <div
              class="item"
              v-for="item in list"
              :key="item.description + item.name"
              @click="addCity(item), (showCitiesList = false)"
            >
              <span class="name">{{ item.name }}</span>
              <span class="description">{{ item.description }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { city } from "@/types/city";
import getData from "../composables/Api";
import useCities from "../composables/cities";

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const { delCity, addCity } = useCities();

    const showCitiesList = ref<boolean>(false);
    const list = ref<city[]>([]);
    const searchValue = ref<string>("");

    let timer: any = null;
    const timeout = 300;
    const { getCity } = getData();

    watch(searchValue, () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        list.value = await getCity(searchValue.value);
      }, timeout);
    });

    return { addCity, delCity, showCitiesList, list, searchValue };
  },
});
</script>

<style lang="scss" scoped>
header {
  grid-area: h;
  width: 100%;
  display: flex;
  justify-content: end;
  .btns {
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: relative;
    > button {
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #c4c4c4;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      padding: 3px;
      align-items: center;
      justify-content: center;
      color: #474747;
    }

    .bacdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      z-index: 10;
    }
    .cities_list {
      z-index: 11;
      position: absolute;
      right: 0;
      padding: 12px;
      background-color: rgb(232 236 237 / 96%);
      top: 110%;
      border-radius: 8px;
      box-shadow: 3px 4px 1px 3px rgb(0 0 0 / 25%),
        2px 1px 2px 1px rgb(0 0 0 / 10%);
      display: flex;
      flex-direction: column;
      gap: 8px;
      > input {
        border: 1px solid #c4c4c4;
        padding: 4px 8px;
        border-radius: 8px;
        outline: none;
      }

      .list::-webkit-scrollbar {
        display: none;
      }
      .list {
        display: flex;
        flex-direction: column;
        max-height: 300px;
        overflow: scroll;
        .item {
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          align-items: start;
          border-radius: 8px;
          cursor: pointer;
          .name {
            font-weight: 500;
          }
          .description {
            font-size: 10px;
            font-weight: 300;
          }
        }
        .item:hover {
          background-color: rgb(221 223 223);
          box-shadow: 0 0 8px 2px rgb(221 223 223);
        }
      }
    }
  }
}
</style>
