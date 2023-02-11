import item from "../data/item";

function getItems(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(item)
        }, 300)
        });
}
export function getItemsCategory(categoryID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let itemsFound = item.filter((item)=>{
                return item.category===categoryID
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
export function getSingleItem(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let itemFound = item.find(itemInArray => itemInArray.id === parseInt(id))
                if(itemFound)
                    resolve(itemFound)
                else
                    reject("Item no encontrado.")
            
        }, 300)
        });
}

export default getItems;    