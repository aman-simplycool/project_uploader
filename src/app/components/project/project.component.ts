import { Component, OnInit } from '@angular/core';
import { doc, getDoc } from '@angular/fire/firestore';
import { project_details } from 'src/app/models/projects_details';
import { CrudService } from 'src/app/services/crud.service';
import { Auth } from '@angular/fire/auth';
import { getFirestore } from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private crud:CrudService,
    private auth:Auth,
    private toast:HotToastService
  ) {}

  async ngOnInit(): Promise<void>{
    this.getDocs();
  }

db=getFirestore();

  //getting all the random docs
  //for showing on first page
  project_det_array:project_details[]=[];
  async getDocs(){
   (await this.crud.getDocs('SelectedProjects')).forEach((doc)=>{
    var temp=doc.data as unknown as project_details;
    temp.id=doc.id;
    this.project_det_array.push(temp) ;
   })
  }

  //string that will hold college name
  //array specifically holding all college projects
  college_name:string="";  
  college_proj:project_details[]=[];
  flag1:boolean=false;
 

  async getDocsByCollege(){
    this.toast.loading("loading docs");
    this.flag1=true;
    console.log(this.college_name);
    this.college_name=this.college_name.toLowerCase();
    console.log(this.college_name);
    var data=this.crud.getCollegeDoc("colleges/"+this.college_name+"/projects");
    (await data).forEach((doc)=>{
      var snapshot=doc.data() as project_details;
      snapshot.id=doc.id;
      this.college_proj.push(snapshot);
    })
  }
  
  //function that transfers the value entered in search bar to college_name


  }
