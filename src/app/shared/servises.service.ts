import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { someElements } from '../home/someElements';

@Injectable({
  providedIn: 'root'
})
export class ServisesService {

  someArray:someElements[] = [
    { id:1 ,descr:`descr1` , title:`title1` ,text:`es aris pirveli masivis info`},
    { id:2 ,descr:`descr2` , title:`title2`,text:`es aris meore masivis info`},
    { id:3 ,descr:`descr3` , title:`title3`,text:`es aris mesame masivis info`}
    ];
    


  constructor(private  acRoute:ActivatedRoute) { }

ngOnInit(): void {
 console.log( this.acRoute.snapshot.params)

this.acRoute.queryParams.subscribe(res =>{
  console.log(res)

})
  

}

}
