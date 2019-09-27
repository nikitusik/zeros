module.exports = function zeros(expression) {
  // your solution
  let array=expression.split('*'), temp='',count=0, end_sum=0, count_temp=0;
    let check_bool_two_uneven=Boolean(true);
    let check_bool_two_even=Boolean(true);
    let check_bool_one=Boolean(true);
    for(let i=0; i<array.length; i++){
        temp = array[i];
        for(let j=0; j<temp.length;j++){
            if(temp[j]==='!'){count++;}
        }
        if(count===1){
            //only one factorial
            check_bool_one=false;
            count_temp=mathFloorOneFactorial(parseInt(temp.split('!').toString()));
            end_sum+=count_temp;
            count=0;
        }
        if(count===2){
            //only two factorial
            check_bool_two_even=checkTwoFactorialEven(
                parseInt(temp.split('!').toString()), check_bool_two_even
            );
            check_bool_two_uneven=checkTwoFactorialUneven(
                parseInt(temp.split('!').toString()), check_bool_two_uneven
            );
            count_temp=mathFloorTwoFactorial(parseInt(temp.split('!!').toString()));
            end_sum+=count_temp;
            count=0;
        }
    }
    if(check_bool_two_uneven===false&&check_bool_two_even===true&&check_bool_one===true)
        return 0;
    else
        return end_sum;
}
function mathFloorOneFactorial(tempMas){
  let i=1, sum = 0;
  while(Math.floor(tempMas/Math.pow(5,i))!==0){
      sum+=Math.floor(tempMas/Math.pow(5,i));
      i++;
  }
  return sum;
}
function mathFloorTwoFactorial(tempMas){
    if(tempMas % 2 === 1){
        let count=0;
        for(let i=5; i<=tempMas;i=i+10){
            let temp=i;
            while(temp%5===0){
                count++;
                temp/=5;
            }
        }
        return count;
    }
    else{
        let count=0;
        for(let i=10; i<=tempMas;i=i+10){
            let temp=i;
            while(temp%5===0){
                count++;
                temp/=5;
            }
        }
        return count;
    }
}
function checkTwoFactorialEven(tempMas, check_even){
    if(tempMas%2===0)
        check_even=false;
    return check_even;
}
function checkTwoFactorialUneven(tempMas, check_uneven){
    if(tempMas%2===1)
        check_uneven=false;
    return check_uneven;
}
