module.exports = function zeros(expression) {
  // your solution
  let check=expression.replace(/[!]/g, "");
  check=check.split('*');
  let bool=Boolean(false);
  for(let i=0; i<check.length;i++){
      if(check[i]%2===0)
          bool=true;
  }
  if(bool===true){
      let array=expression.split('*'), temp='',count=0, end_sum=0, count_temp=0;
      for(let i=0; i<array.length; i++){
          temp = array[i];
          for(let j=0; j<temp.length;j++){
              if(temp[j]==='!'){count++;}
          }
          if(count===1){
              //only one factorial
              count_temp=mathFloorOneFactorial(parseInt(temp.split('!').toString()));
              end_sum+=count_temp;
              count=0;
          }
          if(count===2){
              //only two factorial
              count_temp=mathFloorTwoFactorial(parseInt(temp.split('!!').toString()));
              end_sum+=count_temp;
              count=0;
          }
      }
      return end_sum;
  }
  else
      return 0;
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
