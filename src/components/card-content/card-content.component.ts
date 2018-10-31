import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'basic-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  @Input() content = 'no input';

  constructor() { }

  ngOnInit() {
  }

}
