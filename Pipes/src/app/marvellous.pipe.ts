import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous'
})
export class MarvellousPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    let str=value;
    
    if(args[0] == "PPA")
    {
      str=str+ " Covers the programming Foundation";

    }
    else if(args[0]=="LB")
    {
      str=str+" Covers the programming Logic";
    }
    else if (args[0]=="Angular")
    {
      str=str+ " Covers the Web Developement"
    }
    return str;;
  }

}
