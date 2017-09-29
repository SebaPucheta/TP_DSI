import { Catedra } from './catedra'
import { Iterador } from '../interfaces'
import { IteradorCatedra } from './iterators'

export class Carrera {
  private catedras: Catedra[]
  private descripcion: string
  private nombre: string

  constructor (argumentos) {
    this.catedras = []
    argumentos.catedras.forEach(catedra => {this.catedras.push(new Catedra(catedra))})
    this.descripcion = argumentos.descripcion
    this.nombre = argumentos.nombre
  }

  public getNombre (): string {
    return this.nombre
  }

  public buscarCatedras (): string[] {
    const nomCatedras: string[] = []

    const iterador: Iterador = this.crearIterador(this.catedras)
    iterador.primero()

    while (!iterador.haTerminado()) {
      nomCatedras.push(iterador.actual().getNombre())
      iterador.siguiente()
    }
    return nomCatedras
  }

  private crearIterador(catedras: Catedra[]): Iterador {
    return new IteradorCatedra(catedras)
  }
}
