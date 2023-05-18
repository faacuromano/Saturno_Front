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

export async function IDGetProfesional(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/Profesional/${id}`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function RegisterProfessional(professional) {
  console.log("Register professional ", professional);
  try {
    axios({
      url: `${baseUrl}/profesional`,
      method: "POST",
      data: JSON.stringify(professional),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    const listUser = getProfessionals();
    console.log(listUser);
  } catch (errors) {
    console.log(errors);
  }
}
