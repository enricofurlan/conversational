/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageConversationComponent } from './page-conversation.component';

describe('PageConversationComponent', () => {
  let component: PageConversationComponent;
  let fixture: ComponentFixture<PageConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
