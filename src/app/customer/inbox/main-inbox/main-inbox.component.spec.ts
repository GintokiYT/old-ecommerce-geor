/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainInboxComponent } from './main-inbox.component';

describe('MainInboxComponent', () => {
  let component: MainInboxComponent;
  let fixture: ComponentFixture<MainInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
