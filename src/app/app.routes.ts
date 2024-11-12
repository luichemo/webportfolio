import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"projects", component: ProjectsComponent},
    {path:"contact", component: ContactsComponent},
];
