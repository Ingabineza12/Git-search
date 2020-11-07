import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // public users:string;
  users:any;
  user:User;
  

  private username:string;
  private access_token='00e2fad4d61e393feb0a6af961392181b7c2713b';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='Ingabineza12';
    this.access_token='00e2fad4d61e393feb0a6af961392181b7c2713b';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
   }
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  

  }

}

