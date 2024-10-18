const inputdata=document.getElementById("inp")
const mainDiv=document.getElementById('output')
const mainDiv2=document.getElementById('main2')
let items=[]
let saveitems=[]
function add_data(){
    items.push(inputdata.value)
    displayData()
}
function displayData(){
    mainDiv.textContent=''
    items.forEach((ele,ind)=>{
        const todiv=document.createElement('div')
        todiv.classList.add('cmain')
       const para=document.createElement('p')
       para.classList.add('data')
       para.textContent=ele
       const savebutton=document.createElement('button')
       savebutton.textContent='save'
       const removebutton=document.createElement('button')
       removebutton.textContent='delete'
       savebutton.addEventListener('click',() => savetodo(ele))
       removebutton.addEventListener('click',() => removetodo(ind))
       todiv.append(para,savebutton,removebutton)
       mainDiv.append(todiv)
       inputdata.value=''
    })   
}
function displayData2(){
    mainDiv2.textContent=''
    saveitems.forEach((ele,ind)=>{
        const todiv=document.createElement('div')
        todiv.classList.add('cmain')
       const para=document.createElement('p')
       para.classList.add('data')
       para.textContent=ele
       const removebutton=document.createElement('button')
       removebutton.textContent='delete'
       removebutton.addEventListener('click',() => removesavetodo(ind))
       todiv.append(para,removebutton)
       mainDiv2.append(todiv)
    })   
}
function savetodo(ele){
    saveitems.push(ele)
    displayData2();
}
function removetodo(ind){
   items.splice(ind,1)
   displayData()
}
function removesavetodo(ind){
    saveitems.splice(ind,1)
    displayData2()
 }