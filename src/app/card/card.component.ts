import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';
import axios from 'axios';

import { MatDialogConfig } from '@angular/material/dialog';

import { ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface Peluche {
  id: number;
  Nome: string;
  immagine: any;
  Descrizione: any;
  Prezzo: number;
  Quantita: number;
  //dimenzione{ x:decimal; y:decimal; z:decimal }
  Materiale: string;
  Data_Rilascio: Date;
  Produttore: string;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
}

interface Oggetto {
  boolla: boolean;
  idCardino: number; // Presumo che idCard sia una stringa, modificalo secondo necessità
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  [x: string]: any;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  peluche: Peluche[] = [];

  bool: boolean = false;

  ChangeDetectorRef: any;

  //Peluche: string[] = [];

  //Peluche: { id: number; nome: string; Prezzo:number; Quantità:number; }[] = [];

  variabile: String = new String();

  ngOnInit() {
    this.ottieniDatiDalServer();
  }

  public ottieniDatiDalServer(): void {
    const urlServer = 'http://localhost:3000/peluche';
    debugger;
    axios
      .get(urlServer)
      .then((response) => {
        console.log(response);
        this.peluche = response.data;

        //this.variabile= response.data[0].title;
        //console.log('Dati dal server:', this.variabile);
        this.ChangeDetectorRef.detectChanges();
      })
      .catch((error) => {
        console.error(error);
      });
    this.changeDetectorRef.detectChanges();
  }

  stop(e: any) {
    debugger;
    e.stopPropagation();
    return false;
  }

  disattivato: string= 'gray';

  selez:string=  "linear-gradient(163deg, #f5f500 0%, #ff3c00 100%)";

  deleteMode(){
    debugger
    if(this.bool==false){
      this.bool=true;
      this.disattivato="white";
      this.selez=  "linear-gradient(163deg, #00fff7 0%, #3300ff 100%)";

    }else{
      this.bool=false;
      for(var i=0; i<this.selCardId.length; i++){
        this.selCardId.splice(i, 1);

        var mioElemento = document.getElementById("card-"+this.selCardId[i])

        if(mioElemento) { // Verifica se l'elemento esiste prima di rimuovere la classe
          mioElemento.classList.remove("card-ridotta");
        }
      }
      this.disattivato="gray";
      this.selez=  "linear-gradient(163deg, #f5f500 0%, #ff3c00 100%)";
    }

  }

  selCardId: number[] = [];

  selected(cardId: any){
    debugger;

    var mioElemento = document.getElementById("card2-"+cardId)

    var a:boolean=false;

    var con:boolean=true;

    for(var i=0; i<=this.selCardId.length; i++){

      if(a==true){
        break;
      }

      if(this.selCardId[i]==cardId){
        if(a==false){
          this.selCardId.splice(i, 1);

          if(mioElemento) { // Verifica se l'elemento esiste prima di rimuovere la classe
            mioElemento.classList.remove("card-ridotta");
          }

          a=true;
          con=false;
        }
      }
    }

    if(con==true){

      this.selCardId.push(cardId);

      if(mioElemento)
        mioElemento.classList.add("card-ridotta");
    }
    a=true;
  }

  delt(): void{
    debugger
    for(var i=0; i<this.selCardId.length; i++){
      const urlServer = 'http://localhost:3000/peluche/'+this.selCardId[i];

      axios.delete(urlServer)

      .then( (response) => {
        console.log(response.data);
        this.ottieniDatiDalServer();
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  }

  openDialog(carta: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { carta: carta, cardComponent: this }; // Imposta i dati che vuoi passare al dialog

    this.dialog.open(DialogElementsExampleDialog, dialogConfig);
  }

}

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TruthyTypesOf } from 'rxjs';


@Component({
  selector: 'modale-pop-up',
  templateUrl: 'modale-pop-up.component.html',
  styleUrls: ['./modale-pop-up.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule],
})
export class DialogElementsExampleDialog {
  idd: any;

  ///
  cardComponent: any;

  constructor(private dialogRef: MatDialogRef<DialogElementsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: { carta: any; cardComponent: any }) {
    this.idd = data.carta.id;
    this.cardComponent = data.cardComponent;

  }

  valore: string = this.data.carta.Nome;

  gg: string="";


  dialog:any;

  bozza() {
    if(this.valore.length>4){


    debugger;

    console.log(this.valore);


    const urlServer = 'http://localhost:3000/peluche/'+this.idd;

    axios
      .put(urlServer, {
        id: this.data.carta.id,
        Nome: this.valore,
        immagine: this.data.carta.immagine,
        Descrizione: this.data.carta.Descrizione,
        Prezzo: this.data.carta.Prezzo,
        Quantita: this.data.carta.Quantita,
        Materiale: this.data.carta.Materiale,
        Data_Rilascio: this.data.carta.Data_Rilascio,
        Produttore: this.data.carta.Produttore,
        SizeX : this.data.carta.SizeX,
        SizeY : this.data.carta.SizeY,
        SizeZ : this.data.carta.SizeZ
      })
      .then( (response) => {
        console.log(response);
        this.cardComponent.ottieniDatiDalServer();
        this.dialogRef.close(); // Chiude la finestra di dialogo solo in caso di successo

      })
      .catch(function (error) {
        console.log(error);
      });
    } else this.errore();
  }

  errore(){
    console.log("errore riscontrato numero di caratteri insufficente");
    this.gg="il nome deve contenere 5 o più caratteri";
  }

}
