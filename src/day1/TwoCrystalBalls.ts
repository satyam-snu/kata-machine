export default function two_crystal_balls(breaks: boolean[]): number {

    const step = Math.floor(Math.sqrt(breaks.length));
    let jump = step;   
    for(; jump<breaks.length; jump += step){
        if (breaks[jump]){
            break
        }
    }
    jump -= step;
    for(let i = 0; i<jump && jump<breaks.length; i++, jump++){
        if(breaks[jump]){
            return jump;
        }
    }
    return -1;

    //If we want to make O (root N + root (root N) then we need to apply following code
    // const step2 = Math.floor(Math.sqrt(step));
    // for(let i = 0; i<jump && jump<breaks.length; i+=step2, jump+=step2){
    //     if(breaks[jump]){
    //         return jump;
    //     }
    // }
    // return -1;

    // First Attempt
    // do{
    //     const jp = jump*step;
    //     const v = breaks[jp];
    //     if (v === true){
    //         const bp = jump*step;
    //     } else{
    //         jump++;
    //     }   
    // }while(jump*step<breaks.length);

}