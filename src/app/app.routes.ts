import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeLayoutComponent, RegistrarConvocatoriaComponent } from './pages'

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'registrar-convocatoria',
        pathMatch: 'full',
        component: RegistrarConvocatoriaComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes {}
