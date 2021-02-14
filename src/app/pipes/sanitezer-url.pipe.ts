import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';


@Pipe({
  name: 'sanitizerUrl'
})

export class SanitizerUrlPipe implements PipeTransform {
  constructor(private domSeguro: DomSanitizer) {}

  transform( url: string , value: string): SafeResourceUrl {
    return this.domSeguro.bypassSecurityTrustResourceUrl(url + value);
  }

}
