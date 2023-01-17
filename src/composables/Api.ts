import axios from "axios";
import { city } from "@/types/city";

const getWeatherData = async (lat: string, lon: string): Promise<void> => {
  const data = await postDataToServe(lat, lon);
  // const res = await axios.get(
  //   `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&hours=true&extra=true`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-yandex-api-key": "3860ff4b-15ea-4124-ae99-1926a4f273de",
  //     },
  //   }
  // );
  // const json = await res.data;
  console.log(data);
  return data;
};
const getCity = async (location: string) => {
  const res = await axios.get(
    `https://geocode-maps.yandex.ru/1.x?geocode=${location}&apikey=8fbbbed1-a101-40ff-a696-dd21c82ee6cd&format=json`
  );
  const json = await res.data;
  const list: city[] = [];
  json.response.GeoObjectCollection.featureMember.forEach((el: any) => {
    const obj: city = {
      point: {
        lat: el.GeoObject.Point.pos.split(" ")[1],
        lon: el.GeoObject.Point.pos.split(" ")[0],
      },
      name: el.GeoObject.name,
      description: el.GeoObject.description,
    };
    list.push(obj);
  });

  console.log(list);
  return list;
};

// const getDataFromServe = async () => {
//   const { data } = await axios.get("http://127.0.0.1:8000");
//   console.log(data);
// };
// getDataFromServe();

const postDataToServe = async (lat: string, lon: string) => {
  const { data } = await axios.post("http://127.0.0.1:8000", {
    lat: lat,
    lon: lon,
  });
  // console.log(data);
  return data;
};
// postDataToServe();
export default function getData() {
  return { getWeatherData, getCity };
}
