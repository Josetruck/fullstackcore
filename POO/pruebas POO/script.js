class Hexagono {
    constructor(min,max){
        this.min=min;
        this.max=max;
    }
    pinta(){
        var output = "";
        var j = 0;
        var i = 0;
        var k = 0;
        for (j = 0; j < this.min; j++) {
            for (i = 0; i < ((this.max - this.min) / 2) -j; i++) {
                output += " ";
            }
            for(k=0;k<this.min+j*2;k++){
            output += "+";      
            }
            output += "\n";
        }
        for(var a=1;a<=this.min-1;a++){
            for(var b=0;b<a;b++){
                output+=" ";
            }
            for(var c=0;c<this.max-a*2;c++){
                output += "+";      
                }
            output += "\n"
        }
        console.log(output)
        alert(output);
    }
}

parseInt(prompt('minimo')),parseInt(prompt('maximo'))
