//获取节点 设置北京定位移入移出点击事件
var headers=document.getElementById('header');
var nava=document.getElementsByClassName('nav')[0];
var navmap=document.getElementsByClassName('navmap')[0];
var beijing_li=navmap.getElementsByTagName('li')[0];
var maps=navmap.getElementsByClassName('map')[0];
var beijing=maps.getElementsByClassName('beijing')[0];
var beijinglis=maps.getElementsByTagName('li');
console.log(beijinglis);
//设置导航栏北京移入移出事件
 navmap.onmouseover=function(){
		  beijing_li.style.background='#fff';
		  maps.style.display='block';
    for(var i=0;i<beijinglis.length;i++){
		beijinglis[i].index=i;
		console.log(beijinglis[i].index);
		
		beijinglis[i].onmouseover=function(){
			for(var j=0;j<beijinglis.length;j++){
			    beijinglis[j].className='';
			}
			beijinglis[this.index].className='beijing';
		}
        beijinglis[i].onclick=function(){
		  beijing_li.innerHTML=this.innerHTML;
	  }
	}
}
navmap.onmouseout=function(){
	 beijing_li.style.background='';
     maps.style.display='none';
}
/*
    第一张选项卡
    获取节点
	设置左侧导航栏移入移出样式
	鼠标移入 div 出现  
	div 里面的li标签 移入颜色发生改变
	鼠标移出 div display none 隐藏
*/

var mainz=document.getElementById('main');
var cbnav=document.getElementsByClassName('cbnav')[0];
var yiru=cbnav.getElementsByClassName('yiru')[0];
var yirut=cbnav.getElementsByClassName('yiru2')[0];

var xxk=yiru.getElementsByClassName('zhuyaoxxk')[0];
var xxkt=yirut.getElementsByClassName('zhuyaoxxk2')[0];
var jiad=xxk.getElementsByClassName('jiadian')[0];
var jiadt=xxkt.getElementsByClassName('jiadian2')[0];
var xxklis=yiru.getElementsByTagName('li');
var xxklist=yirut.getElementsByTagName('li');
console.log(jiad);

yiru.onmouseover=function(){
	yiru.style.background='#b3b3b2';
	xxk.style.display='block';
	
	for(var a=0;a<xxklis.length;a++){
		xxklis[a].index=a;
		console.log(xxklis[a].index);
		
		xxklis[a].onmouseover=function(){
			for(var b=0;b<xxklis.length;b++){
				xxklis[b].className='';
			}
			    xxklis[this.index].className='jiad';
		}
	}
}
yiru.onmouseout=function(){
	yiru.style.background='';
	xxk.style.display='none';
	jiad.style.color='red';
}

/*第二张选项卡*/
yirut.onmouseover=function(){
	yirut.style.background='#b3b3b2';
	xxkt.style.display='block';
	
	for(var k=0;k<xxklist.length;k++){
		xxklist[k].index=k;
		console.log(xxklist[k].index);
		
		xxklist[k].onmouseover=function(){
			for(var g=0;g<xxklist.length;g++){
				xxklist[g].className='';
			}
			    xxklist[this.index].className='jiadt';
		}
	}
}
yirut.onmouseout=function(){
	yirut.style.background='';
	xxkt.style.display='none';
	jiadt.style.color='red';
}


