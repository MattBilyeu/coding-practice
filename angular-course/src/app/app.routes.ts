import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path: '', component: AppComponent, pathMatch: 'full'},
    {path: 'test', component: TestComponent}
];
