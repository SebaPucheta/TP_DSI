import { Categoria } from './categoria'

export class CargoLlamado {
  private cantidad: number
  private categoria: Categoria
  private inscripciones

  constructor (argumentos) {
    this.cantidad = argumentos.cantidad
    this.categoria = new Categoria(argumentos.categoria)
    this.inscripciones = argumentos.inscripciones || undefined
  }
}
