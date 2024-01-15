import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { BookingsComponent } from "./pages/bookings/bookings.component";
import { LogInComponent } from './pages/log-in/log-in.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path:'home',
        title: '✨JustTrains✨',
        component:HomeComponent,
    },
    {
        path:'search',
        title: '✨Search✨',
        component:SearchComponent,
    },
    {
        path:'bookings',
        title:'✨Bookings✨',
        component:BookingsComponent,
    },
    {
        path:'log-in',
        title: '✨Sign in✨',
        component:LogInComponent,
    },
    {
        path:'admin',
        title: '✨Admin Dashboard✨',
        component: AdminComponent,
        canActivate: [authGuard],
    },
    {
        path:'error/Unauthorized',
        title: '✨ERROR✨',
        component: UnauthorizedComponent
    }
];
