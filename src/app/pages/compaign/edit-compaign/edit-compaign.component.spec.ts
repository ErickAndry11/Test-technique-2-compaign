import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompaignComponent } from './edit-compaign.component';

describe('EditCompaignComponent', () => {
  let component: EditCompaignComponent;
  let fixture: ComponentFixture<EditCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
