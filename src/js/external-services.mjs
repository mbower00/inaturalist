async function callAPI(URLextension) {
  try {
    const response = await fetch(`https://api.inaturalist.org/v1/${URLextension}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function searchPlaces(searchQuery) {
  return await callAPI(`places/autocomplete?q=${searchQuery}`)
}

export async function searchIdentifications(placeID) {
  return await callAPI(`identifications?place_id=${placeID}`)
}