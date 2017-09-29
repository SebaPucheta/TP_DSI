import { Catedra } from '../entitys'
import { Iterador } from './'

export interface Lista {
  crearIterador(iterador: Catedra[]): Iterador
}
