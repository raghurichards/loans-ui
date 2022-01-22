import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },

  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },

  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },

  {
    path: 'invoices',
    loadChildren: () =>
      import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('./loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'loan-types',
    loadChildren: () =>
      import('./loan-types/loan-types.module').then((m) => m.LoanTypesModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./audit-log/audit-log.module').then((m) => m.AuditLogModule),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },

  {
    path: 'edit',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
