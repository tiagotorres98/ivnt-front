import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuComponent } from './menu/menu.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NewClientComponent } from './new-client/new-client.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calcularPrecoPrazo, consultarCep, rastrearEncomendas,} from 'correios-brasil';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientRegisterComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-register', component: ClientRegisterComponent },
      { path: 'new-client', component: NewClientComponent },
    ]),

    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
