import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './components/project/project.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavComponent } from './components/nav/nav.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Project2Component } from './components/project2/project2.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    NavComponent,
    SearchBarComponent,
    Project2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
  ],
  providers: [DatePipe,{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
