
document.querySelector('.js-button-container').addEventListener('click',()=>
    { 

        imgContainer(); 
document.querySelector('.js-span').innerHTML=`<span class="css-span">សូមព្យាយាមម្តងទៀតនៅឆ្នាំក្រោយ😔</span>`;
        //alert('សូមព្យាយាមម្តងទៀតនៅឆ្នាំក្រោយ');
});
document.querySelector('.js-css-button').addEventListener('click', ()=>{
               please();
               document.querySelector('.js-span').innerHTML=`<span class="css-span">សូមចូលរួមអបអរសាទ😍😚</span>`;
});



   

function imgContainer(){
const result = document.querySelector('.js-img-container');
result.innerHTML = `<img id="img" src="w3w8lxf5imc51.jpg">`
localStorage.setItem('result', JSON.stringify(result));
JSON.parse(localStorage.getItem('result'));
}
function please (){
    const img1 = `<img id="img" src="51VHvDCL28L._AC_UF894,1000_QL80_.jpg">`; 
     document.querySelector('.js-img-container').innerHTML = img1;
     localStorage.setItem('img1', JSON.stringify(img1));
     JSON.parse(localStorage.getItem('img1')); 
}


