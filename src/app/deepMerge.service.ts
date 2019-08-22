import { Injectable } from '@angular/core';

@Injectable()
export class DeepService {
 
    constructor() {}


   public mergeArrays(arr: Array<any>):any{
      let result = {};
      let ret = [];
      arr.forEach((r) => {
        r = r[0];
        if (!result[r.name]) result[r.name] = [];
        result[r.name].push(r);
      });
      console.log(result);
      Object.keys(result).forEach((key)=>{
       const keyData = result[key];
       const obj = keyData[0];
       for (let l = 1; l < keyData.length; l ++){
          if(keyData[l].children)
          {
            if (!obj.children) obj.children = [];
            if(obj.children)
            obj.children = obj.children.concat(keyData[l].children);

          }
       }
       if (obj.children && obj.children.length) obj.children = this.merge(obj.children);
       ret.push(obj);
      });

       console.log(ret);
       return ret;
   }







    public merge(arr) {  
      const idLinks = {};
        const ret = [];
          arr.forEach((r) => {
            if (!idLinks[r.name]) idLinks[r.name] = [];
            idLinks[r.name].push(r);
          });        
        Object.keys(idLinks).forEach((k) => {
          const nn = idLinks[k];
          const n = nn[0];
          for (let l = 1; l < nn.length; l ++) {
            if (nn[l].children) {
              if (!n.children) n.children = [];
              n.children = n.children.concat(nn[l].children);

            }
          }
          if (n.children && n.children.length) n.children = this.merge(n.children);
          ret.push(n);
        });
        return ret;
      }

      public mergeOrg(arr) {
        const idLinks = {};
        const ret = [];
        arr.forEach((r) => {
          if (!idLinks[r.id]) idLinks[r.id] = [];
          idLinks[r.id].push(r);
        });
        Object.keys(idLinks).forEach((k) => {
          const nn = idLinks[k];
          const n = nn[0];
          for (let l = 1; l < nn.length; l ++) {
            if (nn[l].children) {
              if (!n.children) n.children = [];
              n.children = n.children.concat(nn[l].children);
            }      
          }    
          if (n.children && n.children.length) n.children = this.merge(n.children);
          ret.push(n);
        });
        return ret;
      }
       



      //
     public mergeEquallyLabeledTypes(collector, type) {
        type = type[0];
        var key = (type.name + '@' + type.id); // identity key.
        var store = collector.store;
        var storedType = store[key];
        if (storedType) { // merge `children` of identically named types.
          storedType.children = storedType.children.concat(type.children);
        } else {
          store[key] = type;
          collector.list.push(type);
        }
        return collector;
      }
}