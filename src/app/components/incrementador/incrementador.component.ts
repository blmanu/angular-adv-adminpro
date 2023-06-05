import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 0;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {
    this.btnClass = 'btn ' + this.btnClass;
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    if (this.progreso < 0) this.progreso = 0;
    if (this.progreso > 100) this.progreso = 100;
    this.valorSalida.emit(this.progreso);
  }

  onChange( event: number ){
    this.progreso = event;
    if(!event || event < 0) this.progreso = 0;
    if(event > 100) this.progreso = 100;

    this.valorSalida.emit(this.progreso);
  }
}
