import { Component } from '@angular/core'
import { Carrera, Catedra, Facultad, Usuario } from '../../entitys'
import { Sesion, Categoria, Concurso, CargoLlamado } from '../../entitys'
import { IEstadoConcurso } from '../../interfaces'
import { CategoriaService, AuthService } from '../../services'
import { findIndex as _findIndex } from 'lodash-es'

@Component({
  selector: 'app-registrar-convocatoria',
  templateUrl: './registrar-convocatoria.component.html',
  styleUrls: ['./registrar-convocatoria.component.styl']
})

export class RegistrarConvocatoriaComponent {
  public catedraSeleccionada: string
  public carreraSeleccionada: Carrera
  public fechaEstimadaInscripcion: Date
  public fechaEstimadaRealizacionConcurso: Date
  public categoriaSeleccionada: Categoria
  public cantidadPorCategoria: number
  public cargosLlamados: any [] = []
  public carreras: Carrera []
  public catedras: string []
  public categorias: Categoria []
  public facultad: Facultad
  public usuario: Usuario

  private estado: IEstadoConcurso
  private fechaCreacion: Date
  private sesion: Sesion

  constructor (private categoriaService: CategoriaService,
    private authService: AuthService,
  ) {
    this.buscarCarreras()
    this.buscarCategoriasDocentes()
  }

  public registrarConvocatoriaConcurso () {
    const concurso = new Concurso(
      this.usuario,
      this.catedraSeleccionada,
      this.cargosLlamados,
      this.fechaEstimadaInscripcion,
      this.fechaEstimadaRealizacionConcurso
    )
    console.log(concurso)
  }

  public agregar (categoria: Categoria, cantidad: number) {
    if (cantidad > 0 ) {
      const indiceCargoExistente = _findIndex(this.cargosLlamados, cargo => {
        return new Categoria(cargo.categoria).getNombre() === new Categoria(categoria).getNombre()
      })

      if (indiceCargoExistente >= 0) {
        this.cargosLlamados[indiceCargoExistente].cantidad = cantidad
      } else {
        this.cargosLlamados.push({
          cantidad: cantidad,
          categoria: categoria
        })
      }
    }
    this.cantidadPorCategoria = 0
  }

  public eliminarCargo (index: number) {
    this.cargosLlamados.splice(index, 1)
  }

  public generarNotaSolicitudConcurso () {

  }

  public imprimirNota () {

  }

  public tomarSeleccionCarrera (carrera: Carrera) {
    this.carreraSeleccionada = carrera
    this.buscarCatedras()
  }

  public tomarSeleccionCatedra (catedra: string) {
    this.catedraSeleccionada = catedra
  }

  public tomarFechaEstimadaInscripcion (fecha: Date) {
    this.fechaEstimadaInscripcion = fecha
  }

  public tomarFechaEstimadaConcurso (fecha: Date) {
    this.fechaEstimadaRealizacionConcurso = fecha
  }

  public tomarConfirmacion (valor: boolean) {
    this.registrarConvocatoriaConcurso()
  }

  public esValidoForm (): boolean {
    const existeCatedra = !!this.catedraSeleccionada
    const fechas = this.fechaEstimadaRealizacionConcurso && this.fechaEstimadaInscripcion
    const existenCargos = this.cargosLlamados.length > 0

    return  existeCatedra && fechas && existenCargos
  }

  public limpiarForm () {
    this.carreraSeleccionada = undefined
    this.catedraSeleccionada = undefined
    this.fechaEstimadaInscripcion = undefined
    this.fechaEstimadaRealizacionConcurso = undefined
    this.categoriaSeleccionada = undefined
    this.cargosLlamados = []
    this.cantidadPorCategoria = 0
  }

  private buscarCarreras () {
    this.sesion = new Sesion({
      nombre: 'sesion23',
      usuario: this.authService.getLoggedUser()
    })
    this.usuario = this.sesion.buscarUsuario().getUsuario()
    this.facultad = this.usuario.getFacultad()
    this.carreras = this.facultad.buscarCarreras()
  }

  private buscarCatedras () {
    this.catedras = new Carrera(this.carreraSeleccionada).buscarCatedras()
  }

  private buscarCategoriasDocentes () {
    this.cantidadPorCategoria = 0
    this.categorias = this.categoriaService.getCategorias()
  }
}
