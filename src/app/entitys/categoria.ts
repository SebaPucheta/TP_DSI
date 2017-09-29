export class Categoria {
  private nombre: string
  private descripcion: string

  constructor (argumentos) {
    this.nombre = argumentos.nombre
    this.descripcion = argumentos.descripcion
  }

  public getNombre (): string {
    return this.nombre
  }
}
