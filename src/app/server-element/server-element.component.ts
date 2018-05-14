import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // varname: type of var, which in this case is an object
  // Use of Input here makes parent component to access (bind to)
  // element, referenced in the parent as srvElement
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent)
  }

}
