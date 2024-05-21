export async function GET<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: T = await response.json();
    console.log('request succeeded');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetching data failed: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred: ${error}`);
    }
  }
}

export async function POST<T, U>(url: string, data: T): Promise<U> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData: U = await response.json();
    console.log('request succeeded');
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetching data failed: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred: ${error}`);
    }
  }
}

export async function UPDATE<T, U>(url: string, data: T): Promise<U> {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData: U = await response.json();
    console.log('request succeeded');
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Updating data failed: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred: ${error}`);
    }
  }
}
