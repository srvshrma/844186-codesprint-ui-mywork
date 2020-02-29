import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGiftcardComponent } from './view-giftcard.component';

describe('ViewGiftcardComponent', () => {
  let component: ViewGiftcardComponent;
  let fixture: ComponentFixture<ViewGiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
