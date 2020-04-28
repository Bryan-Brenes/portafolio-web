import { Component, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-bubble-sort-algoritm",
  templateUrl: "./bubble-sort-algoritm.component.html",
  styleUrls: ["./bubble-sort-algoritm.component.css"],
})
export class BubbleSortAlgoritmComponent implements OnInit {
  constructor() {}

  private canvas: any;
  private ctx: any;
  public cantidadNumeros: number = 100;
  public numbers: number[];
  private indiceActual: number = 0;
  private indiceOrdenado: number;
  private cambio: boolean;
  private intervaloOrdenar;
  private termino: boolean = false;
  public intervalo: number = 100;

  subscription: Subscription;
  source = interval(this.intervalo);

  ngOnInit() {
    this.initiateCanvas();
    this.generateNumbers();
    this.dibujarNumeros();
    this.cambio = false;
    this.indiceOrdenado = this.numbers.length;
  }

  initiateCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  generateNumbers() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {
      console.log(e);
    }
    this.numbers = [];
    for (let i = 0; i < this.cantidadNumeros; i++) {
      this.numbers.push(Math.floor(Math.random() * (this.canvas.height + 1)));
    }
    this.indiceActual = 0;
    this.indiceOrdenado = this.numbers.length;
    this.cambio = false;
    this.dibujarNumeros();
    this.termino = false;
    this.source = interval(this.intervalo);
  }

  dibujarNumeros() {
    // colores:
    //  ordenados: "#16a085"
    //  activos: "#f39c12"
    //  no-ordenados: "#c0392b"
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let lineWidth = this.canvas.width / this.numbers.length;
    //this.ctx.fillStyle = "#16a085";
    for (let i = 0; i < this.numbers.length; i++) {
      // esto genera colores aleatorios para los rectangulos
      //this.ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      if (this.termino) {
        this.ctx.fillStyle = "#16a085";
      } else {
        if (i == this.indiceActual || i == this.indiceActual + 1) {
          this.ctx.fillStyle = "#f39c12";
        } else {
          this.ctx.fillStyle = "#c0392b";
        }
        if (i >= this.indiceOrdenado) {
          this.ctx.fillStyle = "#16a085";
        }
      }
      this.ctx.fillRect(i * lineWidth, 0, lineWidth, this.numbers[i]);
    }
  }

  ordenar() {
    this.indiceActual = 0;
    this.indiceOrdenado = this.numbers.length;
    this.cambio = false;
    this.termino = false;
    this.source = interval(this.intervalo);
    if (this.indiceOrdenado <= 0) {
      return;
    }
    //this.intervaloOrdenar = setInterval(this.ordenarAux, 250);
    this.subscription = this.source.subscribe((val) => this.ordenarAux());
  }

  ordenarAux(): any {
    //while(this.cambio){
    //this.indiceActual = 0;
    //this.cambio = false;
    //while(this.indiceActual + 1 != this.indiceOrdenado){
    //if(this.numbers[this.indiceActual] > this.numbers[this.indiceActual + 1]) {
    //// swap
    //let tmp = this.numbers[this.indiceActual];
    //this.numbers[this.indiceActual] = this.numbers[this.indiceActual + 1];
    //this.numbers[this.indiceActual + 1] = tmp;
    //this.cambio = true;
    //}
    //this.indiceActual++;
    //}
    //this.indiceOrdenado--;
    //}
    //
    this.dibujarNumeros();
    if (this.indiceActual + 1 == this.indiceOrdenado) {
      this.indiceActual = 0;
      this.indiceOrdenado--;
      if (!this.cambio) {
        //terminé
        this.termino = true;
        this.dibujarNumeros();
        //clearInterval(this.intervaloOrdenar);
        //alert("terminé");
        this.subscription.unsubscribe();
      } else {
        this.cambio = false;
        return;
      }
    } else {
      if (
        this.numbers[this.indiceActual] > this.numbers[this.indiceActual + 1]
      ) {
        // swap
        let tmp = this.numbers[this.indiceActual];
        this.numbers[this.indiceActual] = this.numbers[this.indiceActual + 1];
        this.numbers[this.indiceActual + 1] = tmp;
        this.cambio = true;
        this.dibujarNumeros();
      }
      this.indiceActual++;
    }
  }

}
