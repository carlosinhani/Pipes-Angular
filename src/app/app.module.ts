import { BrowserModule  } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

import ptBr from '@angular/common/locales/pt';


registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  {
    provide: LOCALE_ID, 
    useValue: 'pt'      /* <--usar desse jeito a partir do Angular 5*/
  }
  // SettingsService, /* <--usar desse jeito se estiver usando service*/
  // {
  //   provide: LOCALE_ID,
  //   deps: [SettingsService],      
  //   useFactory: (settingsService) => settingsService.getLocale()
  // } 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
