import axios from 'axios'

const BASE_URL = process.env.API_URL
export const getTokenFromAPIServer = async (provider: string, user: any) => {
  const { data } = await axios.post(`${BASE_URL}/auth/oauth/${provider}`, {
    user,
  })
  if (data.access_token) return data.access_token
  return null
}
