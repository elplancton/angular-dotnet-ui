import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeopleDialogComponent } from './create-people-dialog.component';

describe('CreatePeopleDialogComponent', () => {
  let component: CreatePeopleDialogComponent;
  let fixture: ComponentFixture<CreatePeopleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePeopleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePeopleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
