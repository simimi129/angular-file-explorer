import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecursiveComponent } from './file-explorer/recursive/recursive.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, FileExplorerComponent, RecursiveComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
