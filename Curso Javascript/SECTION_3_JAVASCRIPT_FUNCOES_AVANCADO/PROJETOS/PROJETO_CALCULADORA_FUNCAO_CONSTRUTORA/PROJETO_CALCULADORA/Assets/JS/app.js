

function Calculadora(){
    this.display = document.querySelector('.display');

    this.StartApp = () => {
        this.ButtonClick();
    }

    this.ButtonClick = function(){
        document.addEventListener('click', e =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) 
             {
                this.ShowOnDisplay(el.innerText);
             } 
             
             if(el.classList.contains('btn-clear'))
             {
                this.ClearDisplay();
             }

             if(el.classList.contains('btn-operator')){
                this.ShowOnDisplay(el.innerText);  
             } 
            
             if(el.classList.contains('btn-DEL'))
             {
                this.DeleteLastNumber();
             }

             if(el.classList.contains('btn-equals')){
                this.MathProcedure();
             }
         })
    }

    this.MathProcedure = function(){ // Pensar em outra lógica para colocar no lugar desse eval...
        let calc = this.display.value;

        try{
            calc = eval(calc);

            if(!calc){
                alert('Invalid input');
                return
            }

            this.display.value = String(calc)
        }catch{
            alert('Invalid input');
            return
        }
    }

    this.ShowOnDisplay = function(btnValue){
        this.display.value += btnValue;
    }

    this.ClearDisplay = function(){
        this.display.value = "";
    }

    this.DeleteLastNumber = function(){
        this.display.value = this.display.value.slice(0, -1);
    }
}

const App = new Calculadora();
App.StartApp();