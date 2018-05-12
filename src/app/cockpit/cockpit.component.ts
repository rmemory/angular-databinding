import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{name: string, content: string}>();

  // This variable comes in through a local reference
  // newServerName = '';
  // This variable is bound to the template using [(ngModel)]
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  /*
    First lifecycle method. Property values are available.
   */
  ngOnChanges() {

  }

  constructor() { }

  /*
    ngOnInit is the second lifecycle method. All properties are available, and its called after
    the constructor.
   */
  ngOnInit() {
  }

  /*
    Called after conent (ng-content) has been projected into view
   */
  ngAfterContentInit() {

  }

  /*
    Called after the component's view and child views have been iniitialized
   */
  ngAfterViewInit() {

  }

  /*
    Called every time the view and child views have been checked
   */
  ngAfterViewChecked() {

  }

  /*
    Called during every change detection run. This method runs a lot.
   */
  ngDoCheck() {

  }

  /*
    Called once the copmonent is about to be destroyed
   */
  ngOnDestroy() {

  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({name: nameInput.value,
                            content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({name: nameInput.value,
                                content: this.serverContentInput.nativeElement.value});
  }
}
