import { Iterador } from '../../interfaces'
import { Catedra } from '../'

export class IteradorCatedra implements Iterador {

  private posicion: number
  private lista: Catedra[]

  constructor (catedras: Catedra[]) {
    this.lista = catedras
    this.setLista(catedras)
    this.setPosicion()
  }

  public  setLista (catedras: Catedra[]) {
    this.lista = catedras
  }

  public setPosicion () {
    this.posicion = -1
  }

  public primero () {
    this.posicion = this.lista.length !== 0 ? 0 : -1
  }

  public actual (): Catedra {
    return this.lista[this.posicion]
  }

  public siguiente () {
    this.posicion++
  }

  public haTerminado (): boolean {
    return this.posicion > this.lista.length - 1
  }
}
