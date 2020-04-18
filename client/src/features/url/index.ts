export const url = (target: string): string => {
  const base: string =
    typeof process.env.REACT_APP_API_URL !== 'undefined'
      ? process.env.REACT_APP_API_URL
      : ''

  if (process.env.NODE_ENV === 'development') {
    return base + target
  } else {
    return target
  }
}
