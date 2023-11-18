import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import {Storage} from '@angular/fire/storage'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FileUploadModule
  ],
  declarations: [HomePage,MultiFileUploadComponent],
  providers:[Storage]
})
export class HomePageModule {}
