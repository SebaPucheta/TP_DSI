import { Facultad } from './facultad'

export class Usuario {
  private contraseña: string
  private nombre: string
  private facultad: Facultad

  constructor (argumentos) {
    this.contraseña = argumentos.contraseña
    this.nombre = argumentos.nombre
    this.facultad = new Facultad (argumentos.facultad)
  }

  public getUsuario (): Usuario {
    return this
  }

  public getNombre (): string {
    return this.nombre
  }

  public getContraseña (): string {
    return this.contraseña
  }

  public getFacultad (): Facultad {
    return this.facultad
  }
}
