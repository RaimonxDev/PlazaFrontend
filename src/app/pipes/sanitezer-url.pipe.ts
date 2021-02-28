import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizerUrl'
})

export class SanitizerUrlPipe implements PipeTransform {
  constructor(private domSeguro: DomSanitizer) {}

  transform( url: string , value: string): SafeResourceUrl {

    // En produccion las url se guardan en AWS S3. Strapi devuelve la url completa
    if(url === undefined  || url === ''){
      return this.domSeguro.bypassSecurityTrustResourceUrl(value);
    }
    return this.domSeguro.bypassSecurityTrustResourceUrl(url + value);
  }

}
