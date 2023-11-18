import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import {ref } from '@angular/fire/storage';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: any;

  constructor(private storage: Storage) { }

  async takePicture() {
    try {
      if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions()
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      }

      )
      console.log(image)
      this.image = image.dataUrl
      const blob = this.dataURLtoBlob(image.dataUrl)
      //const url = await this.uploadImage(blob, image)
      //console.log(url)
    } catch (e) {
      console.log(e)
    }
  }

  dataURLtoBlob(dataUrl: any) {
    var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], {
      type: mime
    })
  }

  // async uploadImage(blob: any, imageData: any) {
  //   try {
  //     const currentDate = Date.now()
  //     const filePath = `test/${currentDate}.${imageData.format}`;
  //     const fileRef = ref(this.storage, filePath)
  //     const task = await uploadBytes(fileRef, blob)
  //     console.log('task', task)
  //     const url = getDownloadURL(fileRef)
  //     return url
  //   } catch (e) {
  //     throw (e)
  //   }
  // }

}
