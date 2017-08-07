/*
Front-end side modeling of Service class.
*/

export class Service {
  constructor (
    public name: String,
    public price: Number,
    public description: String,
    public serviceId?: String,
    public userId?: String,
    public userName?: String
  ){}
}
