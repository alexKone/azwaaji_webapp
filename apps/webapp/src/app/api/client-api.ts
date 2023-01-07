import CONSTANTS from "../../constants"

export async function clientApi(endpoint: string, method = 'GET', data: any = null): Promise<any> {
  try {
    const apiToken: string = getTokenFromCookieOrLocalStorage()
    const headers: HeadersInit = { 'Content-Type': 'application/json' }
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`
    }
    const response = await fetch(`${CONSTANTS.baseUrl}/${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

function getTokenFromCookieOrLocalStorage(): string {
  // Check if the token is stored in a cookie
  const cookieValue = getCookie('api_token');
  if (cookieValue) {
    return cookieValue;
  }

  // Check if the token is stored in local storage
  const localStorageValue = localStorage.getItem('api_token');
  if (localStorageValue) {
    return localStorageValue;
  }

  // If the token is not found, return an empty string
  return '';
}

function getCookie(name: string): string | null {
  // Split the cookie string on ';' to get an array of individual cookies
  const cookies = document.cookie.split(';');

  // Loop through the cookies array and find the cookie with the specified name
  for (let cookie of cookies) {
    // Trim the leading whitespace from the cookie string
    cookie = cookie.trim();

    // Check if the cookie string begins with the specified name
    if (cookie.startsWith(name + '=')) {
      // Return the value of the cookie (everything after the '=' sign)
      return cookie.substring(name.length + 1);
    }
  }

  // If the cookie is not found, return null
  return null;
}
