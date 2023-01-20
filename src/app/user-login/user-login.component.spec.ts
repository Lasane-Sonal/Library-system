import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userloginComponent } from './user-login.component';

describe('UserLoginComponent', () => {
  let component: userloginComponent;
  let fixture: ComponentFixture<userloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
