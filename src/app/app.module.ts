import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

/**
 * This is a custom Angular error handler. By default, we report
 * errors to the IonicDevServer if running, but you can add
 * other 3rd party error handling services here.
 */
class MyErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    IonicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ]
})
export class AppModule {}
