import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent} from './store/store.component';
import { ProductComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

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
    },
    {
        path:'product/:id',
        component: ProductComponent
    },
    {
        path: 'Cart-route',
        component: CartComponent
    },
    {
        path: '',
        redirectTo: 'Home-route',pathMatch:'full'

    }
];
