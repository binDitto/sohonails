// FRONT END USER MODEL

export class User {
  constructor(
    public firstName: String,
    public lastName: String,
    public userName: String,
    public email: String,
    public password: String,
    public userId?: String
  ){}
}
