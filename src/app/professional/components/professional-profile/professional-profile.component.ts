import { Component, OnInit } from '@angular/core';
import { professionalService } from '../../shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {

  url = '';
  imageView = false;




  email = "";
  image = "";
  location = "";
  name = "";
  mobile = "";



  constructor(
    private professionalService: professionalService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.professionalService.getProfessionalProfile(this.auth.currentUser.user.email)
      .subscribe(res => {
        console.log(res.json().profile);
        this.name = res.json().profile.name;
        this.email = res.json().profile.email;
        this.mobile = res.json().profile.mobile;
        this.location = res.json().profile.location;
        this.email = res.json().profile.email;
      })
  }


  img: File = null;

  updateImage() {
    if (this.img === null) {
      console.log("null image");
      return
    }

    console.log("update image");
    console.log(this.img);

    let img = { 'image': this.url, 'email': this.auth.currentUser.user.email, 'role': 'professional' }
    console.log(img);

    this.professionalService.uploadImage(img)
      .subscribe(res => {
        console.log(res.json());
      })


  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target['result'];
      }
      this.imageView = true;
      this.img = event.target.files[0];
    }

  }

}
