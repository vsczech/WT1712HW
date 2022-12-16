function GetName() {
   return prompt('Введите свое имя: ');   
}

function Greeting(text){
    console.log(`Привет, ${text}!`); 
    alert('На вашем месте я бы проверил консоль!');  
} 

Greeting(GetName());