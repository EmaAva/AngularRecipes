import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRecipesSheetComponent } from './app-recipes-sheet/app-recipes-sheet.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppInsertModalComponent } from './app-insert-modal/app-insert-modal.component';
import { AppModifyModalComponent } from './app-modify-modal/app-modify-modal.component';
import { AppAddModalComponent } from './app-add-modal/app-add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppRecipesSheetComponent,
    AppSidebarComponent,
    AppInsertModalComponent,
    AppModifyModalComponent,
    AppAddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
