import { Component, OnInit, Input } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  constructor(
    private professionalService: professionalService
  ) { }

  ngOnInit() {
    this.professionalService.getAchievements(this.email)
      .subscribe(res => {
        let arr = res.json().achievements;
        for(let item of arr){
          if(item.hide == 1){
            arr.splice(arr.indexOf(item), 1);
          }
        }
        this.achievements = arr;
        console.log(this.achievements);
      });
  }

  @Input() email;
  @Input() image;

  achievements = [];

}
