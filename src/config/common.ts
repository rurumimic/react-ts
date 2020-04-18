export const baseURL = (): string => {
  if (
    process.env.NODE_ENV === 'development' &&
    typeof process.env.APP_URL !== 'undefined'
  ) {
    return process.env.APP_URL
  } else {
    return ''
  }
}
