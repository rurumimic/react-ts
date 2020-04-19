import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number | null
  name: string | null
  username: string | null
}

interface Login {
  isLogin: boolean
}

type UserState = Login & User

const initialState: UserState = {
  isLogin: false,
  id: null,
  name: null,
  username: null,
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
      state.isLogin = false
      state.id = null
      state.name = null
      state.username = null
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
