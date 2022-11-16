import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServisesService } from 'src/app/shared/servises.service';
import { someElements } from '../someElements';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
infoarray = this.servises.someArray;

newData!:any;

  constructor(private  acRoute:ActivatedRoute,private servises:ServisesService) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe((response:any)=>{
      console.log(response)
    
      this.infoarray.filter(el=>{
  
        if(el.id == response.id){
        
        // this.newData.push(this.infoarray.(el.text))
        this.newData == (el.text)
        console.log(el.text)
 
       
        
        }
        })

     
// this.anydata = this.infoarray.filter(item=>item.id = 1)
//       console.log(this.anydata + 'ssss')
    


    // this.acRoute.queryParams.subscribe(res =>{
    //   console.log(res)
    // })
  })
    





      // this.anydata = this.infoarray.filter(item=>item.id = res:Number)
      // console.log(this.anydata)
    
//       this.infoarray.map((text)=>{
//         console.log( text + 'rame')
//         })
// console.log(this.infoarray)
// this.anydata = this.

  }



}
