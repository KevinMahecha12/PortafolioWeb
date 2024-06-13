import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  menuActivo = false;
  slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  public desplegarmenu() {
    this.menuActivo = !this.menuActivo;
    console.log("Se presionó el botón");
  }

  constructor() { }

  ngOnInit(): void {
    // Si necesitas hacer alguna inicialización adicional, hazlo aquí
  }
}
