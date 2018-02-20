import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

<<<<<<< HEAD:src/app/platform/components/deal/deal.component.spec.ts
import { DealComponent } from './deal.component';

describe('DealComponent', () => {
  let component: DealComponent;
  let fixture: ComponentFixture<DealComponent>;

=======
import { HeadlineComponent } from './headline.component';
import { By } from '@angular/platform-browser';
describe('HeadlineComponent', () => {
  let component: HeadlineComponent;
  let fixture: ComponentFixture<HeadlineComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  let expectMatch = null;
>>>>>>> c7430bed12ceb31780748a9a5b84b7bb93c8ea89:src/app/headline/headline.component.spec.ts
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('b'));
    htmlElement= debugElement.nativeElement;
    
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title',()=>{
    expect(htmlElement.textContent).toMatch('Announcement Headline');
    
  });
 
  
});
