import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Filter } from 'src/app/models/compaign';
import { CompaignService } from 'src/app/service/compaign.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private serviceCompaign: CompaignService) {}

  @Output() itemFiltre: EventEmitter<Filter> = new EventEmitter();

  filters = new FormGroup({
    text: new FormControl(''),
    brand: new FormControl(''),
  });

  brands: Brand[] = [];

  ngOnInit(): void {
    this.getAllBrand();
  }

  onSubmit(): void {
    const filterValue = {
      text: this.filters.value.text ?? '',
      brand: this.filters.value.brand ?? '',
    };
    this.itemFiltre.emit(filterValue);
  }

  getAllBrand() {
    this.serviceCompaign.getDataBrands().subscribe((data: Brand[]) => {
      if (data) {
        this.brands = data;
      }
    });
  }
}
