//Character Object
var player = {name:"Player",attack:54,live:100};
var enemy = {name:"Enemy",attack:45,live:100};
//turn 0=pj; turn 1= enemy;
var vel=0;
var turn=0;
var turno  =() => {
    document.getElementById("attack").disabled = true;
    var time= setInterval(v,50);
    function v()
    {
        if(vel == 50){
            if(turn===0)
            {
                document.getElementById("turno").innerHTML="Your Turn";
                document.getElementById("attack").disabled = false;
                //Attack();
            }
            else
            {
                document.getElementById("turno").innerHTML= "Turn Enemy";
                document.getElementById("attack").disabled = true;
                Enemy();
            }
            vel=0;
            clearInterval(time);
        }
        else{
            vel+=1;
        }
    }
};

var Enemy= () =>{
        player.live = player.live - enemy.attack;
        if(player.live < 0)
        {
        document.getElementById("box1").style.width = 0+"px";
        document.getElementById("box1").innerHTML = 0+" /100";
        win();
        }
        else{
        document.getElementById("box1").style.width = player.live+"px";
        document.getElementById("box1").innerHTML = player.live+" /100";
        turn=0;
        turno();
      }
};

var Attack = () =>{
        enemy.live=enemy.live- player.attack;
        if(enemy.live<0)
        {
        document.getElementById("box").style.width = 0+"px";
        document.getElementById("box").innerHTML = 0+" /100";
        win();
        }
        else
        {
        document.getElementById("box").style.width = enemy.live+"px";
        document.getElementById("box").innerHTML = enemy.live+" /100";
        turn=1;
        turno();
        }
};

var win = () =>
{
    if(player.vida <=0)
    {
        alert("Enemy Win");
    }
    else
    {
        alert("Player Win");
    }
    document.getElementById("attack").disabled = true;
}
