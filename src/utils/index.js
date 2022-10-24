import {API_URL, weatherAppID, weatherBaseURL} from './config';

export const fetchWeatherAPI = async (Lat, Lon) => {
  try {
    let response = await fetch(
      `${weatherBaseURL}lat=${Lat}&lon=${Lon}&appid=${weatherAppID}`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
export const fetchUsageAPI = async date => {
  try {
    let response = await fetch(`${API_URL}tutorials?date=${date}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
export const fetchTotalUsageAPI = async date => {
  try {
    let response = await fetch(`${API_URL}tutorials/total?date=${date}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const currentTime = (timezoneIn, dtIn) => {
  return `${new Date(dtIn + timezoneIn * 1000).toUTCString()}`;
};

export const transformDataForBarChart = number => {
  // random ranges > number < inscribed to distinguish colors
  if (number <= 30) {
    return {
      value: number,
      svg: {
        fill: 'red',
      },
    };
  } else if (number > 30 && number < 70) {
    return {
      value: number,
      svg: {
        stroke: 'orange',
        strokeWidth: 2,
        fill: '#FFD580',
      },
    };
  } else {
    return {
      value: number,
      svg: {
        fill: 'green',
      },
    };
  }
};

export const dataSource = [
  {
    name: 'Smart CarPark',
    src: require('../../assets/carPark.png'),
    src_white: require('../../assets/carPark-white.png'),
    switch: false,
  },
  {
    name: 'Smart AC',
    src: require('../../assets/air-conditioner.png'),
    src_white: require('../../assets/air-conditioner-white.png'),
    switch: false,
  },
  {
    name: 'Smart Intercom',
    src: require('../../assets/intercom.png'),
    src_white: require('../../assets/intercom-white.png'),
    switch: false,
  },
  {
    name: 'Other',
    src: require('../../assets/qrCode.png'),
    src_white: require('../../assets/qrCode-white.png'),
    switch: false,
  },
];
