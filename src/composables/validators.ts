import * as EmailValidator from 'email-validator'

export const useValidEmail = (email: string) => {
  return EmailValidator.validate(email) || 'is not valid'
}

/**
 * at least 8 chars
 * 1 Upper
 * 1 Lower
 * 1 Number
 * 1 Symbol
 */

// Non AlphaNumeric
const hasSymbol = (v: string) => !!v.match(/[^a-zA-Z\d]/g)

// Lower
const hasLower = (v: string) => !!v.match(/[a-z]/g)

// Upper
const hasUpper = (v: string) => !!v.match(/[A-Z]/g)

// Numeric
const hasNumber = (v: string) => !!v.match(/\d/g)

export const useValidPassword = (v: string) => {
  if (v.length < 8) return 'requires a minimum of 8 characters'

  if (!hasUpper(v)) return 'requires 1 upper case letter'

  if (!hasLower(v)) return 'requires 1 lower case letter'

  if (!hasNumber(v)) return 'requires 1 numeric value'

  if (!hasSymbol(v)) return 'requires 1 symbol'

  return true
}

export const useRequired = (v: string): string => {
  if (v.trim()) return ''
  return 'is required'
}
