let buttonId=document.getElementById('button');
let nameId=document.getElementById('name')
let rollId=document.getElementById('roll');
let car=document.getElementById('car');
let car2=document.getElementById('car2');


// function up(obj){
//     let upname=prompt('Enter your name');
//     console.log(upname);
// }


function add(carId){
    //console.log(carId.name);
    let url='/emp/delete/'+carId.name;
    let option={
        method:'DELETE'
    };
    fetch(url,option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        //get();
    })
}
function fun(obj){
    let carId=document.createElement('div');
    carId.id=obj.name;
    car.appendChild(carId);
    let h3=document.createElement('h3');
    h3.textContent='Name: '+obj.name;
    carId.appendChild(h3);
    let h4=document.createElement('h4');
    h4.textContent='Roll: '+obj.roll;
    carId.appendChild(h4);
    let update=document.createElement('button');
    update.textContent='Update';
    update.style.backgroundColor='blue';
    update.style.color='white';
    update.style.marginRight='10px';
    update.style.borderRadius='10px';
    update.style.borderWidth='0px';
    carId.appendChild(update);
    let button=document.createElement('button');
    button.textContent='Delete';
    button.style.backgroundColor='green';
    button.style.color='white';
    button.style.borderRadius='10px';
    button.style.borderWidth='0px';
    //button.addEventListener('click',fun());
    carId.appendChild(button);
    carId.classList.add('box');
    button.addEventListener("click", function(){ add(obj); });
    update.addEventListener("click",function(){ up(obj)});
}
function get(){
    let url='/emp/';
    let option={
        method:'GET'
    };
    fetch(url,option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        for(let obj of jsonData){
            fun(obj);
        }
    });
}
get();


function up(obj){
    let upname=prompt('Enter your name');
    const data2={name:upname,roll:obj.roll};
    console.log(data2);
    let url='/emp/update/'+obj.name;
    let option={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data2)
    };
    fetch(url,option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        get();
    })
}

buttonId.addEventListener('click',function(event){
    let data={ 
        name:nameId.value,
        roll:parseInt(rollId.value)
    };
    event.preventDefault();
    let url='/emp/add';
    let option={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    };
    fetch(url,option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        fun(jsonData);
    })
    nameId.value="";
    rollId.value="";
    //console.log('clicked');
});