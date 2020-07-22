import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
texto:string="fa";

textoGenerado:Array<Linea>=new Array<Linea>();
textoCopiar:string="";
opcionSeleccionado="";

selecOpciones:Array<string>=new Array<string>();
  constructor() { 
    this.selecOpciones.push("f a s i l i to");
    this.selecOpciones.push("c e n s i yo");
    this.selecOpciones.push(`f a c i l i t o`);
    this.selecOpciones.push("r e p  o r t   ");
    this.opcionSeleccionado=this.selecOpciones[0];
  }
capturar(){
  this.texto=this.opcionSeleccionado;
  this.algo();
}
  ngOnInit(): void {
    this.texto="f a s i l i to";
    this.algo();

  }
  copiar(elemento){
    elemento.select();
    document.execCommand('copy');
    elemento.setSelectionRange(0, 0);
  }

  algo()
  {
    this.generar(this.texto);
    this.rellenarBlancosLineas();
    this.generarTexto();
  }
  letraEspacio(){
    return "░░░░░░░░░░░░░░░░░░░░░░░░░"
  }
  generarTexto(){
    let tope=25;
    let contTope=0;
    this.textoCopiar="";
    for(let k=0;k<this.textoGenerado.length;k++)
    for(let i=0;i<this.textoGenerado[k].alto;i++){
      for(let j=0;j<this.textoGenerado[k].letras.length;j++)
      {
        let ancho=this.textoGenerado[k].letras[j].ancho;
       this.textoCopiar+=this.textoGenerado[k].letras[j].imp.substr(i*ancho,ancho) 
      }
      this.textoCopiar+="\n"
    }
  }

SumarAnchos(linea:Linea){
  let anchos=0;
  for(let i=0;i<linea.letras.length;i++){
    anchos+=linea.letras[i].ancho;
  }
  return anchos;

}

rellenarBlancosLineas(){
  for(let k=0;k<this.textoGenerado.length;k++)
  for(let i=0;i<this.textoGenerado[k].alto;i++)
    {
      let anchos=this.SumarAnchos(this.textoGenerado[k]);
      if(anchos<25){
        let anadir_izquierda=Math.floor((25-anchos)/2);
        let anadir_derecha=anadir_izquierda + ((25-anchos) % 2);
        
        for(let j=0;j<anadir_izquierda;j++)
        this.textoGenerado[k].letras.unshift({imp:"░░░",ancho:1});

        for(let j=0;j<anadir_derecha;j++)
        this.textoGenerado[k].letras.push({imp:"░░░",ancho:1});
      }
    }
    
}
  contarSaltos(text:string):number{
    let n:number=0;
    for(let i=0;i<text.length;i++)
    {
      if(text.charCodeAt(i)==10) n++;
    }
    return n;
  }
  altoTam(){
    return this.contarSaltos(this.texto)*4+3;

  }
  generar(text:string){
    this.textoGenerado=new Array<Linea>();
    this.textoGenerado.push(new Linea());
    let k=0;
    for(let i=0;i<text.length;i++){
      let letraGenerada="";
      let letra=text.charAt(i);
      let anchoLetra=0;
      let altoLetra=0;
      if(text.charCodeAt(i)!=10) 
      {
        letraGenerada=this.generarLetra(letra)
        anchoLetra=this.obtenerAncho(letraGenerada);
        altoLetra=this.contarSaltos(letraGenerada)+1;

        letraGenerada=letraGenerada.replace(/(\r\n|\n|\r)/gm,"");
        this.textoGenerado[k].alto=altoLetra;
        this.textoGenerado[k].letras.push({
          ancho:anchoLetra,
          imp:letraGenerada});
      }
      else  
      {
        letraGenerada=this.letraEspacio();
        anchoLetra=25;
        this.textoGenerado.push(new Linea());
        k++;
        this.textoGenerado[k].alto=1;
        this.textoGenerado[k].letras.push({
          ancho:anchoLetra,
          imp:letraGenerada});
        
        this.textoGenerado.push(new Linea());
        k++;
      }
    }

  }
  mostrar(e,f){

  }


  generarLetra (letra:string):string{
    switch(letra){
      case "a":
        return `█▀█
█▀█
▀░▀`;
case "g":
  return `█▀▀▀
█░▀█
▀▀▀▀`;
case "b":
  return `█▀▄
█▀█
▀▀░`;
        break;
        case "c":
          return `█▀
█░
▀▀`;
case "d":
  return `█▀▄
█░█
▀▀░`;
          break;
        case "f":
          return `█▀▀
█▀░
▀░░`;
          break;
          case "r":
            return `█▀▀▄
█▀▀█
▀░░▀`;
            break;
          case "s":
            return `█▀▀
▀▀█
▀▀▀`;
            break;
            case "t":
              return `▀█▀
░█░
░▀░`;
              break;
              case "u":
                return `█░█
█░█
▀▀▀`;
                break;
                case "v":
                  return `█░█
█░█
░▀░`;
case "w":
  return `█░█░█
█░█░█
░▀░▀░`;
                  break;
                  case "h":
                    return `█░█
█▀█
▀░▀`;
            case "i":
              return `▀
█
▀`;
              break;
              case "l":
                return `█░
█░
▀▀`;
case "j":
  return `░░▀
▄░█
▀▀▀`;
case "k":
  return `█░█░
█▀▄░
▀░░▀`;
case "m":
  return `█▄░▄█
█▀█▀█
▀▒▒░▀`;
case "n":
  return `█▄░█
█▀██
▀▒▒▀`;
case "p":
  return `█▀█
█▀▀
▀░░`;
case "e":
  return `█▀
█▀
▀▀`;
case "o":
  return `█▀█
█░█
▀▀▀`;
case "q":
  return `█▀█░
▀▀█░
░▀█▀`;

                break;
                case "x":
return `█░░░█
░▀▄▀░
▄▀░▀▄`;
case "y":
return `█▄░▄█
░▀█▀░
░▒▀░░`;
case "z":
  return `▀▀▀█
░▄▀░
▀▀▀▀`;
                case " ":
                  return `░
░
░`;
case "<":
  return `░░▄▀
░▀▄░
░░░▀`;
case ":":
  return `▄
░
▀`;

case "\r\n":
  return `░░░░░░░░░░░░░░░░░░░░░░░░░`;
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
export class Linea{
  letras:Array<Letra>=new Array<Letra>();
  alto:number;
}