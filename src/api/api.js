import axios from "axios";

async function create(url, data) {
    const response = await axios.post(url, data);

    return response.data;
};

export default create;