import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    BottomComponentComponent
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    BottomComponentComponent
  ],
  imports: [
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ComponentsModule { }
