import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id?: number
  name?: string
  username?: string
}

interface Login {
  login: boolean
}

type UserState = Login & User

const initialState: UserState = {
  login: false,
  id: undefined,
  name: undefined,
  username: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      const { id, name, username } = action.payload
      state = { login: true, id, name, username }
    },
    logout(state) {
      state = initialState
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
