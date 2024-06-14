import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetmaskComponent } from './subnetmask.component';

describe('SubnetmaskComponent', () => {
  let component: SubnetmaskComponent;
  let fixture: ComponentFixture<SubnetmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnetmaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubnetmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
