import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Compaign } from 'src/app/models/compaign';
import { CompaignService } from 'src/app/service/compaign.service';
import { mediaListType } from 'src/app/contants/mediaTypeList';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-compaign',
  templateUrl: './edit-compaign.component.html',
  styleUrls: ['./edit-compaign.component.scss'],
})
export class EditCompaignComponent implements OnInit, OnChanges {
  @Input() modalInput: any;

  @Input()
  compaignEdit!: Compaign;

  brands: Brand[] = [];

  media = mediaListType;

  formattedDate: string = '';

  constructor(private serviceCompaign: CompaignService) {}

  ngOnInit(): void {
    this.getAllBrand();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.compaignEdit) {
      this.setValueEditForm();
    }
  }

  editForm = new FormGroup({
    brand: new FormControl(''),
    compaignName: new FormControl(''),
    deadline: new FormControl(),
    media: new FormArray(this.media.map((option) => new FormControl(false))),
  });

  getAllBrand() {
    this.serviceCompaign.getDataBrands().subscribe((data: Brand[]) => {
      if (data) {
        this.brands = data;
      }
    });
  }

  onSubmit() {
    console.log('editForm', this.editForm.value);
  }

  setValueEditForm() {
    this.editForm.controls['brand'].setValue(
      this.compaignEdit.brand.brandId.toString()
    );
    this.editForm.controls['compaignName'].setValue(
      this.compaignEdit.campaignName
    );

    const dateValue = new Date(this.compaignEdit.decisionDeadline);
    const ngbDate = this.compaignEdit.decisionDeadline
      ? this.convertToNgbDate(dateValue)
      : '';
    this.editForm.controls['deadline'].setValue(ngbDate);

    this.editForm.setControl(
      'media',
      new FormArray(
        this.media.map((option) => {
          return new FormControl(
            this.compaignEdit.media.some((s) => s.name === option.name)
          );
        })
      )
    );
  }

  convertToNgbDate(date: Date): NgbDateStruct {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }
}
