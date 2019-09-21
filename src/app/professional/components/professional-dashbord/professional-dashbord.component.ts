import { Component, OnInit } from '@angular/core';
//import { FloatingActionButton } from 'ng2-floating-action-menu';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-dashbord',
  templateUrl: './professional-dashbord.component.html',
  styleUrls: ['./professional-dashbord.component.css']
})
export class ProfessionalDashbordComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-comment',
      activeIconClass: 'fa fa-cog',
      toggle: 'hover',
      buttons: this.buttons
    };
  }

  ngOnInit() {
  }

  config;
  buttons: Array<NgFloatingActionButtonModule> = [
    {
      iconClass: 'fa fa-search',
      label:"Search Investors",
      onClick: ()=>{
        this.router.navigate(['professional/investor']);
      }
    },
    {
      iconClass: 'fa fa-users',
      label:"All Requests",
      onClick: ()=>{
        this.router.navigate(['professional/allrequests']);
      }
    },
    {
      iconClass: 'fa fa-user',
      label:"Profile",
      onClick: ()=>{
        this.router.navigate(['professional/profile']);
      }
    },
  ];
 
  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];
 
  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];
 
  toggles = [
    'click',
    'hover'
  ];

  
}

