import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-area-copy',
  templateUrl: './text-area-copy.component.html',
  styleUrls: ['./text-area-copy.component.css']
})
export class TextAreaCopyComponent implements OnInit {
@Input() Texto:string;
@Input() ancho:number;
@Input() alto:number;
maximo:number;  
constructor() { 

  }

  ngOnInit(): void {
    // this.maximo=this.ancho*this.alto;
    this.maximo=40;
  }


}
