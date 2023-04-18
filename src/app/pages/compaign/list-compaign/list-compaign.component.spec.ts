import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompaignComponent } from './list-compaign.component';

describe('ListCompaignComponent', () => {
  let component: ListCompaignComponent;
  let fixture: ComponentFixture<ListCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
