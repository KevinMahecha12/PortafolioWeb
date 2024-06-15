import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"portafoliowebkevinmahecha","appId":"1:262702586271:web:acaeb107575c68743085aa","storageBucket":"portafoliowebkevinmahecha.appspot.com","apiKey":"AIzaSyBAOZ4rvFxBDyYm9OQdz__v3LBO8VX0W3c","authDomain":"portafoliowebkevinmahecha.firebaseapp.com","messagingSenderId":"262702586271"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent] // AppComponent es el componente principal
})
export class AppModule { }
