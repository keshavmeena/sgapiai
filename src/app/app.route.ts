import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LinesituationComponent } from './feature/linesituation/linesituation.component';
import { RlcComponent } from "app/feature/rlc/rlc.component";

export const ROUTES: Routes = [
  { path: '', component: RlcComponent },
  { path: 'linesituation', component: LinesituationComponent },
];