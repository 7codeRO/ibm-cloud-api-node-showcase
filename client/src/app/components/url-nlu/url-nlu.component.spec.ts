import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlNluComponent } from './url-nlu.component';

describe('UrlNluComponent', () => {
  let component: UrlNluComponent;
  let fixture: ComponentFixture<UrlNluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlNluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlNluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
