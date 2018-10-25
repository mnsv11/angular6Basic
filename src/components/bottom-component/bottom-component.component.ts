import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-bottom-component',
  templateUrl: './bottom-component.component.html',
  styleUrls: ['./bottom-component.component.scss']
})

export class BottomComponentComponent implements OnInit {

  bottom = 'Bottom component';

  constructor() { }

  ngOnInit() {
  }

}
