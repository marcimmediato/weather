const forecastData = {
  city: {
    id: 5095779,
    name: 'Bloomfield',
    coord: {
      lon: -74.1855,
      lat: 40.8068
    },
    country: 'US',
    population: 49120
  },
  cod: '200',
  message: 214.162126,
  cnt: 5,
  list: [
    {
      dt: 1528387200,
      temp: {
        day: 68.14,
        min: 62.47,
        max: 68.14,
        night: 62.47,
        eve: 68.14,
        morn: 68.14
      },
      pressure: 1019.13,
      humidity: 60,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      speed: 4.72,
      deg: 188,
      clouds: 32
    },
    {
      dt: 1528473600,
      temp: {
        day: 76.33,
        min: 56.1,
        max: 79.75,
        night: 66.52,
        eve: 79.75,
        morn: 56.1
      },
      pressure: 1022.15,
      humidity: 63,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'sky is clear',
          icon: '01d'
        }
      ],
      speed: 3.71,
      deg: 255,
      clouds: 0
    },
    {
      dt: 1528560000,
      temp: {
        day: 68.14,
        min: 64.36,
        max: 75.58,
        night: 67.28,
        eve: 75.58,
        morn: 64.71
      },
      pressure: 1018.88,
      humidity: 94,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      speed: 3.36,
      deg: 242,
      clouds: 88,
      rain: 7.02
    },
    {
      dt: 1528646400,
      temp: {
        day: 65.64,
        min: 53.1,
        max: 65.64,
        night: 53.1,
        eve: 61.7,
        morn: 62.31
      },
      pressure: 1019.12,
      humidity: 0,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      speed: 4.21,
      deg: 348,
      clouds: 26,
      rain: 19.16
    },
    {
      dt: 1528732800,
      temp: {
        day: 63.9,
        min: 54.88,
        max: 63.9,
        night: 59.61,
        eve: 60.42,
        morn: 54.88
      },
      pressure: 1014.42,
      humidity: 0,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      speed: 3.2,
      deg: 151,
      clouds: 12,
      rain: 0.68
    }
  ]
};

export default forecastData;
