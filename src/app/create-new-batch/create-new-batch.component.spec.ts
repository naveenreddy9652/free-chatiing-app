import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBatchComponent } from './create-new-batch.component';

describe('CreateNewBatchComponent', () => {
  let component: CreateNewBatchComponent;
  let fixture: ComponentFixture<CreateNewBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
