(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x50_atlas_1", frames: [[421,0,43,34],[374,0,45,47],[316,52,95,29],[421,36,62,10],[413,49,84,21],[308,101,126,47],[322,0,50,50],[0,0,320,50],[0,101,306,44],[0,52,314,47]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._11 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arrows_w = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo_1 = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,306,44), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,126,47), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,84,21), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,62,10), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,95,29), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,45,47), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,43,34), null);


(lib.nutreplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,19.6);


(lib.muitenxoay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arrows_w();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muitenxoay, new cjs.Rectangle(0,0,50,50), null);


(lib.clickTag_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A2A2").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Chamuitenxoay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hinh_mui_ten
	this.instance = new lib.muitenxoay();
	this.instance.setTransform(14.55,10.25,0.31,0.31,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-0.4,21.3,21.299999999999997);


// stage content:
(lib._320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,95];
	// timeline functions:
	this.frame_0 = function() {
		// Sự kiện click toàn bộ banner
		this.clickTag_btn.addEventListener("click", function(evt) {
		    window.open(clickTag, "_blank");
		});
	}
	this.frame_95 = function() {
		this.mc_mui_ten_xoay.stop();
		
		
		
		/* Mouse Over Event
		Mousing over the symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is moused over.
		frequency is the number of the times event should be triggered.
		*/
		var frequency = 5;
		stage.enableMouseOver(frequency);
		this.btn_replay.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			// Start your custom code
			// This example code displays the words "Moused over" in the Output panel.
			this.mc_mui_ten_xoay.play();
			// End your custom code
		}
		
		
		
		/* Mouse Out Event
		Mousing out of the symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is moused out of.
		*/
		var frequency = 5;
		stage.enableMouseOver(frequency);
		this.btn_replay.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		
		function fl_MouseOutHandler_4()
		{
			// Start your custom code
			// This example code displays the words "Moused out" in the Output panel.
			this.mc_mui_ten_xoay.gotoAndStop(0);
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.btn_replay.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			globalThis.notRedirect=true;
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndPlay(0);
			// End your custom code
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(30));

	// nut_ao_replay
	this.btn_replay = new lib.nutreplay();
	this.btn_replay.name = "btn_replay";
	this.btn_replay.setTransform(13.8,9.8,1,1,0,0,0,9.8,9.8);
	this.btn_replay._off = true;
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.nutreplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_replay).wait(94).to({_off:false},0).wait(31));

	// hinh_mui_ten
	this.mc_mui_ten_xoay = new lib.Chamuitenxoay();
	this.mc_mui_ten_xoay.name = "mc_mui_ten_xoay";
	this.mc_mui_ten_xoay.setTransform(13.8,-7.8,1,1,0,0,0,14.6,10.2);
	this.mc_mui_ten_xoay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_mui_ten_xoay).wait(82).to({_off:false},0).to({y:10.45},12).wait(31));

	// clickTag_btn
	this.clickTag_btn = new lib.clickTag_btn();
	this.clickTag_btn.name = "clickTag_btn";
	this.clickTag_btn.setTransform(160,45,0.4395,0.5555,0,0,0,364,81);
	new cjs.ButtonHelper(this.clickTag_btn, 0, 1, 2, false, new lib.clickTag_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_btn).wait(125));

	// _2
	this.instance = new lib.Symbol6();
	this.instance.setTransform(207,24.5,1,1,0,0,0,63,23.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({x:199,alpha:1},7,cjs.Ease.quintInOut).wait(53));

	// _1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(110,25.5,1,1,0,0,0,42,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({x:92,alpha:1},8,cjs.Ease.quintInOut).wait(60));

	// logo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(159,26,1,1,0,0,0,153,22);

	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(6,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},57).to({state:[{t:this.instance_3}]},9).wait(59));

	// _4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(122,41,1,1,0,0,0,31,5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({x:106,alpha:1},8,cjs.Ease.quintInOut).to({_off:true},35).wait(68));

	// _3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(177.5,25.5,1,1,0,0,0,47.5,14.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:193.5,alpha:1},7,cjs.Ease.quintInOut).to({_off:true},43).wait(68));

	// _2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(88.5,24.5,1,1,0,0,0,22.5,23.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:65.5,alpha:1},7,cjs.Ease.quintInOut).to({_off:true},50).wait(68));

	// _1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(118.5,18,1,1,0,0,0,21.5,17);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:93.5,alpha:1},7,cjs.Ease.quintInOut).to({_off:true},50).wait(68));

	// logo
	this.instance_8 = new lib.logo_1();
	this.instance_8.setTransform(6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},57).wait(68));

	// BG
	this.instance_9 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(125));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,9.5,160,40.5);
// library properties:
lib.properties = {
	id: 'F9F31FAD29BE4F4ABDA481932244250A',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x50_atlas_1.png", id:"320x50_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F9F31FAD29BE4F4ABDA481932244250A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;