const userKey = import.meta.env.VITE_IMAGEN_API_KEY;
const endpointUrl = 'https://modelslab.com/api/v7/images/text-to-image';

export async function makeImagenRequest(prompt) {
  const requestBody = {
    "model_id": "imagen-3",
    "prompt": prompt || "A beautiful landscape with mountains and a river",
  }

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'key': userKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      let errorResult;
      try {
        errorResult = await response.json();
      } catch (e) {
        errorResult = { error: { message: await response.text() } };
      }
      throw new Error(`API Error (${response.status}): ${errorResult.error?.message || response.statusText || 'Unknown error'}`);
    }

    const result = await response.json();
    console.log('API Response:', result);
    return result;
  } catch (error) {
    console.error('Error making API request:', error.message);
    throw error;
  }
}
