import items from "../data/item";




export function getSingleItem(ID){
    return new Promise((resolve,reject)=>{

            let itemFound = items.find(itemInArray => itemInArray.id === parseInt(ID))
                if(itemFound)
                    resolve(itemFound)
                else
                    reject("Item no encontrado.")
        
        });
}

