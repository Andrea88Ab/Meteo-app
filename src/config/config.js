
const OPEN_WEATHER_MAP_API_KEY = '2e335c399ad262bc6c256c43a4489df3';

const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&&lang=it&`,
};

export default config;
