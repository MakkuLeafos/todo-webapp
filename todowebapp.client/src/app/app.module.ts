import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { TodoelementComponent } from './components/todoelement/todoelement.component';
import { WeatherforecastComponent } from './components/weatherforecast/weatherforecast.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreatetododialogComponent } from './components/dialogs/createtododialog/createtododialog.component';
import { EdittododialogComponent } from './components/dialogs/edittododialog/edittododialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TodoelementComponent,
    WeatherforecastComponent,
    CreatetododialogComponent,
    EdittododialogComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, BrowserAnimationsModule,
    MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    MatGridListModule, FormsModule,
    MatCardModule, MatIconModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
