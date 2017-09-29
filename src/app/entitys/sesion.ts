import { Usuario } from './usuario'
import { Facultad } from './facultad'

export class Sesion {
  private nombre: string
  private usuario: Usuario
  private facultad: Facultad

  constructor (argumentos) {
    this.nombre = argumentos.nombre
    this.usuario = new Usuario(argumentos.usuario)
  }

  public buscarUsuario (): Usuario {
    return this.usuario
  }
}
