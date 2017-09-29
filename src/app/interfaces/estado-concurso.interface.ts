export interface IEstadoConcurso {
  descripcion: string
  nombre: string

  anular ()
  rechazar ()
  enviarAconsejo ()
  aprobar ()
  revisar ()
  finalizar ()
  desertar ()
  sustanciar ()
  publicarNominaAspirante ()
  cerrarInscripcion ()
  abrirInscripcion ()
  publicar ()
  asignarTribunal ()
}
