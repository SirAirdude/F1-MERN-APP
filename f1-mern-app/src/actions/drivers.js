import {
  CREATE_DRIVER,
  REMOVE_DRIVER,
  UPDATE_DRIVER
} from "../constants/drivers.js";

export function createNewDriver(name, birthplace, team, rank, image) {
  return {
    type: CREATE_DRIVER,
    payload: {
      name,
      birthplace,
      team,
      rank,
      image
    }
  };
}

export const removeDriver = name => ({ type: REMOVE_DRIVER, payload: name });

export const updateDriver = (name, updateDriver) => ({
  type: UPDATE_DRIVER,
  payload: {
    name,
    updateDriver
  }
});
