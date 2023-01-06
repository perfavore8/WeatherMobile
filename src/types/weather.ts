export interface weather {
  now: string;
  now_dt: string;
  fact: {
    cloudness: number;
    condition: string;
    daytime: string;
    feels_like: number;
    humidity: number;
    icon: string;
    is_thunder: boolean;
    obs_time: number;
    polar: boolean;
    prec_prob: number;
    prec_strength: number;
    prec_type: number;
    pressure_mm: number;
    pressure_pa: number;
    season: string;
    soil_moisture: number;
    soil_temp: number;
    source: string;
    temp: number;
    uptime: number;
    uv_index: number;
    wind_dir: string;
    wind_gust: number;
    wind_speed: number;
  };
}
