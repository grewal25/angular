import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name="";
  displayName=true;
  @Input() parentData;
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('hey sunny');
  }
  
}
