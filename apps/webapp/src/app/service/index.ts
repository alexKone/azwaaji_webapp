import CONSTANTS from "../../constants";

export const getUsers = async () => {
  const response = await fetch(`${CONSTANTS.baseUrl}/profiles.json`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.json();

  return await data;
};


