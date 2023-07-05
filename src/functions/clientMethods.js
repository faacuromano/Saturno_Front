import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getUser() {
  try {
    const response = await axios({
      url: `${baseUrl}/usuario`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}
export async function getClient() {
  try {
    const response = await axios({
      url: `${baseUrl}/cliente`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function getUserByUsername(username, token) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${baseUrl}/usuario/${username}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function getClientByUsername(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/cliente/${username}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function getClientProfile(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/perfilDe/${username}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function authClient(user, passw) {
  try {
    const response = await axios({
      url: `${baseUrl}/Usuario/login?username=${user}&password=${passw}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function DeleteClient(username, token) {
  console.log("function: ", username);
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${baseUrl}/cliente?username=${username}`,
      method: "DELETE",
      
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function RegisterClient(client) {
  try {
    axios({
      url: `${baseUrl}/cliente`,
      method: "POST",
      data: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    const listUser = getUser();
    console.log("listUser", listUser);
  } catch (errors) {
    console.log(errors);
  }
}

export async function editClient(username, data, token) {
  try {
    const response = await axios({
      url: `${baseUrl}/Usuario/${username}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}
