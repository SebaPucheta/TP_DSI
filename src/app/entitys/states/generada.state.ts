import { IEstadoConcurso } from '../../interfaces'
import { Concurso } from '../'

export class EstadoGenerada implements IEstadoConcurso {
  public nombre
  public descripcion

  constructor (concurso: Concurso) {
    concurso.setFechaCreacion(new Date())
  }

  public anular () {}

  public rechazar () {}

  public enviarAconsejo () {}

  public aprobar () {}

  public revisar () {}

  public finalizar () {}

  public desertar () {}

  public sustanciar () {}

  public publicarNominaAspirante () {}

  public cerrarInscripcion () {}

  public abrirInscripcion () {}

  public publicar () {}

  public asignarTribunal () {}

}
