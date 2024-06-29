import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent} from './store/store.component';

export const routes: Routes = [//route array
    {//route object
        path:'Home-route',
        component: HomeComponent
    },
    { 
        path:'Menu-route', 
        component: MenuComponent
    },
    {
        path:'About-route',
        component: AboutComponent
    },
    {
        path:'Contact-route',
        component: ContactComponent
    },
    {
        path: 'Store-route',
        component: StoreComponent
    }
];
