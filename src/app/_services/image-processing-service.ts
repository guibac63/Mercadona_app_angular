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
    
    console.log(product)

    const productImage: any = product.image;

    const finalFileHandle: FileHandle = {
      file: null,
      url: null,
      image_url:productImage.imageUrl
    };

    product.image = finalFileHandle;

    return product;
  }

}
