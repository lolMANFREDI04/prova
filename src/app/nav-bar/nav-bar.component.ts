import { Component } from '@angular/core';
import { ElementRef, ViewChild, HostListener } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  panelOpenState: boolean = false;

  constructor(private elRef: ElementRef) {}

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  navigateTo(arg0: string) {
    // Implementa la logica per la navigazione
  }

  // Aggiunto il decoratore @HostListener per gestire l'evento di clic del documento
  @HostListener('document:click', ['$event'])
  documentClickHandler(event: Event) {
    // Chiudi il pannello se il clic avviene al di fuori dell'elemento
    console.log(event);
    console.log(event.target);
    console.log(this.elRef.nativeElement);

    if (!this.elRef.nativeElement.contains(event.target)) {
      this.panelOpenState = false;
      console.log(this.panelOpenState);

    }
  }
}



