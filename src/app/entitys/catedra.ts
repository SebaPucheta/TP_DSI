export class Catedra {
  private codigo: string
  private nivel: number
  private nombre: string
  private sigla: string

  constructor (argumentos) {
    this.codigo = argumentos.codigo
    this.nivel = argumentos.nivel
    this.nombre = argumentos.nombre
    this.sigla = argumentos.sigla
  }

  public getNombre (): string {
    return this.nombre
  }
}
