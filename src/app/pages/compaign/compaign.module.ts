import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CompaignRoutingModule } from './compaign-routing.module';
import { ListCompaignComponent } from './list-compaign/list-compaign.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCompaignComponent } from './edit-compaign/edit-compaign.component';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';

@NgModule({
  declarations: [
    ListCompaignComponent,
    FilterComponent,
    EditCompaignComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    CompaignRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [DatePipe],
})
export class CompaignModule {}
