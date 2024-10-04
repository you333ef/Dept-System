let titleOfClient=document.getElementById('titleOfClient')
let titleOfProduct=document.getElementById('titleOfProduct')
let price=document.getElementById('price')
let FAWAYED=document.getElementById('FAWAYED')
let Number_OF_Mohth=document.getElementById('Number_OF_Mohth')
let totalOfMonth=document.getElementById('totalOfMonth')
let Full_Total=document.getElementById('Full_Total')
let ADD_Client=document.querySelector('#ADD_Client')
 let input_search=document.getElementById('input_search')
 let searchbytitle=document.getElementById('searchbytitle')
 let searchcategory=document.getElementById('searchcategory')
//  Get total
function TOOWTAL(){
    let result= +price.value+ +FAWAYED.value
    Full_Total.innerHTML=result
  if(price.value&&Number_OF_Mohth.value !=''){
    let PARTtotal=result / +Number_OF_Mohth.value
    totalOfMonth.innerHTML=PARTtotal
  }else{
    totalOfMonth.innerHTML=''
   
  }
    
}
function CLEAR(){
    titleOfClient.value=''
    titleOfProduct.value=''
    price.value=''
    FAWAYED.value=''
    Number_OF_Mohth.value=''
    totalOfMonth.innerHTML=''
    Full_Total.innerHTML=''


}


let PAPA_ARRAY = JSON.parse(window.localStorage.getItem('BIGDATA')) || [];

