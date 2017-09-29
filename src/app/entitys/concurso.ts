import { IEstadoConcurso } from '../interfaces'
import { EstadoGenerada } from './states'
import { Usuario, Catedra, CargoLlamado } from './'

export class Concurso {
  private estadoActual: IEstadoConcurso
  private fechaCreacion: Date
  private usuarioLogueado: Usuario
  private catedra: string
  private cargosLlamados: CargoLlamado[]
  private fechaEstimadaConvocatoriaInscripcion: Date
  private fechaEstimadaRealizacion: Date

  constructor (usuarioLogueado: Usuario,
    catedra: string,
    cargosLlamados: CargoLlamado[],
    fechaEstimadaConvocatoriaInscripcion: Date,
    fechaEstimadaRealizacion: Date
  ) {
    this.usuarioLogueado = usuarioLogueado
    this.catedra = catedra
    this.cargosLlamados = []
    cargosLlamados.forEach(cargoLlamado => {
      this.cargosLlamados.push(cargoLlamado)
    })
    this.fechaEstimadaConvocatoriaInscripcion = fechaEstimadaConvocatoriaInscripcion
    this.fechaEstimadaRealizacion = fechaEstimadaRealizacion
    this.estadoActual = new EstadoGenerada(this)
  }

  public setFechaCreacion (fechaCreacion: Date) {
    this.fechaCreacion = fechaCreacion
  }
}
