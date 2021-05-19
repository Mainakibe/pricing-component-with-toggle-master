const checkbox = document.getElementById('checkbox')
const basicPlan = document.querySelector('.basic-plan')
const proPlan = document.querySelector('.pro-plan')
const masterPlan = document.querySelector('.master-plan')


checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        basicPlan.innerHTML=` 19.99`
        proPlan.innerHTML=` 29.99`
        masterPlan.innerHTML=` 39.99`
    }else{
        basicPlan.innerHTML=` 199.99`
        proPlan.innerHTML=` 299.99`
        masterPlan.innerHTML=` 399.99`
    }
})




