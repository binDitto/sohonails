/*
Front-end side modeling of Service class.
*/

export class Service {
  constructor (
    public name: String,
    public price: Number,
    public description: String,
    public type: String,
    public createdAt?: String,
    public serviceId?: String,
    public userId?: String,
    public userName?: String,
    public serviceImage?: any
  ){}
}
