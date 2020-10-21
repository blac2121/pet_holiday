import api from './api-config';

export const getAllHouseholds = async () => {
  const resp = await api.get('/households');
  return resp.data;
}

export const getOneHousehold = async (id) => {
  const resp = await api.get(`/households/${id}`);
  return resp.data;
}

export const postHousehold = async (householdData) => {
  const resp = await api.post('/households', {household: householdData});
  return resp.data;
}

export const postPet = async (id, petData) => {
  console.log(id)
  const resp = await api.post(`/households/${id}/pets`, petData);
  return resp.data;
}

export const putHousehold = async (id, householdData) => {
  const resp = await api.put(`/households/${id}`, {household: householdData});
  return resp.data;
}

export const deleteHousehold = async (id) => {
  const resp = await api.delete(`/households/${id}`);
  return resp;
}

export const addFlavor = async(foodId, flavorId) => {
  const resp = await api.put(`/flavors/${flavorId}/households/${foodId}`);
  return resp.data;
}
