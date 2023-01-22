/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternalInboxComponent } from './internal-inbox.component';

describe('InternalInboxComponent', () => {
  let component: InternalInboxComponent;
  let fixture: ComponentFixture<InternalInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
