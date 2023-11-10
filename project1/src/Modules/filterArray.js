const filterArray = (array, arraySearch, search)=>{
    return array.filter(element => element[arraySearch].slice(0,search.length).toLowerCase().trim().includes(search.toLowerCase().trim()))
}
export default filterArray;