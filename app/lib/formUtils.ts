export const formatPhoneNumber = (value: string) => {
  if (!value) return value

  const phoneNumber = value.replace(/[^\d]/g, '')

  const phoneNumberLength = phoneNumber.length

  if (phoneNumberLength < 4) return phoneNumber

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }

  if (phoneNumberLength < 10) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6)}`
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`
}

export const namePattern =
  /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i

export const emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/
