import axios from 'axios'

interface Oauth {
  username: string
}

interface Data {
  id: number
  name: string
  Oauth: Oauth
}

interface Result {
  success: boolean
  message: string
  data: Data | null
}

interface User {
  id: number
  name: string
  username: string
}

export const authenticate = async (): Promise<User | null> => {
  const response = await axios.get('/api/oauth/login')
  const result: Result = await response.data
  if (result.data == null) {
    return null
  } else {
    return {
      id: result.data.id,
      name: result.data.name,
      username: result.data.Oauth.username,
    }
  }
}
