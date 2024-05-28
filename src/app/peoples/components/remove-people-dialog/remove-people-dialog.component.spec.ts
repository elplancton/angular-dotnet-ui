import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePeopleDialogComponent } from './remove-people-dialog.component';

describe('RemovePeopleDialogComponent', () => {
  let component: RemovePeopleDialogComponent;
  let fixture: ComponentFixture<RemovePeopleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovePeopleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemovePeopleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
