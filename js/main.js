let a =document.querySelector(".alert1");
let b =document.querySelector(".alert2");
let c =document.querySelector(".alert3");
let login =document.querySelector(".btn1");
let names =document.querySelector(".name");
let pass =document.querySelector(".pass");
let close1 =document.querySelector(".close1");
let close2 =document.querySelector(".close2");
let close3 =document.querySelector(".close3");
let done =document.querySelector(".done");

// view
let btn =document.querySelector(".btn2");
let nodata=document.querySelector('.nodata');
let data=document.querySelector('.data');
let clo= ()=>{
    a.classList.add('none'); 
    }
close1.addEventListener("click",clo);
// #########

let cloo= ()=>{
    b.classList.add('none'); 
    }
close2.addEventListener("click",cloo);
let clooo= ()=>{
    c.classList.add('none'); 
    }
close3.addEventListener("click",clooo);



let add= ()=>{
    // if
 if(names.value.length==0 || pass.value.length==0){
    a.classList.remove('none'); 
    b.classList.add('none');
    c.classList.add('none');
    done.classList.add("none");
 }
 else if(names.value.length<=2 || pass.value.length<=2){
    b.classList.remove('none');
    a.classList.add('none');
    c.classList.add('none');
    done.classList.add("none");
 }
 else if(names.value.length>=20 || pass.value.length>=20){
    b.classList.add('none');
    a.classList.add('none');
    c.classList.remove('none');
    done.classList.add("none");
 }
 else{
    a.classList.add('none'); 
    b.classList.add('none');
    c.classList.add('none');
     nodata.classList.add("none");
     done.classList.remove("none");

    let x= names.value;
    let y= pass.value;
    data.innerHTML+=`<div class="alert alert-primary " role="alert">
   Email:${x}
   <br>
   Password:${y}
   <button type="button" class="btn btn-danger delete float-right">Delete</button>
   </div>`;
 }
 

 names.value=""
 pass.value=""
 
}
login.addEventListener("click" ,add);
let no= () => {
    if(data.childElementCount == 0){
        nodata.classList.remove("none");
    }
}

document.addEventListener('click',function(t) {
    if(t.target.classList.contains('delete'))
    {
        t.target.parentElement.remove();
       
    }
});


