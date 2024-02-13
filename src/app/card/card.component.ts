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

  delButtV: boolean=true;

  disattivato: string= 'gray';

  selez:string=  "linear-gradient(163deg, #f5f500 0%, #ff3c00 100%)";


  deleteMode(){
    debugger
    for(var i=0; i<this.peluche.length; i++){
      this.free[i]={
        boolla: false,
        idCardino: 0
      }
    }
    if(this.bool==false){
      this.bool=true;
      this.disattivato="white";
      this.selez=  "linear-gradient(163deg, #00fff7 0%, #3300ff 100%)";
      //this.peluche.map((pel) => {const ogg = new Oggetto {c = pel.id, boo = false}; this.free.p})

    }else{
      this.bool=false;
      for(var i=0; i<this.selCardId.length; i++){
        this.selCardId.splice(i, 1);
        this.free[i].boolla=false;
      }
      // this.delButtV= false;
      this.disattivato="gray";
      this.selez=  "linear-gradient(163deg, #f5f500 0%, #ff3c00 100%)";
      // this.con=false;

    }

  }



  //dataObject: { [idCard: number]: boolean } = {};


  //con:boolean=false;

  // con:boolean[]=[];

  // free: Oggetto;

  // free: any[{
  //   ciao: boolean,
  //   IdSel: number
  // }]=[];



  // {
  //   boolla: false,
  //   idCardino: 0
  // }

  //colSel:boolean=false;

  free: Oggetto[]=[];

  selCardId: number[] = [];

  CartaID:any;

  select(cardId: any) {
    //this['d']=0;


    // for(var i=0; i<this.selCardId.length; i++){
    //   this.free[i]={
    //     boolla: false,
    //     idCardino: this.selCardId[i]
    //   }
    // }

    this.CartaID= cardId;


    // for(var i=0; i<this.peluche.length;i++){

    // }


    // Aggiungi l'ID della carta selezionata all'array
    //this.selCardId.push(cardId);

    var a:boolean=false;

    var con:boolean=false;

    for(var i=0; i<=this.selCardId.length; i++){
      debugger;

      // this.free[i].IdSel=this.selCardId[i];
      if(a==true){
        break;
      }

      if(this.selCardId[i]==cardId){  //&& this.free[i].boolla==true  // && this.free[i].boolla==true
        if(a==false){
          this.selCardId.splice(i, 1);
          //this.scale= "scale(1)";
          // this.con=false;
          this.free[i].boolla=false;
          this.free[i].idCardino=0;

          //con=this.free[i].boolla;

          a=true;
          con=false;
        }



      }else{
        con=true;

        //a=true;
        // if(a==false){
        //   this.free[i].boolla=true;
        //   //this.con=this.free[i].boolla;
        //   this.selCardId.push(cardId);
        //   // if(this.free[i].idCardino!=0){

        //   // }else{
        //   if(this.free[i].idCardino!=0){
        //     do{
        //       i=i+1;
        //     }while(this.free[i].idCardino!=0);
        //   }
        //   this.free[i].idCardino=this.selCardId[i];

        // }
        // a=true;

      }



      // if(this.free[i].boolla==true){
      //   this.selCardId.push(cardId);
      //   this.free[i].idCardino=this.selCardId[i];
      //   //this.scale= "scale(0.98)";
      // }
    }

    var p: number=0;

    if(con==true){

      //this.con=this.free[i].boolla;

      // if(this.free[i].idCardino!=0){

      // }else{
      if(this.free[p].idCardino!=0){
        do{
          p=p+1;
        }while(this.free[p].idCardino!=0);  // && this.free[p].idCardino!=cardId
      }
      this.free[p].boolla=true;

      this.selCardId.push(cardId);

      this.free[p].idCardino=this.selCardId[p];


    }
    a=true;




    for(var i=0; i<this.selCardId.length; i++){
      console.log(this.selCardId[i]);
    }
    // Puoi fare ulteriori operazioni qui in base alle tue esigenze
  }

  //buttonColor: string = '';


  //scale:string= "";

  sezionato:boolean=false;

  // ChangeCol(){
  //   //this.buttonColor = 'blue';

  //   this.sezionato=true;

  //   this.scale= "scale(0.98)";
  //   this.selez="linear-gradient(163deg, #00fff7 0%, #3300ff 100%)";


  // }

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

  gg(){
    console.log("ciao");
  }

  // select(bool:boolean){
  //   const dial = new MatDialogConfig();
  //   dial.data = { bool: bool }; // Imposta i dati che vuoi passare al dialog

  //   this.dialog.open(DialogElementsExampleDialog, dial);
  // }

  openDialog(carta: any) {
    //const InC = new MatDialogConfig();
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
  /*InonC(err:any):any{
    this.dialog= err;

  }*/

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

  // modificaDatiNelServer(): void {

  // }
}
