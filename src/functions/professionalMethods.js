import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProfessionals() {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function get_n_Professionals(n) {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional/cuted/${n}`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function IDGetProfesional(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional/${id}`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}
