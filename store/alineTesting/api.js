import axios from "axios";
const alineTesting = axios.create({
  baseURL: "https://hello.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function alinetesting_delete_users_id_delete(payload) {
  return alineTesting.delete(`/users/${payload.id}/`);
}

export const apiService = {
  alinetesting_delete_users_id_delete
};