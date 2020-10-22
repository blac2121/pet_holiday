import api from './api-config';

export const getOneContact = async (id, contact_id) => {
  const resp = await api.get(`/households/${id}/contacts/${contact_id}`);
  return resp.data;
}

export const postContact = async (id, contactData) => {
  const resp = await api.post(`/households/${id}/contacts`, contactData);
  return resp.data;
}

export const putContact = async (id, contactData, contact_id) => {
  const resp = await api.put(`/households/${id}/contacts/${contact_id}`, contactData);
  return resp.data;
}

export const deleteContact = async (id, contact_id) => {
  const resp = await api.delete(`/households/${id}/contacts/${contact_id}`);
  return resp;
}