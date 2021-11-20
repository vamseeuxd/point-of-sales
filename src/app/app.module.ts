import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './tables/tables.component';
import { ProductsComponent } from './products/products.component';
import { PricesComponent } from './prices/prices.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'prices', component: PricesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'tables', component: TablesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TablesComponent,
    ProductsComponent,
    PricesComponent,
    OrdersComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
