import { Injectable } from '@angular/core'
import { Usuario } from '../entitys'

@Injectable()
export class AuthService {

  public getLoggedUser (params?: any): Usuario {
    return new Usuario(loggedUser)
  }
}

const loggedUser = {
  constraseña: '12iu2b3u43ubi345bi23b4',
  nombre: 'Roberto Rogelio',
  facultad: {
    nombre: 'Facultad Regional Córdoba',
    carreras: [{
      desrcipcion: 'Análisis de sistemas es una asignatura',
      nombre: 'Análisis de sistemas',
      catedras: [{
        codigo: '0012',
        nivel: 2,
        nombre: 'Catedra analisis',
        sigla: 'CA'
      }, {
        codigo: '0013',
        nivel: 2,
        nombre: 'Catedra sitema',
        sigla: 'CS'
      }
      ]
    }, {
      desrcipcion: 'Análisis de sistemas es una asignatura',
      nombre: 'Diseño de sistemas',
      catedras: [{
        codigo: '0013',
        nivel: 2,
        nombre: 'Catedra Diseño',
        sigla: 'CD'
      }, {
        codigo: '0015',
        nivel: 2,
        nombre: 'Catedra diseño de sistema',
        sigla: 'CDS'
      }
      ]
    }
    ]
  }
}
