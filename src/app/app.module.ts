// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { NotesService } from './notes.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent
//   ],
//   imports: [
//     MatCardModule,
//     // MatDividerModule,
//     MatExpansionModule,
//     // MatListModule,
//     // MatStepperModule,
//     // MatTabsModule,
//     MatFormFieldModule,
//     // MatInputModule,
//     // MatButtonModule,
//     BrowserModule,
//     BrowserAnimationsModule,
//     MatToolbarModule,
//     FormsModule,
//     HttpClientModule
    
//   ],

//   providers: [
//     NotesService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NotesService } from './notes.service';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    MatCardModule,
    // MatDividerModule,
    MatExpansionModule,
    // MatListModule,
    // MatStepperModule,
    // MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
