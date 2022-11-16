import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServisesService } from '../shared/servises.service';
import { someElements } from './someElements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

someData = this.servises.someArray
somesthing:any


  constructor(private servises:ServisesService,private  acRoute:ActivatedRoute) { }

  ngOnInit(): void {

  
}

}
