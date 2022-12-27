import axios from "axios";

async function create(url, data) {
  const response = await axios.post(url, data);

  return response.data;
}

async function list(url) {
  const response = await axios.get(url);

  return response.data;
}

const functions = {
  create,
  list,
};

export default functions;
