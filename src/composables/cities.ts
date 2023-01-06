import { city } from "@/types/city";
import { computed, onMounted, ref } from "vue";
let cities: city[] = [
  {
    point: {
      lat: "43.665208",
      lon: "-79.39271",
    },
    name: "Торонто",
    description: "провинция Онтарио, Канада",
  },
];
const selectedCityIdx = ref(0);
export default function useCities() {
  const selectedCity = computed(() => cities[selectedCityIdx.value]);

  onMounted(() => {
    cities = JSON.parse(
      localStorage.getItem("cities") ||
        JSON.stringify([
          {
            point: {
              lat: "43.665208",
              lon: "-79.39271",
            },
            name: "Торонто",
            description: "провинция Онтарио, Канада",
          },
        ])
    );
    selectedCityIdx.value = JSON.parse(
      localStorage.getItem("selectedCityIdx") || "0"
    );
  });

  const nextCity = () => {
    selectedCityIdx.value == cities.length - 1
      ? (selectedCityIdx.value = 0)
      : (selectedCityIdx.value += 1);
    setSelectedCityIdx();
  };
  const prevCity = () => {
    selectedCityIdx.value == 0
      ? (selectedCityIdx.value = cities.length - 1)
      : (selectedCityIdx.value -= 1);
    setSelectedCityIdx();
  };
  const delCity = () => {
    cities.splice(selectedCityIdx.value, 1);
    prevCity();
    setCities();
  };
  const addCity = (newCity: city) => {
    cities.push(newCity);
    setCities();
  };

  const setCities = () => {
    localStorage.setItem("cities", JSON.stringify(cities));
  };

  const setSelectedCityIdx = () => {
    localStorage.setItem(
      "selectedCityIdx",
      JSON.stringify(selectedCityIdx.value)
    );
  };

  return { cities, selectedCity, delCity, addCity, nextCity, prevCity };
}