ADD_Client.onclick=function(){
   
    SHOW_DATA()
    let OBJ={
        titleOfClient:titleOfClient.value,
        title:titleOfProduct.value,
        price:price.value,
        FAWAYED:FAWAYED.value,
        Number_OF_Mohth:Number_OF_Mohth.value,
        Full_Total:Full_Total.innerHTML,
        totalOfMonth:totalOfMonth.innerHTML,
    }
  
    PAPA_ARRAY.push(OBJ)
    console.log(PAPA_ARRAY)
    LOCAL()
    SHOW_DATA();
CLEAR()


}
function LOCAL(){
    window.localStorage.setItem('BIGDATA',JSON.stringify(PAPA_ARRAY))

}
console.log(PAPA_ARRAY)
function SHOW_DATA(){
    let show=''
    for(let i=0;i<PAPA_ARRAY.length;i++){
        show +=`
        <tr>
    <td data-label="Product id:">${i + 1}</td>
    <td data-label="Title of Client">${PAPA_ARRAY[i].titleOfClient}</td>
    <td data-label="Title">${PAPA_ARRAY[i].title}</td>
    <td data-label="Price">${PAPA_ARRAY[i].price}</td>
    <td data-label="Fawayed">${PAPA_ARRAY[i].FAWAYED}</td>
    <td data-label="Number Of Mohth">${PAPA_ARRAY[i].Number_OF_Mohth}</td>
    <td data-label="Total">${PAPA_ARRAY[i].Full_Total}</td>
    <td data-label="Total Of Month">${PAPA_ARRAY[i].totalOfMonth}</td>
    <td data-label="Update">
        <button class="btn btn-update" onclick="EDIT(${i})">UPDATE</button>
    </td>
    <td data-label="Delete">
        <button class="btn btn-delete" onclick="DEL(${i})">DELETE</button>
    </td>
</tr>

        `
    }
   
  let tbody = document.getElementById('tbody');
  if (tbody) {
      tbody.innerHTML = show;
  } else {
      console.error("Element with ID 'tbody' not found.");
  }
 

}
SHOW_DATA()
// delete Element
function DEL(XO){
    PAPA_ARRAY.splice( XO,1)
    SHOW_DATA()
    LOCAL()
    
  

}
let SearchInput=document.getElementById('input_search')
let SearchName=document.getElementById('searchbytitle')
let Search_Product=document.getElementById('searchcategory')
let mood="create"
function EDIT(I){
    mood = "Update";
    if (mood === "Update") {
        titleOfClient.value = PAPA_ARRAY[I].titleOfClient;
        titleOfProduct.value = PAPA_ARRAY[I].title;
        price.value = PAPA_ARRAY[I].price;
        FAWAYED.value = PAPA_ARRAY[I].FAWAYED;
        Number_OF_Mohth.value = PAPA_ARRAY[I].Number_OF_Mohth;
        TOOWTAL(); 
        ADD_Client.innerHTML = 'Update';
        SearchInput.style.display = 'none';
        SearchName.style.display = 'none';
        Search_Product.style.display = 'none';
        ADD_Client.onclick = function () {
            PAPA_ARRAY[I] = {
                titleOfClient: titleOfClient.value,
                title: titleOfProduct.value,
                price: price.value,
                FAWAYED: FAWAYED.value,
                Number_OF_Mohth: Number_OF_Mohth.value,
                Full_Total: Full_Total.innerHTML,
                totalOfMonth: totalOfMonth.innerHTML,
            };
            LOCAL();
            SHOW_DATA();
            ADD_Client.innerHTML = 'Add Customer';
            mood = "create";
            SearchInput.style.display = 'block';
            SearchName.style.display = 'block';
            Search_Product.style.display = 'block';
            CLEAR();
        };
    }
}
function SEARCH(value) {
    let show = '';
    value = value.toLowerCase(); // تحويل النص للـ lowercase عشان المقارنة تكون غير حساسة لحالة الأحرف

    for (let i = 0; i < PAPA_ARRAY.length; i++) {
        if (PAPA_ARRAY[i].titleOfClient.toLowerCase().includes(value)) { // البحث في titleOfClient
            show += `
               <tr>
    <td data-label="Product id:">${i + 1}</td>
    <td data-label="Title of Client">${PAPA_ARRAY[i].titleOfClient}</td>
    <td data-label="Title">${PAPA_ARRAY[i].title}</td>
    <td data-label="Price">${PAPA_ARRAY[i].price}</td>
    <td data-label="Fawayed">${PAPA_ARRAY[i].FAWAYED}</td>
    <td data-label="Number Of Mohth">${PAPA_ARRAY[i].Number_OF_Mohth}</td>
    <td data-label="Total">${PAPA_ARRAY[i].Full_Total}</td>
    <td data-label="Total Of Month">${PAPA_ARRAY[i].totalOfMonth}</td>
    <td data-label="Update">
        <button class="btn btn-update" onclick="EDIT(${i})">UPDATE</button>
    </td>
    <td data-label="Delete">
        <button class="btn btn-delete" onclick="DEL(${i})">DELETE</button>
    </td>
</tr>
            `;
        }
    }

    let tbody = document.getElementById('tbody');
    if (tbody) {
        tbody.innerHTML = show; // تحديث الجدول بالنتائج الجديدة
    } else {
        console.error("Element with ID 'tbody' not found.");
    }
}
let input_search_Product=document.getElementById('input_search_Product')
searchcategory.onclick=function(){
    input_search_Product.focus()

}
   function  Search(Val){
    Val=Val.toLowerCase()
    let show = '';
    for(let i=0;i<PAPA_ARRAY.length;i++){
if(PAPA_ARRAY[i].title.toLowerCase().includes(Val)){
    show += `
     <tr>
    <td data-label="Product id:">${i + 1}</td>
    <td data-label="Title of Client">${PAPA_ARRAY[i].titleOfClient}</td>
    <td data-label="Title">${PAPA_ARRAY[i].title}</td>
    <td data-label="Price">${PAPA_ARRAY[i].price}</td>
    <td data-label="Fawayed">${PAPA_ARRAY[i].FAWAYED}</td>
    <td data-label="Number Of Mohth">${PAPA_ARRAY[i].Number_OF_Mohth}</td>
    <td data-label="Total">${PAPA_ARRAY[i].Full_Total}</td>
    <td data-label="Total Of Month">${PAPA_ARRAY[i].totalOfMonth}</td>
    <td data-label="Update">
        <button class="btn btn-update" onclick="EDIT(${i})">UPDATE</button>
    </td>
    <td data-label="Delete">
        <button class="btn btn-delete" onclick="DEL(${i})">DELETE</button>
    </td>
</tr>
`;


}}
let tbody = document.getElementById('tbody');
if (tbody) {
    tbody.innerHTML = show; // تحديث الجدول بالنتائج الجديدة
} else {
    console.error("Element with ID 'tbody' not found.");
}


    
}
searchbytitle.onclick=function(){
    document.getElementById('input_search').focus()
}