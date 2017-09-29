import { Carrera } from './carrera'

export class Facultad {
  private nombre: string
  private carreras: Carrera[]

  constructor (argumentos) {
    this.carreras = []
    argumentos.carreras.forEach(carrera => {this.carreras.push(new Carrera(carrera))})
    this.nombre = argumentos.nombre
  }

  public buscarCarreras (): Carrera[] {
    return this.carreras
  }

  public getNombre (): string {
    return this.nombre
  }
}
