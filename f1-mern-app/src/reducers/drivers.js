import {
  CREATE_DRIVER,
  REMOVE_DRIVER,
  UPDATE_DRIVER
} from "../constants/drivers.js";

import axios from "axios";

const searchUrl = "https://f1-mern-app-api.herokuapp.com";
// const searchUrl = "localhost:3001";

let driverList = [];

const DEFAULT_STATE = {
  drivers: driverList
};

async function getDrivers() {
  try {
    let res = await axios({
      url: searchUrl,
      method: "get",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getDrivers().then(res => {
  res.map(driver => {
    driverList.push(driver);
  });
});

export default function driverReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers, action.payload]
      };
    case REMOVE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter((driver, name) => {
          return name !== action.payload;
        })
      };
    case UPDATE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.map((driver, index) => {
          if (index !== action.payload.name) return driver;
          return {
            ...driver,
            ...action.payload.updateDriver
          };
        })
      };
    default:
      return state;
  }
}
