import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {
  
  constructor(private _domSanitizer:DomSanitizer){}

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/"
    console.log(url + value);
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value)
  }

}
