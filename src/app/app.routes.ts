import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/data-view', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'data-view',
        loadComponent: () =>
          import('./pages/dashboard/views/data-view/data-view.component').then(
            (m) => m.DataViewComponent
          ),
      },
      {
        path: 'plot-view',
        loadComponent: () =>
          import('./pages/dashboard/views/plot-view/plot-view.component').then(
            (m) => m.PlotViewComponent
          ),
      },
    ],
  },
];
