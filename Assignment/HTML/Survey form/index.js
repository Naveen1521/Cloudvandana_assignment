let obj = {
    name:"",
    email:"",
    moreInfo:"",
    products:"",
    suggests:"",
    review:""
}

let formEl=document.getElementById("form")
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let moreInfo = document.getElementById("moreInfo")
let productsYes = document.getElementById("productsYes")
let productsNo = document.getElementById("productsNo")
let suggestsYes=document.getElementById("suggestYes")
let suggestsNo=document.getElementById("suggestNo")
let satisfied=document.getElementById("satisfied")
let undecided=document.getElementById("UnDecided")
let unsatisfied=document.getElementById("UnSatisfied")
productsNo.addEventListener("click",function(event){
    obj["products"]=productsNo.value
})
productsYes.addEventListener("click",function(event){
    obj["products"]=productsYes.value
})
suggestsNo.addEventListener("click",function(event){
    obj["suggests"]=suggestsNo.value
})
suggestsYes.addEventListener("click",function(event){
    obj["suggests"]=suggestsYes.value
})
satisfied.addEventListener("click",function(event){
    obj["review"]=satisfied.value
})
undecided.addEventListener("click",function(event){
    obj["review"]=undecided.value
})
unsatisfied.addEventListener("click",function(event){
    obj["review"]=unsatisfied.value
})

formEl.addEventListener("submit",function (event) {
    event.preventDefault();
    obj["name"]=nameEl.value;
    obj["email"] =emailEl.value
    obj["moreInfo"]= moreInfo.value
    console.log(obj)
    if(obj.products==="" || obj.suggests ==="" || obj.review ===""){
        alert("choose the options")
    }
    nameEl.value=""
    emailEl.value=""
    moreInfo.value= ""
    productsYes.checked=false
    productsNo.checked=false
    suggestsYes.checked=false
    suggestsNo.checked=false
    satisfied.checked=false
    unsatisfied.checked=false
    undecided.checked=false
    
})