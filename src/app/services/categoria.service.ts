import { Injectable } from '@angular/core'
import { Categoria } from '../entitys'

@Injectable()
export class CategoriaService {

  public getCategorias (params?: any): Categoria [] {
    const coleccion = []
    categorias.forEach(categoria => {coleccion.push(new Categoria(categoria))})
    return coleccion
  }
}

const categorias = [{
    nombre: 'Adjunto',
    descripciion: ''
  }, {
    nombre: 'Jefe Trabajo Practico',
    descripciion: ''
  }, {
    nombre: 'Titular',
    descripciion: ''
  }
]
