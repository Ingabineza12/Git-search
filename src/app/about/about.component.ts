import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../services/profile.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profile:any;
  repos:any;
   username:any;

  constructor(public profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile=profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe (profile => {
      console.log(profile);
      this.profile=profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

  

  ngOnInit() {
  }

}

