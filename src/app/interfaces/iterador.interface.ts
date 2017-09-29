import { Catedra } from '../entitys'

export interface Iterador {
  siguiente()
  primero()
  haTerminado(): boolean
  actual(): Catedra
}
