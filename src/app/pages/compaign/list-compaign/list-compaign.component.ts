import { Component, OnInit } from '@angular/core';
import { Compaign, Filter } from 'src/app/models/compaign';
import { CompaignRequests } from 'src/app/models/compaign-requests';
import { CompaignService } from 'src/app/service/compaign.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-compaign',
  templateUrl: './list-compaign.component.html',
  styleUrls: ['./list-compaign.component.scss'],
})
export class ListCompaignComponent implements OnInit {
  Compaigns: Compaign[] = [];
  closeResult: string = '';
  compaignEditValue!: Compaign;

  constructor(
    private serviceCompaign: CompaignService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getAllCompaign();
  }

  getAllCompaign() {
    this.serviceCompaign
      .getDataCompaign()
      .subscribe((data: CompaignRequests) => {
        if (data) {
          this.Compaigns = data.requests;
        }
      });
  }

  submitFilter(item: Filter) {
    this.serviceCompaign
      .getDataCompaign()
      .subscribe((data: CompaignRequests) => {
        if (data) {
          this.Compaigns = this.filterCompaign(
            data.requests,
            item.text,
            Number(item.brand)
          );
        }
      });
  }

  filterCompaign(dataArray: any[], searchText: string, brandId: number) {
    if (!dataArray) {
      return [];
    }
    searchText = searchText ? searchText.toLowerCase() : '';

    return dataArray.filter((item) => {
      if (brandId && item.brand && item.brand.brandId !== brandId) {
        return false;
      }

      for (const prop in item) {
        if (item.hasOwnProperty(prop)) {
          const propValue = item[prop];

          if (propValue && typeof propValue === 'object') {
            if (
              this.filterCompaign([propValue], searchText, brandId).length > 0
            ) {
              return true;
            }
          } else if (
            propValue &&
            propValue.toString().toLowerCase().includes(searchText)
          ) {
            return true;
          }
        }
      }
      return false;
    });
  }

  open(content: any, compaign: Compaign) {
    this.compaignEditValue = compaign;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {}
      );
  }

  setIconStatus(statusValue: string): string {
    let iconName: string = '';
    switch (statusValue) {
      case 'VALIDATED':
        iconName = 'bi bi-check-circle text-success';
        break;
      case 'REJECTED':
        iconName = 'bi bi-x-circle text-danger';
        break;
      default:
        iconName = 'bi bi-hourglass';
        break;
    }
    return iconName;
  }
}
