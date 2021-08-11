import { Component, Input, OnInit } from '@angular/core';
import { TestTexts } from './test';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor() { 
  }

  test:string ="This is a text";
  @Input() header:string | undefined;

  testArray:TestTexts[] = []
  selectedItem:TestTexts | undefined;

  ngOnInit(): void {
    this.testArray = [
      {
        desc:"First text",
        order:1,
        text:"One"
      },
      {
        desc:"Second text",
        order:2,
        text:"Two"
      },
      {
        desc:"Third text",
        order:3,
        text:"Three"
      }
    ];

  }

  selectItem(test:TestTexts):void {
    this.selectedItem = test;
    console.log(test.desc)
  }
}
