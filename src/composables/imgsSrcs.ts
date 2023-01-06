interface StringObj {
  [key: string]: string;
}

const conditions: StringObj = {
  clear: "@/assets/sunny_weather_icon_131721.svg",
  "partly-cloudy": "@/assets/cloudy_sunny_weather_icon_131713.svg",
  cloudy: "@/assets/cloudy_sunny_weather_icon_131713.svg",
  "clear-n": "../assets/moon_weather_icon_131714.svg",
  "partly-cloudy-n": "@/assets/cloudy_moon_weather_icon_131719.svg",
  "cloudy-n": "@/assets/cloudy_moon_weather_icon_131719.svg",
  overcast: "@/assets/foggy_cloud_weather_icon_131723.svg",
  drizzle: "@/assets/drip_weather_icon_131725.svg",
  "light-rain": "@/assets/drip_weather_icon_131725.svg",
  rain: "@/assets/drip_weather_icon_131725.svg",
  "moderate-rain": "@/assets/raining_weather_icon_131726.svg",
  "heavy-rain": "@/assets/raining_weather_icon_131726.svg",
  "continuous-heavy-rain": "@/assets/foggy_cloud_weather_icon_131723.svg",
  showers: "@/assets/foggy_cloud_weather_icon_131723.svg",
  "wet-snow": "@/assets/snowing_weather_icon_131711.svg",
  "light-snow": "@/assets/snowing_weather_icon_131711.svg",
  snow: "@/assets/snowing_weather_icon_131711.svg",
  "snow-showers": "@/assets/snowy_weather_icon_131712.svg",
  hail: "@/assets/snowing_weather_icon_131711.svg",
  thunderstorm: "@/assets/lightning_cloudy_weather_icon_131717.svg",
  "thunderstorm-with-rain": "@/assets/lightning_cloudy_weather_icon_131717.svg",
  "thunderstorm-with-hail": "@/assets/lightning_cloudy_weather_icon_131717.svg",
};
export default function useGetSrcImg() {
  const getSrcImg = (condition: string) => {
    console.log("condition", condition, conditions[condition]);
    return conditions[condition];
  };
  return { getSrcImg };
}
