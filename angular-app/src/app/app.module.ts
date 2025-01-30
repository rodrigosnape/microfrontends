import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    // Aqui nós criamos o CustomElement a partir do AppComponent
    const customElement = createCustomElement(AppComponent, { injector });
    // Aqui nos definimos que ele se chamara 'angular-app'
    // que será utilizado no HTML como <angular-app></angular-app>
    customElements.define('angular-app', customElement);
  }

  ngDoBootstrap() {} 
}
