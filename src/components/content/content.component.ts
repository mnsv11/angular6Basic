import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main-service.service';

@Component({
  selector: 'basic-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  content = '';

  constructor() { }

  ngOnInit() {
    this.content = MainService.getContent;
  }
}
