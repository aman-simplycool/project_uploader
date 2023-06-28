import { Component, OnInit } from '@angular/core';
import { testimonial } from 'src/app/models/testimonials';
import { NavComponent } from '../nav/nav.component';
import { banner_details } from 'src/app/models/banner';
import { CrudService } from 'src/app/services/crud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service:CrudService,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void>{
    this.getBanners();
    this.getTestimonials();
  }
  //cl means class used for making 0th slide active
  cl:string="";
  banner_arr:banner_details[]=[];
  async getBanners(){
    var doc= this.service.getDocs("Banners");
    (await doc).forEach((snapshot)=> {
      var data=snapshot.data() as banner_details;
      this.banner_arr.push(data);
    });
  }

  //fetching testimonials data from db 
  testimonials:testimonial[]=[];
  async getTestimonials(){
    var docs=this.service.getDocs("testimonials");
    (await docs).forEach((snapshot)=>{
      var data=snapshot.data() as testimonial;
      this.testimonials.push(data);
    })
  }
  
}
