function distanceFromHqInBlocks(num){
    if (num > 42) {
        return num - 42;
    }else {
        return 42 - num;
    }
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start < destination) {
        return (destination - start) * 264;
    }else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    

        if (distance < 400) {
            return 0;
       }else if (distance > 400 && distance <= 2000){
           return (distance - 400) * .02;
       }else if (distance > 2000 && distance <= 2500) {
           return 25;
       }else {
           return 'cannot travel that far';
       }
    
    
    }



// const up = destination - start;
    // const down = start - destination;
    // const feetUp = up * 264;
    // const feetDown = down * 264;