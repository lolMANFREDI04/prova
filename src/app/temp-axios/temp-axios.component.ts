import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-temp-axios',
  templateUrl: './temp-axios.component.html',
  styleUrls: ['./temp-axios.component.scss']
})
export class TempAxiosComponent {
  prodotto: any[] = [];
  ChangeDetectorRef: any;
  iod: any;

  //Sid: number = 0;
  //gg: number= 0;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /*redirectToHome() {
    this.router.navigate(['/home']);
  }*/

  ngOnInit() {
    // Extract 'id' from the route parameters
    this.iod = this.route.snapshot.paramMap.get('val')

    debugger;
    this.ottieniDatiDalServer(this.iod);

    //this.gg= this.iod;

    //console.log(this.iod+" "+this.Sid);


    /*if (this.iod==this.Sid) {

      this.router.navigate(['/home']);
    }*/
  }

  ottieniDatiDalServer(iod: any): void /*number*/ {
    const urlServer = 'http://localhost:3000/peluche/'+this.iod;
    axios.get(urlServer)
      .then((response) => {
        console.log(response);
        debugger;

        // Clear the existing array
        this.prodotto = [];



        // Use a for loop to iterate over the response data
          const item = response.data;
          this.prodotto.push(item);
          /*const soloID = response.data.id;
          this.Sid = soloID;*/
          debugger;


        console.log('Dati dal server:', this.prodotto);
        //this.ChangeDetectorRef.detectChanges();
      })
      .catch((error) => {
        console.error(error);
        if(error.response && error.response.status === 404){
          this.router.navigate(['/home']);
        }
      });

    //return this.Sid;
  }
}
