import { Routes } from '@angular/router';
import { BoardComponent } from './Views/board/board.module';
import { HomeComponent } from './Views/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: BoardComponent },
];
