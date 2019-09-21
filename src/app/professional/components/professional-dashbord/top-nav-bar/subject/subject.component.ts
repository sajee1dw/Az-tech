import { Component, OnInit } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectsF: string[] = [];
 
  constructor(
    private professionalService: professionalService
  ) { }

  ngOnInit() {
    this.professionalService.getAllSubjects()
     .subscribe(response=>{
       this.subjectsF = response.json().subject;
     })
  }


  subjectButtonValue: string = "Subject";

  onLocationClicked(subject: string){
    if(subject === "all"){
      this.subjectButtonValue = "Subject";
    }else{
      this.subjectButtonValue = subject;
    }

    this.professionalService.sendMessageSubject(subject);
  }

}
