import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UpperCase implements PipeTransform{
    transform(value: any, ...args: any[]): string {
        return value.toUpperCase();
    }
}