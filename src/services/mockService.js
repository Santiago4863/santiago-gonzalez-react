import items from "../data/item";

function getItems(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(items)
        }, 300)
        });
}
export function getItemsCategory(ID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let itemsFound = items.filter((item)=>{
                return item.categoria===ID
            })
            if (itemsFound.length > 0) {
                resolve(itemsFound)
            }
            else{
                reject("No hay productos en esta categoria")
            }
        },300)
    })
}
export function getSingleItem(ID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let itemFound = items.find(itemInArray => itemInArray.id === parseInt(ID))
                if(itemFound)
                    resolve(itemFound)
                else
                    reject("Item no encontrado.")
            
        }, 300)
        });
}

export default getItems;    