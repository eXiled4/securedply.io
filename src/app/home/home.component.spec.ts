import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let htmlElement: HTMLElement;
  let DbugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    DbugElement = fixture.debugElement.query(By.css('a')) 
    //here we search in the component(assigned by fixture), the root element(debugElement), search with .query,(By the <a> tag)
    // By allows searching for specific elements on page
    htmlElement = DbugElement.nativeElement;
    // The underlying DOM element at the root of the component
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name'), () => {
    expect(htmlElement.textContent).toEqual("name")
  }
  //here, we use the htmlElement after assigning the DbugElement functionality
});

// WRITING TEST tutorial
// first well be importing debug element by:
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser'
  // Declare variables:
      // let htmlElement: HTMLElement;
      // let DebugElement: DebugElement;
  

      // FIRST TEST WRITTEN!!
      // To recap
      // after declaring variables
      // in the beforeEach async fx - we
        // 