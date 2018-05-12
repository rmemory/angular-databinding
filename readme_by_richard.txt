This project is all about demonstrating the capability to
communicate information from component to component.

This is somewhat like property and event binding, but a way
to pass data to and from components. We can emit our own events.

The first step was to create the cockpit and server-component
components.

 $ ng g c cockpit --spec false
 $ ng g c server-element --spec false

 In the app-component, we have a list of serverElements:

   serverElements = [];

We add a for loop for the serverElements in the html template for
app-component

<div class="container">

  <hr>
  <div class="row">
    <div class="col-xs-12">
      <app-server-element *ngFor="let element of serverElements"></app-server-element>
    </div>
  </div>
</div>

In the cockpit component, it has the capability to add new servers,
and thus click handlers. Newly added servers need to be added to the
serverElements list in the app-compoent.

The server-element displays all servers, and also needs access
to the serverElements.

So, in the server-element typescript file we add an element
variable, which will receive info from the app-component.

element: {type: string, name: string, content: string};

The template for the server-element uses the data from
the server like this:

    <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
    <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>

The element variable in the server-element, will need to receive
data from the app-component. server-element only knows how to display a single
server. Note the usage of ngIf, which means each element only gets
added to the DOM conditionally.

Now we need to bind the for loop in the app-component to the element
variable in server-element.

import { Component, OnInit, Input }
@Input() element: {type: string, name: string, content: string};

And in app-component template, we add this:

      <app-server-element
      *ngFor="let serverElement of serverElements"
      [element]="serverElement">

To rename the binding name, we do this:

@Input('srvElement') element:

      <app-server-element
        *ngFor="let element of serverElements"
        [srvElement]=element>

To trigger an output event from a child component, we do this:

@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

And we listen to it like this:

      <app-cockpit
        (serverCreated)="onServerAdded($event)"
        (bpCreated)="onBlueprintAdded($event)">
      </app-cockpit>









