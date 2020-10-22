import api from './api-config';

export const getOnePet = async (id, petID) => {
  const resp = await api.get(`/households/${id}/pets/${petID}`);
  return resp.data;
}

export const postPet = async (id, petData) => {
  const resp = await api.post(`/households/${id}/pets`, petData);
  return resp.data;
}

export const putPet = async (id, petData, pet_id) => {
  const resp = await api.put(`/households/${id}/pets/${pet_id}`, petData);
  return resp.data;
}

export const deletePet = async (id, pet_id) => {
  const resp = await api.delete(`/households/${id}/pets/${pet_id}`);
  return resp;
}

