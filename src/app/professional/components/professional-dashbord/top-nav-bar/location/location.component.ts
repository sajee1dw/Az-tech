import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  districtsF: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", 
    "Galle","Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
     "Kandy", "Kegalle","Kilinochchi", "Kurunagala", "Mannar", 
    "Mathale", "Mathara","Monaragala", "Mulativu", "Nuwara Eliya", 
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee","Vavuniya", "all"
   ]
 
   constructor(
     private professionalService: professionalService
   ) { }
 
   ngOnInit() {
   } 
 
   locationButtonValue: string = "Location";
 
   onLocationClicked(location: string){
     if(location === "all"){
       this.locationButtonValue = "Location"
     }else{
       this.locationButtonValue = location;
     }
     this.professionalService.sendMessageLocation(location);
   }

}
