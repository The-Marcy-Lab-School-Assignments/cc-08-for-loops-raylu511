//1
function countToTwenty(){
  for(let i=1; i<=20; i++){
      console.log(i);
  }
}

//2
function countFromTwenty(){
  for(let i=20;i>=1;i--){
      console.log(i);
  }
}

//3
function countToN(n){
  for(let i=1; i<=n;i++){
      console.log(i);
  }
}


//4
function countFromN(n){
  for(let i=n;i>=1;i--){
      console.log(i);
  }
}

//5
function countEveryOdd(int){
  for(let i=1;i<=int;i++){
      if(i%2===1){
          console.log(i);
      }
  }
}



countToTwenty();                    //1-20
countFromTwenty();                  //20-1
countToN(10);                       //1-10
countFromN(10);                     //10-1
countEveryOdd(10);                  //1 3 5 7 9