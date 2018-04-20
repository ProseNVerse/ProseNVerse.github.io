"usestrict";


function Number() {
    var x = document.getElementById("number").value;
    //x = Number(x);
    var count = 0;

     for (i = 0; i < 999; i++) {
        if (x == 1) {
            console.log(document.getElementById("number").value + " has been reduced to 1.");
            console.log("This took " + count + " operations");
            break;
        }
        console.log(x)
        
        if (((x / 3) % 1 === 0) && ((x != 0))) {
            x = x / 3;
            count++;
            console.log(x)
        }
        else if ((((x - 1) / 3) % 1 === 0) && ((x != 0))) {
            x--;
            count++;
            console.log(x)
        }
        else if ((((x + 1) / 3) % 1 === 0) && ((x != 0))) {
            x++;
            count++;
            console.log(x)
        }

     }
}
