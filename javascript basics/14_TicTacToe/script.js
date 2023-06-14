let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//printField();
field[0] [1] = 1;

printField();

function printField(){
    for (let row = 0; row < field.length; row++) {
        let actualrow = field[row];
        let output = "";
        for (let col = 0; col < actualrow.length; col++) {
            let sign = " ";
            if (actualrow[col] == 1){
                sign = "X";
            } else if (actualrow[col] == 2){
                sign = "O";
            } 
            
            output += sign + " | ";    
    }
    
    console.log(output);
    
    }
}