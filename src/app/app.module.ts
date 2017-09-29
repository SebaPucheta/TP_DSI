import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AppRoutes } from './app.routes'
import { DatepickerModule, ModalModule, PopoverModule, TooltipModule } from 'ngx-bootstrap'

// MODULES
const modules = [
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserModule,
  AppRoutes,
  RouterModule,
  DatepickerModule.forRoot(),
  PopoverModule.forRoot(),
  ModalModule.forRoot(),
  TooltipModule.forRoot()
]

// SERVICES
import { CategoriaService, AuthService } from './services'

const services = [
  CategoriaService,
  AuthService
]

// PAGES
import { AppComponent } from './app.component';
import { HomeLayoutComponent, RegistrarConvocatoriaComponent } from './pages'

const pages = [
  AppComponent,
  HomeLayoutComponent,
  RegistrarConvocatoriaComponent
]

// WIDGETS
import { ConfirmationModal } from './widgets/confirmation-modal'
import { DatepickerPopup } from './widgets/datepicker-popup'

const widgets = [
  ConfirmationModal,
  DatepickerPopup
]

export function declarations () {
  return [
    ...pages,
    ...widgets
  ]
}

@NgModule({
  declarations: declarations(),
  imports: modules,
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule { }
