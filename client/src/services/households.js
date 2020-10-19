import api from './api-config';

export const getAllHouseholds = async () => {
  const resp = await api.get('/households');
  return resp.data;
}

export const getOneHousehold = async (id) => {
  const resp = await api.get(`/households/${id}`);
  return resp.data;
}

export const postHousehold = async (foodData) => {
  const resp = await api.post('/households', {food: foodData});
  return resp.data;
}

export const putHousehold = async (id, foodData) => {
  const resp = await api.put(`/households/${id}`, {food: foodData});
  return resp.data;
}

export const destroyHousehold = async (id) => {
  const resp = await api.delete(`/households/${id}`);
  return resp;
}

export const addFlavor = async(foodId, flavorId) => {
  const resp = await api.put(`/flavors/${flavorId}/households/${foodId}`);
  return resp.data;
}
