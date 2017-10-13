    for(var i=0; i<100;i++){
    if (i % 3 == 0 && i % 5 == 0){
            console.log(i + ' = MediaCollege');
        }

       else if (i % 3 == 0){
            console.log(i + ' = Media');
        }
        else if (i % 5 == 0){
            console.log(i + ' = College');
        }
        else {
            console.log(i);
        }

    }