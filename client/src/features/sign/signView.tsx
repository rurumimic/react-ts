import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { logout } from 'features/user/userSlice'
import { url } from 'features/url'
import { Button } from 'react-bootstrap'

export const SignView = (): JSX.Element => {
  const dispatch = useDispatch()
  const { isLogin, name } = useSelector((state: RootState) => state.user)

  const signout = (): void => {
    dispatch(logout())
    window.location.replace(url('/logout'))
  }

  if (isLogin) {
    return (
      <div>
        <span>Hi, {name}.</span>
        <Button
          onClick={signout}
          variant="link"
          className="text-body font-weight-lighter"
        >
          Sign out
        </Button>
      </div>
    )
  } else {
    return (
      <Button
        href="/signin"
        variant="link"
        className="text-body font-weight-lighter"
      >
        Sign in
      </Button>
    )
  }
}
