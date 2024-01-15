import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { SortPipe } from './shared/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
