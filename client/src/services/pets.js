import api from './api-config';

export const postPet = async (id, petData) => {
  const resp = await api.post(`/households/${id}/pets`, petData);
  return resp.data;
}

export const putPet = async (id, petData, pet_id) => {
  const resp = await api.put(`/households/${id}/pets${pet_id}`, {household: petData});
  return resp.data;
}

export const deletePet = async (id) => {
  const resp = await api.delete(`/households/${id}`);
  return resp;
}

