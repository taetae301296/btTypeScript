interface  Food{
    name: string, carolie : number;
}

function inra(food:Food):void{
    console.log(food.name + " " + food.carolie);
}

var ice_cream={
    name : "ice_cream",
    carolie : 200
}

inra(ice_cream);