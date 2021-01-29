var i=0;
var local=localStorage.getItem("local");
if (local=0){        
localStorage.setItem("local", 1)
}        
else{
local=local+1
localStorage.setItem("local",local)
};        
alert("(ﾟ∀ﾟ)ｱﾋｬ");
function button1()
{
i=i+1;
alert(i+"回クリックしました！");  
};
function pcst()
{
var PCST=navigator.platform+"\n"
        + navigator.userAgent+"\n";
alert(PCST);
};
function local()
{
aleat("あなたがここを訪れたのは、"+local+"回目です！");
};        
   
        
