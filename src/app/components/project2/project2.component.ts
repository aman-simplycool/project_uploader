import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { getDownloadURL, ref, Storage, uploadBytes, deleteObject } from '@angular/fire/storage';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  constructor(
    private router:Router,
    private storage:Storage,
    private toast:HotToastService,
    private service:CrudService
  ) { }

  ngOnInit(): void {
  }

  proj_details=new FormGroup({
      github_id:new FormControl(""),
      linkedin_id:new FormControl(""),
      email_id:new FormControl(""),
      topic:new FormControl(""),
      name:new FormControl(""),
      img:new FormControl(""),
      back_img:new FormControl(""),
      cllg_name:new FormControl("")
    }
  );


  //getting the image

  file:any={};
  img_name:string="";
  flag1:boolean=false;
  async selectImage($event:any){
    this.flag1=true;
    this.file=$event.target.files[0];
    this.img_name=$event.target.files[0].name;
  }

  //uploading the images
  flag:boolean=false;
  url:string="";
  async uploadImage(){
    this.flag=true;
    var popup=this.toast.loading("uploading the image");
    var reff=ref(this.storage,this.proj_details.value.cllg_name!.toLowerCase()+"/"+this.proj_details.value.topic+"/"+this.img_name);
    await uploadBytes(reff,this.file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        this.url=url;
      })
    })
    popup.close();
    this.toast.success("image sucessfully uploaded");
  }

  //saving the form
      
async saveForm(){
var coll=this.proj_details.value.cllg_name!.toLowerCase();
var proj=this.proj_details.value.topic!.toLowerCase();
console.log(this.proj_details);
var alert=this.toast.loading("adding post");  
var data=this.proj_details.value;
data.img=this.url;
this.service.setDocs(data,"colleges/"+coll+"/projects/"+proj).then(()=>{
 alert.close();
 this.toast.success("successfully added");
 this.proj_details.reset();
 this.router.navigate(['/project']);
}).catch((err)=>{
  console.log(err);
  this.toast.error("some error occured");
})
}

}

