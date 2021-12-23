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

const passwordValidator = (v: string) => {
  if (v.length < 8) return 'Password requires a minimum of 8 characters'

  if (!hasUpper(v)) return 'Password requires an upper case letter'

  if (!hasLower(v)) return 'Password requires a lower case letter'

  if (!hasNumber(v)) return 'Password requires a numeric value'

  if (!hasSymbol(v)) return 'Password requires a symbol'

  return true
}

export default passwordValidator
