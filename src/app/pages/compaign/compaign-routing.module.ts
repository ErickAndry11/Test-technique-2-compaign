import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompaignComponent } from './list-compaign/list-compaign.component';

const routes: Routes = [{ path: '', component: ListCompaignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaignRoutingModule {}
