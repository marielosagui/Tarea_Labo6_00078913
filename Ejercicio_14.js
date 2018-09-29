var convertor = {
    convertir: function(num, x, y, tipo){
        if(x == 'm' && y == 'cm' && tipo == 'L')
            return this.met_a_cm(num);

        else if(x == 'mm' && y == 'm' && tipo == 'L')
            return this.kilm_a_m(num);

        else if(x == 'p' && y == 'm' && tipo == 'L')
            return this.pie_a_mtr(num);

        else if(x == 'c' && y == 'f' && tipo == 'T')
            return this.cels_a_farenh(num);

        else if(x == 'k' && y == 'f' && tipo == 'T')
            return this.kelv_a_farenh(num);

        else if(x == 'k' && y == 'c' && tipo == 'T')
            return this.kelv_a_cels(num);

        else{
            return "Datos ingresados no son validos";
        }
    },

    met_a_cm: function(num){
        return num*100;
    },

    kilm_a_m: function(num){
        return num/1000;
    },

    pie_a_mtr: function(num){
        return num*0.3048;
    },

    cels_a_farenh: function(num){
        return num *(9/5) +32;
    },

    kelv_a_farenh: function(num){
        num*(9/5) - 459.67;
    },

    kelv_cels: function(num){
        num - 273.15;
    }
}

console.log(convertor.convertir(100, 'mtr', 'cm', 'L'));