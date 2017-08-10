// FRONT END USER MODEL

export class User {
  constructor(
    public email: String,
    public password: String,
    public firstName?: String,
    public lastName?: String,
    public userName?: String,
    public userId?: String
  ){}
}
