export const BASE_URL = 'https://itschool-library.onrender.com'

export async function fetchAndParse(input, init) {
    const response = await fetch(input, init)
    return response.json()
}