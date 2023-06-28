import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';
import { getDocs,addDoc,deleteDoc,updateDoc,Firestore,doc, getFirestore, collection, getDoc, setDoc} from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private auth:Auth) { }
  db=getFirestore();

  //getting all docs
  async getDocs(Collection:string){
    const snapshot=await getDocs(collection(this.db,Collection));
    snapshot.forEach(doc=>{
      console.log(doc);
    });
    return snapshot;
  }

  // add the docs
  async addDocs(obj:any,Collection:string){
    await addDoc(collection(this.db,Collection),obj).then((res)=>{
      console.log(res);
      console.log("added sucesfully");  
    })  
    .catch((err)=>{
      console.log("some error occured");
    })
  }

  //get docs by college

  async getCollegeDoc(collection_name:string){
      const ref=collection(this.db,collection_name)
      const snapshot=await getDocs(ref);
      snapshot.forEach((doc)=>{
        // console.log(doc.data());
      })
      return snapshot;
  }


  //setDoc function
  async setDocs(obj:any,Collection:string){
    await setDoc(doc(this.db,Collection),obj).then((res)=>{
      console.log(res);
      console.log("added sucesfully");  
    })  
    .catch((err)=>{
      console.log("some error occured");
    })
  }

}
