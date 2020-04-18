import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id?: number
  name?: string
  username?: string
}

interface Login {
  isLogin: boolean
}

type UserState = Login & User

const initialState: UserState = {
  isLogin: false,
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
      state.isLogin = true
      state.id = id
      state.name = name
      state.username = username
    },
    logout(state) {
      state = initialState
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
