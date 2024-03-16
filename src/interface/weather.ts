export interface Weather {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    temp:number
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };

  timezone: number;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}
