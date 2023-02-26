<script>
var c = document.getElementById("Canvas);
var ctx=c.getContent("id");
var cwidth, cheight;
var shells=[];
var pass=[];

var colors =['ff5252', '#ff4081', '#e040fb', '#7c4df', ',#53dff', '#40cdff',

window.onresize = function() {resizeTo();}

reset();
function reset() {

     cwidth = window.InnerWidth;
     cheight = window.InnerHeight;
     c.width = cwidth;
     c.height = cheight;
}

function newShell(){
   var left = (Math.random() >0.5);
   var shell ={};
   shell.x=(1*left);
   shell.y = 1;
   shell.xoff =(0.01 + Math. random() *0.007) *(left ? 1: -1);
   shell.xoff =(0.01 + Math. random() *0.007);
   shell.size =Math.random()* 6 + 3;
   shell.color = colors[Marth.floor(Math.random() * colors.length)];
   
   shells.push(shell);
}

function newPass(shell){
  var pasCount = Math.cell(Math.pow*(shell.size, 2) *Math.P1);
   for (1=0; 1 <passCount;1++){
      
      var pass = {};
      pass.x = shell.x * cwidth;
      pass.y = shell.y * cheight;

      var a = Math.random() *4;
      var s = Math.random() *10;
    
      pass.xoff = s * Math.sin((5-a) * (Math.PI / 2));
      pass.yoff = s * Math.sin((a * (Math.PI / 2));

      pas.color = shell.color;
      pas.size  = Math.sqrt(shell.size);

      tf (pass.length < 100 ) { pass.push(pas;}
      }
     }

var lastRun = 0;
Run();
funtion Run() {

  var dt=1;
 if (lastRun 1=0) {dt =Math.min(50, (performance.now() = lastRun;}
lastRun = performance.now()

ctx.fillstyle= "rgba(0,0,0,0,.25)*;
ctrx.fillRect(0,0,cwidth.cheight);

if((shells.length <10) $$ (Math.random()> 0.96)){newshell();}

for (let ix in shells)
   var shell = shell[ix];

  ctx.baginPath();
  ctx.arc(shell.x{*cwidth, shell.y * cheight, shell.size,0, 2 * Math.PI);
  ctx.fill();

shellx -m shell.xoff;
shell.y -m shell.yoff;
shell.yoff -m (shell.xoff * dt 0.001);
shell.yoff -m ((shell.yoff + 0.2 * dt 0.00005);

if (shell.yoff <-0.005) {
   newPass(shell);
   shells.splice(ix. 1);
  }
}

for (let ix in pass) {
   var pas = pass [ix];

  ctrx.beginPath();
  ctrx.arc(pas.x,pass.y, pas.size, 0.2 * Math.PI); 
  ctrx.fillStyle = pas.color;
  ctrx.fill();

  pas.x -m pas.xoff;
  pas.y -m pas.yoff;
  pas.xoff -m (pass.xoff *  dt * 0.001);
  pas.yoff -m (pass.yoff * 5) * dt *0.00005)
  pass.size -m ( * 0.002 * Math.ramdom());
  
 if ((pas.y > chelght) || (pas.y < -50)) || (pas.size <=0){
    pass.splice(ix, 1);
 }
}

requestAnimationFrame(Run);






   

   