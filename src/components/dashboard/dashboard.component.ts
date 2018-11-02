import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { CardContentComponent } from '../card-content/card-content.component';

@Component({
  selector: 'basic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('card1Content', { read: ViewContainerRef }) viewContainerRefCard1: ViewContainerRef;
  @ViewChild('card2Content', { read: ViewContainerRef }) viewContainerRefCard2: ViewContainerRef;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef
  ) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({ matches }) => {
      if (matches) {
        return this.cardSmall;
      }

      return this.cardFull;
    })
  );

  cardFull = [
    { title: 'Card 1', cols: 2, rows: 1, id: 1 },
    { title: 'Card 2', cols: 1, rows: 1, id: 2 },
    { title: 'Card 3', cols: 1, rows: 2, id: 3 },
    { title: 'Card 4', cols: 1, rows: 1, id: 4 }
  ];

  cardSmall = [
    { title: 'Card 1', cols: 1, rows: 1, id: 1 },
    { title: 'Card 2', cols: 1, rows: 1, id: 2 },
    { title: 'Card 3', cols: 1, rows: 1, id: 3 },
    { title: 'Card 4', cols: 1, rows: 1, id: 4 }
  ];

  ngAfterViewInit() {
    // TODO Don't forget to add component (CardContentComponent) to module -> entryComponents

    this.addComponent(CardContentComponent, this.viewContainerRefCard1, 'card 1 content');
    this.addComponent(CardContentComponent, this.viewContainerRefCard2, 'card 2 content');
    this.cdRef.detectChanges();
  }

  addComponent(component, viewContainerRef, componentInput) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = viewContainerRef.createComponent(factory);
    ref.instance.content = componentInput;
  }

  public expand() {
    console.log('expand');
  }

  public remove(id) {
    for (let i = 0; i < this.cardFull.length; i++) {
      if (this.cardFull[i].id === id) {
        this.cardFull.splice(i, 1);
      }
    }

    for (let i = 0; i < this.cardSmall.length; i++) {
      if (this.cardSmall[i].id === id) {
        this.cardSmall.splice(i, 1);
      }
    }
  }
}
