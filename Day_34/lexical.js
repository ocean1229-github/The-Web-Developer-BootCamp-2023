function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp(){
        function inner(){
            for(let hero of heroes){
                console.log('PLEASE HELP US, ${hero.toUpperCase()}')
            }
        }
        inner();
    }
    cryForHelp();
}

//bankRobbery()
//PLEASE HELP US, SPIDERMAN
//PLEASE HELP US, WOLVERINE
//PLEASE HELP US, BLACK PANTHER
//PLEASE HELP US, BATWOMAN