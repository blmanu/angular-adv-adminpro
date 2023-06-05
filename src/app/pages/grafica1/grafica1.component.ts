import { Component } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labels1: string[] = [ 'tacos', 'tortas', 'ensaladas' ];
  data1: number[] = [ 350, 450, 100 ]
  labels2: string[] = [ 'tomates', 'pan', 'refrescos' ];
  data2: number[] = [ 50, 150, 120 ]
  labels3: string[] = [ 'coche', 'moto', 'barco' ];
  data3: number[] = [ 100, 300, 25 ]
  labels4: string[] = [ 'label1', 'label2', 'label3' ];
  data4: number[] = [ 80, 50, 500 ]
}
