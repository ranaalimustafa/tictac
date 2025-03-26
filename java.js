let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let cont=document.querySelector(".mcont");
console.log(msg);
console.dir(boxes);

let turn = 0;

let winpatren= [
    
    [0,1,2],
    [3,4,5,],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]
console.log(winpatren);



boxes.forEach( (box) =>
{
    box.addEventListener("click", ()=>{
        if(turn==0)
        {
            console.log("this is frist turn");
            box.innerText = " X ";
            turn=1;
        }
        else
        {
            console.log("this is a secound turn");
            box.innerText = " O ";
            turn=0;
        }
        box.disabled = true ;
        checkwin();
        let c=checkwin();
        if(c=="player1" || c=="player2")
        {
            msg.innerText=`you are win ${c} congratulation :`;
            cont.className = "display" ;
            disablebtn();
            
        }
        checkindexsfull();
        
    })
    

});



function checkindexsfull(){
    let count=0;
    let ind=0;
      for (let box of boxes)
      {
        let a=box.innerText;
        
        if(a=="X" || a =="O")
        {
            count++;
            
             console.log(ind);
        }
        else
        {
            continue;
        }
      }
    if(count==9)
      {
           alert("all index are full");
      }
    
    
}

function disablebtn ()
{
    for (let box of boxes)
        box.disabled=true;
}

function checkwin ()
{
     for (let ele of winpatren ) {
          console.log(ele);
          console.log(ele[0] , ele[1] , ele[2]);
          let pos1=boxes[ele[0]].innerText;
          let pos2= boxes[ele[1]].innerText;
          let pos3= boxes[ele[2]].innerText;

          if(pos1==""|| pos2=="" || pos3 == "")
          {
            continue;
          }
          else if ( pos1==pos2 && pos1 == pos3){
             let w=pos1;
             let s="";
             if(pos1=="X")
             {
                s="player1";
             }
             else
             {
                s="player2";
             }
             return s;
          }

    }
    
}

