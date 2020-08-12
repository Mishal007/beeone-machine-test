import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'e-wallet', loadChildren: () => import('./e-wallet/form.module').then(m => m.FormModule) },
  { path: 'affiliates', loadChildren: () => import('./affiliates/form.module').then(m => m.FormModule) },
  { path: 'payments', loadChildren: () => import('./payments/icons.module').then(m => m.IconsModule) },
  { path: 'managemybusiness', loadChildren: () => import('./managemybusiness/form.module').then(m => m.FormModule) },
  { path: 'settings', loadChildren: () => import('./settings/form.module').then(m => m.FormModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
