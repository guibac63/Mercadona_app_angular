import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor( private sanitizer: DomSanitizer) { }

  public createImages(product:any) {
    
    const productImage: any = product.image;

    const imageBlob = this.dataURItoBlob(productImage.picByte, productImage.type);

    const imageFile = new File([imageBlob], productImage.imageName, {type: productImage.type});

    const finalFileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };

    product.image = finalFileHandle;

    return product;
  }

  public dataURItoBlob(picBytes, imageType) {
    
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8array = new Uint8Array(arrayBuffer);

    for(let i = 0; i <byteString.length;i++) {
      int8array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8array],{type: imageType});

    return blob;

  }
}
