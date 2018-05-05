import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{name: string, content: string}>();

  // This variable comes in through a local reference
  newServerName = '';
  // This variable is bound to the template using [(ngModel)]
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({name: nameInput.value, content: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({name: nameInput.value, content: this.newServerContent});
  }
}
