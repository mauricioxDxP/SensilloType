import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
texto:string="fa";
textoGenerado:Array<Letra>=new Array<Letra>();
textoCopiar:string="";
  constructor() { 
  }

  ngOnInit(): void {
    this.texto="a";
    this.generar(this.texto);
    this.generarTexto();

  }
  algo(s:any)
  {
    this.generar(this.texto);
    this.generarTexto();
  }
  generarTexto(){
    this.textoCopiar="";
    for(let i=0;i<5;i++){
      for(let j=0;j<this.textoGenerado.length;j++)
      {
       this.textoCopiar+=this.textoGenerado[j].imp.substr(i*(this.textoGenerado[j].ancho),this.textoGenerado[j].ancho) 
       console.log(this.textoGenerado[j].imp.substr(i*this.textoGenerado[j].ancho,this.textoGenerado[j].ancho) )
       console.log(this.textoGenerado[j].ancho)
      }
      this.textoCopiar+="\n"
    }
  }
  generar(text:string){
    this.textoGenerado=new Array<Letra>();
    for(let i=0;i<text.length;i++){
      this.textoGenerado.push({
        ancho:this.obtenerAncho(
          this.generarLetra(

            text.charAt(i))
          ),
        imp:this.generarLetra(
          text.charAt(i)).replace(/(\r\n|\n|\r)/gm,"")
      }
      );
    }
    console.log("generado",this.textoGenerado)
  }
  mostrar(e,f){

  }


  generarLetra (letra:string):string{
    switch(letra){
      case "a":
        return `░░░
█▀█
█▀█
▀░▀
░░░`;
        break;
        case "c":
          return `░░
█▀
█░
▀▀
░░`;
          break;
        case "f":
          return `░░░
█▀▀
█▀░
▀░░
░░░`;
          break;
          case "r":
            return `░░░░
█▀▀▄
█▀▀█
▀░░▀
░░░░`;
            break;
          case "s":
            return `░░░
█▀▀
▀▀█
▀▀▀
░░░`;
            break;
            case "t":
              return `░░░
▀█▀
░█░
░▀░
░░░`;
              break;
              case "u":
                return `░░░
█░█
█░█
▀▀▀
░░░`;
                break;
                case "v":
                  return `░░░
█░█
█░█
░▀░
░░░`;
                  break;
            
            case "i":
              return `░
▀
█
▀
░`;
              break;
              case "l":
                return `░░
█░
█░
▀▀
░░░`;
case "m":
  return `░░░░░
█▄░▄█
█▀█▀█
▀▒▒░▀
░░░░░`;
case "n":
  return `░░░░
█▄░█
█▀██
▀▒▒▀
░░░░`;
case "p":
  return `░░░
█▀█
█▀▀
▀░░
░░░`;
case "e":
  return `░░
█▀
█▀
▀▀
░░`;
case "o":
  return `░░░
█▀█
█░█
▀▀▀
░░░`;

                break;
case "y":
return `░░░░░
█▄░▄█
░▀█▀░
░▒▀░░
░░░░░`;
                case " ":
                  return `░
░
░
░
░`;
                  break;
    }
  }

  obtenerAncho(letra:string){
    return letra.indexOf("\n");
  }


}


export class Letra{
   imp:string;
   ancho:number;
}