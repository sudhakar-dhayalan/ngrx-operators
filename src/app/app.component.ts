import { Component, OnInit } from '@angular/core';
import { ActiavationService } from './activation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activate = false;
  constructor(private activationServce: ActiavationService) {}

  ngOnInit() {
    this.activationServce.activateEmitter.subscribe((data: boolean) => this.activate = data);
  }
}
