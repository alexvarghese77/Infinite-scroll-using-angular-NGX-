import { Component, OnInit } from '@angular/core';
import {ApicallsService} from './apicalls.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
//   pagenum:number=1;
//   data=[];
//   pageinfo:any;
//   array = [];
//   a=1;

  
//   constructor(private apicallsService:ApicallsService){
   
  
//   }
//   ngOnInit(){
//     // this.a=this.apicallsService.getpage(this.pagenum++);
//     // for (let index = 1; index < this.a; index++) {
//     //   this.array.push(index)
//     // }
//     this.apicallsService.getHeroes(this.pagenum).then(result=>
//       {
//         this.data=result['content-items'].content;
//         this.pageinfo=result;

//       });
//     console.log("data",this.data);
//   }
//   onScroll() {
//   //   this.pagenum+=this.pagenum;
//   //   this.a=this.apicallsService.getpage(this.pagenum);
//   //   for(let i=this.array.length;i<this.a;i++)
//   //   this.array.push(i);
 
//  this.pagenum=this.pagenum+1;
//  console.log(this.pagenum);
//   this.apicallsService.getHeroes(this.pagenum).then(result=>{
//     this.data.push(result['content-items'].content);
//     this.pageinfo=result;
//   });
//   }

ngOnInit(){}

stones: Array<any>
    margin: number = 10;

    constructor() {

        this.stones = new Array<Object>();
        this.populate(this.margin);
    }

    onScroll(event: any) {

        if (((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) || ((window.innerHeight + document.documentElement.scrollTop) >= document.body.offsetHeight)) {
            this.populate(this.margin);
        }
    }

    populate(margin: number): void {

        for (let i = 0; i < margin; i++) {
            this.stones.push(new Object());
        }
    }


}
