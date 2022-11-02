import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { CardsLayoutComponent } from './components/cards-layout/cards-layout.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserInfoService } from './services/user-info/user-info.service';



@NgModule({
  declarations: [
    AppComponent,
    TableLayoutComponent,
    UserDetailsComponent,
    FilterPipe,
    CardsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatSortModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
