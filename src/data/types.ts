export type UserSignUp = {
  readonly email: string
  readonly password: string
}

export type UserSignUpWithRepeatPass = UserSignUp & {
  readonly repeatedPassword: string
}