//轮播图设置
//获取节点
	var lun=document.getElementById('main').getElementsByClassName('lun')[0];
	var img=lun.getElementsByClassName('img')[0];
	var lis=img.getElementsByTagName('li');
	var num=document.getElementById('main').getElementsByClassName('num')[0];
	var num_lis=num.getElementsByTagName('li');
	var left=document.getElementById('main').getElementsByClassName('left')[0];
	var right=document.getElementById('main').getElementsByClassName('right')[0];;
	console.log(lis);
	
	//设置自动轮播
	
	//设置默认下标 全局变量
	var i=0;
	
	//设置run的默认值
	var run=null;
	
	//装入函数 进入页面自动轮播
	function autoRun(){
		//设置自动轮播
		run=setInterval(function(){
			// 隐藏当前显示的图片 
			lis[i].removeAttribute('class');// 0 1 2 3 4 5
			//隐藏当前的li数字背景
			num_lis[i].firstElementChild.removeAttribute('class');
		
			//显示下一张 下标自增
			i++;
			
			//判断下标最大值 第六章要隐藏后显示下标0
			if(i==lis.length){
				i=0;
			}

			//显示下一张
			lis[i].setAttribute('class','active');// 1 2 3 4 5 0
			//显示下一个数字背景
			num_lis[i].firstElementChild.setAttribute('class','active_num');
			//console.log(i);
		},1000)
	} 
	
	//加载页面 默认自动轮播
	autoRun();

	
	//设置每一张图片的鼠标移入移出 清除定时器  
	for(var j=0;j<lis.length;j++){
	
		//移入
		lis[j].onmouseover=function(){
			//清除定时器
			clearInterval(run);
			//显示 箭头
			left.style.display='block';
			right.style.display='block';
		}
	
		//移出
		lis[j].onmouseout=function(){
			//重新调用函数
			autoRun();
			//隐藏 箭头
			left.style.display='none';
			right.style.display='none';
		}
	}
	
	
	//设置鼠标移入 数字显示相对应的背景和对应的图片
	for(var k=0;k<num_lis.length;k++){
		
		//找到当前数字li自己的下标
		num_lis[k].index=k;

		//鼠标移入遍历事件
		num_lis[k].onmouseover=function(){
			//alert(this.index)
			//鼠标移入清除定时器
			clearInterval(run);
			//移除之前数字背景 全局变量 自动轮播
			num_lis[i].firstElementChild.className='';
			//显示图片隐藏
			lis[i].className='';
			
			//全部变量 i 重新赋值等于当前index
			i=this.index;
			
			//显示指定数字背景
			num_lis[i].firstElementChild.className='active_num';
			//显示和数字相对于的图片
			lis[i].className='active';
		}
		
		//鼠标移出
		num_lis[k].onmouseout=function(){
			//重新定义函数 全局变量重新赋值 开始走
			autoRun();
		}
		
		
	}
	
	//num ul鼠标移入移出
	
	
	//设置right的鼠标移入移出和点击
	
	//鼠标移入
	right.onmouseover=function(){
		//箭头显示
		left.style.display='block';
		right.style.display='block';
		//定时器清除
		clearInterval(run);
	
	}
	//移出 
	right.onmouseout=function(){
		//箭头隐藏
		left.style.display='none';
		right.style.display='none';
		//调用函数
		autoRun();
	}
	
	//right 点击
	right.onclick=function(){
		//点击隐藏当前张图和当前个数字背景
		lis[i].className='';
		num_lis[i].firstElementChild.className='';
		
		//点击显示下一张图和下一个数字
		i++;
		if(i==lis.length){
			i=0;
		}
		
		//点击显示当前张图和当前个数字背景
		lis[i].className='active';
		num_lis[i].firstElementChild.className='active_num';
	}
	
		
	//鼠标移入
	left.onmouseover=function(){
		//箭头显示
		left.style.display='block';
		right.style.display='block';
		//定时器清除
		clearInterval(run);
	
	}
	//移出 
	left.onmouseout=function(){
		//箭头隐藏
		left.style.display='none';
		right.style.display='none';
		//调用函数
		autoRun();
	}
	
	//left点击
	left.onclick=function(){
		//点击隐藏当前张图和当前个数字背景
		lis[i].className='';
		num_lis[i].firstElementChild.className='';
		
		//点击显示下一张图和下一个数字
		i--;
		if(i<0){
			i=lis.length-1;
		}
		
		//点击显示当前张图和当前个数字背景
		lis[i].className='active';
		num_lis[i].firstElementChild.className='active_num';
	}
//设置登录页面促销和公告
//获取节点
var move=document.getElementsByClassName('move')[0];
var xiao=document.getElementsByClassName('xiao')[0];
var list=document.getElementsByClassName('ggao')[0].getElementsByTagName('li');
var showt=document.getElementsByClassName('wan1show')[0];
var hidet=document.getElementsByClassName('wan2hide')[0];
console.log(list);

    function info(obj){
		move.style.width=obj.offsetWidth+'px';
		move.style.left=obj.offsetLeft+'px';
    }
	//默认的显示状态
	info(xiao);
	
	for(var c=0;c<list.length;c++){
		
		//鼠标移入 
		list[c].onmouseover=function(){
			//获取当前li的宽度和偏移值
			console.log(this.offsetWidth+":"+this.offsetLeft);
			info(this);
			hidet.style.display='block';
			showt.style.display='none';
		}
		
		list[c].onmouseout=function(){
			//调用函数
			info(xiao);
		}
	}
	
	//设置倒计时
	setInterval(function(){
		var d1=new Date();
		var d2=new Date('2018/6/13');
		
		//获取差值
		var cha=d2.getTime()-d1.getTime();
		console.log(cha);
		
		//小时
		var hour=Math.floor(cha/(1000*60*60))
		console.log(hour);
		cha%=1000*60*60;
		
		//分
		var minute=Math.floor(cha/(1000*60))
		console.log(minute);
		cha%=1000*60;
		
		//秒
		var second=Math.floor(cha/(1000))
		console.log(second);
		
		//获取节点
		var blday=document.getElementsByClassName('blday')[0];
		var blhour=document.getElementsByClassName('blhour')[0];
		var blsecond=document.getElementsByClassName('blsecond')[0];
		console.log(blday);
		
		//赋值
		blday.innerHTML=""+hour+"";
		blhour.innerHTML=""+minute+"";
		blsecond.innerHTML=""+second+"";
	},1000)
	
    //设置小轮播
	var niu=document.getElementsByClassName('niu')[0];
	var xiaoniu=document.getElementsByClassName('xiaoniu')[0];
	var xiaoniulis=xiaoniu.getElementsByTagName('li');
	var xniu_num=document.getElementsByClassName('xniu_num')[0];
	var xniu_numlis=xniu_num.getElementsByTagName('li');
	console.log(xniu_num);
	
	var d=0;
	
	var pao=null;
	//装入函数 进入页面自动轮播
	function autoPao(){
		//设置自动轮播
		pao=setInterval(function(){
			// 隐藏当前显示的图片 
			xiaoniulis[d].removeAttribute('class');// 0 1 2 3 4 5
			//隐藏当前的li数字背景
			xniu_numlis[d].firstElementChild.removeAttribute('class');
		
			//显示下一张 下标自增
			d++;
			
			//判断下标最大值 第六章要隐藏后显示下标0
			if(d==xiaoniulis.length){
				d=0;
			}

			//显示下一张
			xiaoniulis[d].setAttribute('class','active_small');// 1 2 3 4 5 0
			//显示下一个数字背景
			xniu_numlis[d].firstElementChild.setAttribute('class','active_xniu');
			//console.log(i);
		},1000)
	} 
	
	//加载页面 默认自动轮播
	autoPao();
	