import { combineReducers } from '@reduxjs/toolkit'
import userReducer from 'features/user/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
