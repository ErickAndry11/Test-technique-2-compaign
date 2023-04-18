import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaignRequests } from '../models/compaign-requests';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class CompaignService {
  constructor(private http: HttpClient) {}
  base_url = 'assets/json/';
  getDataCompaign(): Observable<CompaignRequests> {
    return this.http.get<CompaignRequests>(`${this.base_url}payload-rmp.json`);
  }

  getDataBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.base_url}brands.json`);
  }
}
