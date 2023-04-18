import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'compaign',
    loadChildren: () =>
      import('./pages/compaign/compaign.module').then((m) => m.CompaignModule),
  },
  {
    path: '**',
    redirectTo: '/compaign',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
