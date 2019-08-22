import { Component } from '@angular/core';
import { DeepService } from './deepMerge.service';
import * as deep from './deep';
import { PhonePipe } from './phone.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number = 0;
  arr = [
    {id: 1, parentid: 0},
    {id: 2, parentid: 0},
    {id: 3, parentid: 1},
    {id: 4, parentid: 3},
    {id: 5, parentid: 4},
    {id: 6, parentid: 4},
    {id: 7, parentid: 3},
    {id: 8, parentid: 2}
];

dummyArr: Array<any> = [['Visa','communication', '*****-*****-1389'],['Visa','communication', '*****-*****-13891'], ['Visa','corps', '*****-*****-1389']];

result: any;


 constructor(private deepService: DeepService) {
   


 // this.getTreeViewData(this.dummyArr);
    console.log(this.dummyArr);
    const mainarr = [];
    this.dummyArr.forEach((arr)=>{
        mainarr.push(this.getArrForFlatten(arr));
    
    });

    this.result = [];
    mainarr.forEach((arr)=>{
      this.result.push(this.getUnflatten(arr, 0));
     // this.checkIfArrayExist(this.result,this.getUnflatten(this.getArrForFlatten(arr), 0));
    });
    var r =this.deepService.mergeArrays(this.result);
       

    console.log(r, this.result);
 }


public getTreeViewData(data: Array<any>)
{
  const res = data.map((d)=>{
    return {name: d[0], children: this.getTreeViewData(d[1])};
  });
  console.log(res);
}



public getArrForFlatten(arr: Array<any>){
  let res= arr.map((value, index)=>{
    let parentId = index-1;
    if(index=== 0) {
       parentId = 0;
     }
   return {id: index +1 , name: value, parentid: index};
  });

  console.log(res);
  return res;
}


 public getUnflatten(arr, parentid) {
  let output = []
  for(const obj of arr) {
    if(obj.parentid === parentid) {
      let children = this.getUnflatten(arr, obj.id)
      if(children.length) {
        obj.children = children;
      }
      output.push(obj);
    }
  }
  return output;
}

  public getUnflattenOrg(arr, parentid) {
    let output = []
    for(const obj of arr) {
      if(obj.parentid == parentid) {
        let children = this.getUnflattenOrg(arr, obj.id);
        if(children.length) {
          obj.children = children;
        }
        output.push(obj);
      }
    }
    return output;
  }

  public checkIfArrayExist(result,obj): void{
    if(this.result.length===0)
    {
     this.result.push(obj);
    } else {
      result.forEach((resultArr, index)=> {
        console.log(obj);
        if(resultArr.name === obj.name){
         
        } else {
          this.result.push(obj);
        }
     });
    }
       
  }


 public formatNumber($event)
 {
   this.number = new PhonePipe().transform($event);
 }


}
