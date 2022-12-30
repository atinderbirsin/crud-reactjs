import axios from "axios";

async function create(url, data) {
  const response = await axios.post(url, data);

  return response.data;
}

async function list(url) {
  const response = await axios.get(url);

  return response.data;
}

async function remove(url, id) {
   const response = await axios.delete(url, { data: { id } });
   
   return response.data;
}

async function update(url, user) {
    const response = await axios.patch(url, user);

    return response.data;
}

const functions = {
  create,
  list,
  remove,
  update,
};

export default functions;
