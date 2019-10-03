import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';


import{AddIdeaComponent } from 'src/app/idea/components/add-idea/add-idea.component' 
import{IdeaHomeComponent} from 'src/app/idea/components/idea-home/idea-home.component'
import{ViewIdeaComponent } from 'src/app/idea/components/view-idea/view-idea.component'




const routes: Routes = [
    {
      path: '',
      component: IdeaHomeComponent
      
    },
    {
      path: 'addidea',
      component: AddIdeaComponent
    },
    {
      path: 'viewidea',
      component: ViewIdeaComponent 
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class IdeaRoutingModule { }
  