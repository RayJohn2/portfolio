import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectModalComponent } from './project/project-modal/project-modal.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:"",
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:"home",
        component: HomepageComponent
    },
    {
        path:"about",
        component: AboutpageComponent
    },
    {
        path:"projects",
        component: ProjectComponent
    },
    {
        path:"projects/description/:id",
        component: ProjectModalComponent
    },
    {
        path:"contact",
        component: ContactpageComponent
    },
    { 
        path: "**", 
        component: NotfoundComponent 
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })]
})
export class AppRoutingModule { }
