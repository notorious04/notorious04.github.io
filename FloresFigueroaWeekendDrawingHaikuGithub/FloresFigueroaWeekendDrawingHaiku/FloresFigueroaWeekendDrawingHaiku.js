(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FloresFigueroaWeekendDrawingHaiku_atlas_1", frames: [[0,0,1253,781]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["FloresFigueroaWeekendDrawingHaiku_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.window = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(13,1,1).p("EAAAgsUMAlQAAAIAASJIAAflIAAYgIAAObMglQAAAMglPAAAIAAubIAA4gMAlPAAAIAAYgIAAObEglPgaLIAAyJMAlPAAAIAASJMAlQAAAEglPgaLMAlPAAAIAAflMAlQAAAEglPAd6MAlPAAAMAlQAAAEglPAFaIAA/l");
	this.shape.setTransform(-6.125,17.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.window, new cjs.Rectangle(-251,-273,489.8,580.4), null);


(lib.tributton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(13,1,1).p("AhtrQItnWhIepAAg");
	this.shape.setTransform(7,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AvULQINn2gIRBWgg");
	this.shape_1.setTransform(7,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(13,1,1).p("AivyCMgVzAkFMAxFAAAg");
	this.shape_2.setTransform(9.525,-27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("A4iSCMAVzgkDMAbSAkDg");
	this.shape_3.setTransform(9.525,-27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AvULRINn2gIRBWgg");
	this.shape_4.setTransform(11.5,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:7,y:-19}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape,p:{x:11.5,y:-10.5}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.1,-149.5,327.29999999999995,243.9);


(lib.table_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {table:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// table_mc
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-316.5,-78.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.table_mc, new cjs.Rectangle(-316.5,-78.9,626.5,390.5), null);


(lib.sunlight_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_direction
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("EA8rA7gQpNom4M3ZQ4M3b5J4oQ5J4rrWrcQrVrcJNImQJNIlYMXaQYMXaZIYqQZKYqLVLcQGfGigOAAQgLAAj9jsg");
	this.shape.setTransform(407.7124,400.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// sun_rays
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ACiDdQgQgGgPgJIgIgFIgCgBIgMgDQgJgDgHgHIgFgFIgJgDIgMgGQgKgEgIgIIgQgIQgQgIgLgMQgGgFgCgHIgEgGIgBgDIgBgDIgBgDIgBgDIAAgDIAAgDIgBgEIAAgDIAAgDIABgDIAAgDIAAgDIABgDIABgDIABgDIABgDIAEgGQADgGAFgEQAKgIANgDIAJAAIAAgBIAKABIAHACIAHADIAEADIAEADIAEADIACAEIADACIACAEIAGADIAFADIAKAGIAMAGQAZARAbAMQAXALAUAOQAJAHAGAKIABADIABADIABADIABADIABADIAAADIAAADIAAADIAAADIAAADIgBAEIgBADIgBADIgBADIgCADIgBADIgCADIgDADIgCADIgFADIgJAGIgIADIgNACQgJAAgJgDgAihAHQgQgUgVgRQgPgLgKgQIgBgDIgBgDIgBgDIgBgDIAAgEIAAgDIgBgDIAAgDIABgDIAAgDIAAgDIABgDIAAgDIABgDIAEgGIAGgJQAGgJAKgEQAGgDAGgBIAJAAIAAgBIAJABIAIACIAHADIAEADIAIAHIAIAJIAKAJIAFADIAEADIAFADIAIAGIAEADIACADIADAEIACADIABADIADADIAGAGIAHAJIAFAJIADAGIABADIABAEIAAADIABAGIAAAGIAAAGIgBADIgBADIgBACIgBADIgCADIgBADIgCADIgDAEIgCADIgEADIgKAFIgIADIgNADQgfgCgSgZgABIhPQgfgTBFAgIAcANIgDAAQghgHgegTgABbhRQhZgwgPgKQgRgLAAgBIgBgDIgBgDIgBgEIgBgDIAAgDIgBgDIAAgDIAAgDIABgDIAAgDIABgDIABgDIABgDIABgDIABgDIAFgHIAFgFIAJgGIALgGIAEgBIAJgBIAAAAQAMgBALAFQANAFANAGQAJAFAGAIQARAHAPAJIAsAbQAPAJAJAPIADAGIABADIABAEIAAADIAAADIABAGIAAAGIgBAGIgBADIgFAJIgGAJQgHAJgLAEQgGADgHABQgEgEgtgYg");
	this.shape_1.setTransform(28.125,37.8725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgoDSQgOgSgRgPQgJgHgFgLIgHgHQgEgEgCgFQgEgIgGgIIgHgJIgBgDIgCgCIgBgEIgBgDIgBgCIAAgEIAAgDIAAgDIgBgDIABgDIAAgDIAAgDIABgDIAAgDIABgEIAAgCIAEgHIAGgJQAIgKANgEIAHgCIAKgBIAAAAIAJABIAHACIAHADIAEADIAEADIAEADIAEAHIAIAMQAGAJAHAJIAKANIADADIADACIAFAHQAEAGAGADIAEADIACADIACADIACADIAFAHIAEAGIACACIABADIABAEIABACIABAEIABADIAAADIABADIAAADIAAADIAAADIgBAEIAAACIgBADIgBAEIgBACIgBADIgCAEIgBACIgCADIgDAEIgCADIgEADIgKAFIgIAEIgMADQgXgCgPgSgAB1BoQgWgVgSgWIgSgXIgBgDIgBgDIgBgEIgBgDIAAgCIgBgEIAAgDIAAgCIAAgEIABgDIAAgDIABgDIABgCIABgDIABgDIABgEIAFgGIAFgFQAGgHAIgCIAKgEIAKgBIAAAAIAJABIAHADIAHACIAPANIATATQALANANAKIADACIAJAGIALAKQAFAFAEAHIAEAJIABAEIABACIABAHIABAGQAAAFgBAEIgCAGIgEAJQgEAKgJAGQgNAKgRAAQgggHgagWgAiLhfQgJgCgHgHIgMgMIgDgDIgKgHQgIgFgJgEQgJgEgGgIIgHgIIgBgEIgBgDIgBgDIgBgDIAAgDIAAgDIgBgDIABgEIAAgCIAAgEIABgDIAAgCIABgEIADgFIAHgJQAEgGAGgEQAGgEAIgDIAEAAIAJgBIAAAAIALAAIAKABIAHACIAHACIANAJQAMAIALAIQAKAJAIAKIAFAJIABADIABADIABADIABAEIABADIAAACIACAEIAAACIAAADIAAAEIAAACIAAAEIgCADIgBADIgBADIgBADIgBADIgCADIgCADIgDADIgCADIgEAEIgEACIgKAGIgHACIgKABIgQgEg");
	this.shape_2.setTransform(65.4063,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgxDvQgMgDgIgJIgNgPIgHgGIgKgJIgOgMIgIgKIgDgDIgDgDIgGgGIgFgGIgEgHIgBgDIAAgDIgBgDIAAgDIgBgDIgBgGIAAgDIABgDIAAgDIAAgDIABgDIABgDIABgEIABgDIAEgGQADgFAFgEQALgIANgDIAJgBIAAAAIAJABIAIACIAHADIAEADIAEADIAEADIARASIAdAcQAOAMAJAQIACAGIABADIACADIABADIABADIAAADIAAADIAAAEIAAADIAAADIgBADIgBADIgCADIgBADIgBADIgBADIgCADIgDADIgCADIgCADIgFADIgEAEIgHACIgHACIgKACIgQgEgACTAsQgXgOgWgQQgLgIgKgIIgNgHIgJgGIgGgGIgHgJIAAgDIgBgDIgBgDIgBgDIAAgDIgBgDIgBgDIABgDIABgDIAAgDIAAgEIABgDIABgDIACgGIAFgGQADgFAFgEQAIgHALgCIADgBIAJgBIAAAAQANgBAMAEQAMAEAKAIIAPAMIAFADIAEADIADADIAEADIAOAKIAaAPQAMAGAHAMIAEAHIABADIABADIABADIABADIABACIAAADIAAADIAAADIAAADIAAADIgBADIgBADIgBAEIgBADIgCADIgCADIgCADIgCADIgCADIgFADIgDADIgLAFIgHACIgJABQgWgCgTgMgAiRhjIgigXQgJgGgGgGQgHgEgGgFIgKgKQgHgFgEgHIgEgGIgBgDIgBgDIAAgDIgBgDIAAgDIAAgDIgBgEIABgDIAAgDIAAgDIABgDIABgDIABgDIABgDIAFgGIAEgGQAFgGAHgDIAPgGIAJAAIAAgBIAEAAIAKACIAGACIAHACIAJAHIAIAGIAMAJIAGAGIAGADIAEADIAEADQAJAEAIAFQAJAFAGAIIAJAMIAEAGIABADIABADIABADIABAEIAAADIAAADIAAADIAAADIAAADIgBADIgBADIgBADIgBADIgBADIgCADIgCADIgCADIgDAEIgEADIgDADIgFADIgHADIgHACIgJABQgTgBgQgKg");
	this.shape_3.setTransform(82.2,83.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ai7C1IgignQgHgHgFgJIgBgDIgBgDIgDgDIgCgDIgEgHIgEgFQgEgEgBgGIgDgDIgCgDIgCgDIgBgDIgBgDIgBgDIgBgDIgBgDIgBgGQgBgFAAgFIABgMIACgPIABgDIADgGIAGgKQAJgJAMgEIAIgCIAJgBIAAAAIAJABIAHACIAHADIAEADIAFACIAEADIACADIACADIACADIACADIABAEIABADIABADIABADIABADIAAADIAAADIACADIACADIAFAGIAEAGIAGAKIABADIABADIAHAJQAFAIAIAHQAMAJAGANIACADIABADIABADIABADIABADIABADIACAGIAAADIAAAEIAAADIAAADIAAADIgCADIgBADIgBADIgBADIgBADIgCADIgCADIgDADIgCADIgEADIgJAGIgIADIgOADQgXgBgPgSgADDB4QgJgEgHgJIgIgMIgBgDIgBgDIAAgDQgMgPgNgNQgUgSgRgVQgNgQgJgRIgBgDIgBgDIgBgDIgBgEIgBgDIgBgDIgBgDIAAgDIgBgDIAAgDIAAgDIABgDIAAgDIAAgDIABgDIABgDQABgFADgFIAIgJQAJgJANgDIAEgBIAJgBIAAAAIADAAIAJABIAHACIAHADIAFADIAEADIAEADIACADIACADIACADIACAEIABACIACAEIABADIABADIAFAGIAEAGQAEAIAHAFQAGAFAFAHIAEADIADADIACADIACADIACADIAEADIAEACIAEADIAFAGIAFAGIAFAGQAEAEACAGIACADIABADIABADIABADIACADIABADIABADIAAADIABAEIAAADIABADIABADIAAADIAAADIAAADIAAADIAAADIgBADIgBADIgBADIgBADIgCAEIgBACIgCADIgDAEIgCADIgJAFIgKAGIgHACIgJABQgMAAgMgGgAhYg3IgYgSQgFgEgDgFIgKgGIgEgDIgGgGIgGgGIgIgHIgDgDIgFgGIgEgGIgCgDIgBgDIgBgDIAAgDIgBgDIAAgDIAAgDIgBgDIABgEIAAgDIAAgDIABgDIABgDIABgDIABgDIAEgGIAFgGQAFgGAIgDIAOgGIAJAAIAAgBIADABIAJABIAHACIAIADIAIAGIAEADIAHAGIAGAGIAJAGIAHAGIAMAKIAEADIACADIADADIADADIAEADIACADIACADIADADIACADIACADIACADIABADIABADIABAEIABADIAAADIAAADIAAADIAAADIAAADIgBADIgBADIgBADIgBADIgBADIgDADIgCADIgCAEIgCADIgEADIgEADIgEADIgHADIgHACIgKABQgPgBgOgJg");
	this.shape_4.setTransform(119.2417,117.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,0,0.498)").s().p("AEGEGIglgfQgLgIgJgKQgSgNgRgPQgWgSgXgQQgUgNgLgUIgBgDIgBgDIgBgDIAAgEIAAgDIgBgDIAAgDIAAgDIABgDIAAgDIABgDIABgDIABgDIABgDIAEgGIAFgGQAFgGAHgDIAOgGIAKAAIAAgBQAVAAAQANIAeAXQAKAHAIAJIAJAHIAGAFIAHAHIAJAJIAKAGIAEADIADADIAGAGIADADIAFAEIAEADIADADIADADIAFADIAFADIAEADIAEADIAGAGIAKAGIAJAHIAFAGIAHAJIABADIABADIABADIABADIABADIAAADIAAADIAAADIAAADIAAAEIgBADIgBADIgBADIgBADIgBADIgCADIgCADIgCADIgDADIgEADIgEADIgEADIgHADIgHACIgJACQgagDgUgQgAi0CfIgagPQgHgEgFgFQgfgTgagaQgagbgXgdQgOgSgNgSIgBgDIgBgDIgBgDIgBgDIAAgDIAAgDIgBgEIABgDIAAgDIAAgDIABgDIAAgDIABgDIADgGIAHgJQAGgIAKgFIAMgEIAJAAIAAgBIAEAAIAJACIAIACIAHACIAEADIAEAEIAEADIAEAGIAFAGIAJAMQAGAHAEAJIADADIADADIADADIACADIAEAGIACACIAEADIAEADIAFADIAEADIAFAGIADADIAHAHIAEAGIADADIAYAQQASALAQAOQAHAGAFAIIABADIABADIABADIABADIABAEIAAADIAAADIAAADIAAADIAAADIgBADIgBADIgBADIgBADIgCADIgBADIgCADIgDAEIgCADIgJAFIgKAFIgHADIgJABQgNgBgLgGgACpiPQgUgRgVgQQgOgLgKgPIgBgDIgBgDIgBgDIgBgDIgBgDIAAgDIgBgDIAAgDIAAgDIAAgEIABgDIAAgDIABgDIABgDIABgDIABgDIABgDIAFgGIAFgGQAHgGAIgDIAKgEIAJAAIAAgBIAJACIAHACIAHADIAFADIAEADIAEADIACADIAMAJIASAOQAMAHAKAKIAFADIAEADIAEADIAHAGIAEADIACADIACADIACADIACAEIABADIABADIABADIABADIABADIAAADIAAADIAAADIAAADIAAADIgBAGIgBADIgEAKQgFAJgJAGQgNAKgQAAQgggGgZgVg");
	this.shape_5.setTransform(153.575,166.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,0,0.498)").s().p("AiwD6IgFgCIgSgGIgMgHIgIgHIgKgHIgbgQIgNgIIgHgHIgIgIIgbgOIgYgQIgQgPIgWgPIgTgOIgWgQIgHgHIgIgHIgHgIIgZgQQgJgGgIgJQgGgHgDgHQgCgDAAgFIgBgHIABgIIABgGIACgHIADgHIAHgIIAKgIIAKgFIAPgBIAAgCIAHABIAUAFIANAHIAHAIIAPAHIAKAIIAIAGIAHAIIAPAIIAKAHIAOANIASARIAQAPIAHAHIAXAHIAYAQIATAPIAJAHIAFAFIAFACIAPAGIANAHIAHAHIAPAIIAKAHIAFAIIAFAIIADAHIACAHIAAAIIAAAHIgBAIIgDAIIgEAHIgEAHIgKAHIgKAGIgPACIgPgCgAGsCWIgIgCIgTgFIgKgGIgUgFQgJgDgJgEIgegPIgIgIIgPgEIgUgGIgMgHIgKgHQgSgMgUgJIgUgEIgKgGIgUgEIgMgIIgFgFIgPgDIgUgEIgNgIIgHgIIgFgHIgCgHIgBgHIgCgHIACgIIAAgHIADgIIAFgHIAHgIIANgHIAUgEIAAgCIAlAAIAUAGIANAHIAFAFIADACIATAGIAQAHQAfANAdAQQAIAFAJADIAUAEIAPAIIAMAIIALAHIAWAIIAKAEIAUAGIAPAIIAMAHIALAHIAFAHIAEAIIADAIIACAHIABAHIgBAIIgCAHIgDAIIgEAIIgFAHIgNAHIgUAFIgPgCgAkNhwIgUgFIgPgHIgPgIIgHgHIgNgHIgRgIIgPgIIgHgIIgGgHIgEgIIgBgGIgBgIIABgIIABgHIACgIIADgGQADgFAEgDQAFgEAFgDIAKgGIAPgBIAAgCIARAAIAUAGIAPAHIANAIIAKAGIAZAQIAHAIIAFAHIADAHIAFAIIACAIIAAAHIAAAIIgBAGIgDAIIgEAHIgEAJIgKAHIgKAFIgPADIgDgBg");
	this.shape_6.setTransform(244.075,226.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,0,0.498)").s().p("AFuDpIgOgIIgLgIIgKgHIgMgIIgIgHIgMgHIgWgQIgTgNQgOgJgPgHIgIgHIgKgJIgKgHIgMgIIgHgHIgYgHIgVgGIgVgEIgMgIIgIgHIgEgIIgDgIIgBgHIgCgHIACgIIABgHIADgIIAEgHIAIgIIAMgGQAKgCAKgCIABgCIAlAAIAUAGIAPAGIAOAIQANAHAMAJIASAOIAMAHIALAHIAHAGIASAEIANAIIAHAIIAFAHIAKAIIAKAHIAMAIIAKAHIASAPIAMAIIAKAHIAFAIIADAHIAFAHIAAAIIAAAIIAAAHIgDAHIgDAIIgEAHIgFAIIgMAIIgVAEIgUgEgAhuDKIgUgEIgKgGIgUgEIgPgIIgQgIIgHgHQgVgMgWgJQgdgMgNgZQgGgNgJgMIgCgHIgBgIIgBgHIgBgHIABgIIABgIIABgHIACgIIAEgGIAGgIIALgHIAJgFIAPgBIAAgCIAUAGIANAGIAEAHIAGAIIAIAPIALAPQAPAIAPAIQAXAPAaAKIATAHIANAHIAFAHIAFAIIADAHIAEAIIACAIIABAHIAAAHQAAAEgBAEIgEAIIgDAHIgFAIIgKAGIgKAGIgPACIgCAAgAjIhDIgUgEIgMgIIgLgHIgMgIIgQgIIgKgEIgTgGIgQgHIgKgFIgEgCIgVgFIgfgGIgVgFIgNgHIgHgIIgFgHIgBgHIgCgIIgCgIIACgHIABgIIADgGIAEgIIAHgIIANgIIAUgDIAAgCIAvAAIAUAFIAhAQQAZAKAaAIQAeAJAYAVQARAPAIAVIACAIIABAIIgBAHIgCAHIgDAIIgEAHIgFAIIgNAIIgUAEIgCAAg");
	this.shape_7.setTransform(290.25,264.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,0,0.498)").s().p("AiFEwIgFgBIgRgFIgNgIQgagcgcgZQgigggggiQgKgLgHgMIgBgIIgCgHIgFgIIgCgIIgCgWQgBgPACgPQABgLACgMQABgDADgDQACgFAEgDIAKgIIAKgFIAPgBIAAgCIAUAFIANAIIAFAHIAFAIIACAHIACAIIADAPIAAAPIAFAIIAKAHIAFAIIADAHIAEAIIADAHIAIAIIAMAHIAIAIIAHAHIAFAIIANAHIAHAIIAIAHIAHAIIAIAHIAMAIIAKAHIAFAIIADAHIAFAIIAAAHIAAAIIgBAHIgCAIIgDAHIgEAIIgFAHIgNAIIgUAFIgPgEgAD7DpIgPgIIgMgHIgNgIIgHgHIgIgIIgMgHIgPgIIgPgHIgIgIIgHgHIgLgHIgOgIIgIgIIgIgHIgJgJIgNgOIgCgIIgBgHIgCgHIACgIIABgIIADgHIAFgHIAHgIIAMgIQAKgBAKgCIAAgCIAIABIAUAEIAMAIIAIAHIAHAIIAPAIIANAHIAHAIIANAHIAPAIIAMAHIAIAIIAHAHIANAIIAMAHIAIAIIAHAHIAFAIIADAHIAFAIIAAAHIAAAIIgBAHIgCAIIgDAHIgEAIIgFAHIgNAIIgUAFIgUgFgAiohhIgPgHIglgmIgugsQgWgVgRgZIgBgHIgCgIIABgHIABgIIABgHIACgIIAEgHIAGgHIAKgIIAKgFIAPgBIAAgCIAUAFIANAIIAkAlQAZAbAcAYQAWAUALAbIACAIIABAHIAAAHIgBAIIgEAIIgDAHIgFAHIgKAIIgKAFIgPACIgUgFg");
	this.shape_8.setTransform(375.7938,308.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,0,0.247)").s().p("AFRG+IgQgMIgbgMIgLgMIgJgLIgHgIIgIgCQhBgEhAgCIgcgIIgLgMQgEgFgCgHQgCgFAAgGQgCgGAAgFQAAgHACgFIAEgMIAMgLIALgJQAKAAAJgBIABgCICYAAIAYAIIAPALIAQAMIAMALIATANIAQALIAPALIAIANIADAMIABALIAAAMQAAAFgCAGQgCAGgEAFIgLANQgEADgFACQgJAEgKADIgbgIgAFwBGIgbgIQgMgLgNgKQgVgPgPgVQgJgMgMgMIgFgLIgIgLIgKgNIgIgLIgQgMIgLgMIgUgXIgEgMIgEgMIgQgLIgIgMIgSgYQgHgMgFgMIgFgLIgDgLQgBgHABgFIACgMIABgLIAJgMIALgMQANgCAOgEIAAgCIAYAIQAFAFAFAIIAOAVQAJANAKALQAHAGAIAGQAaAjAdAfQAiAjAXAnQAQAdAcATIAIAMIAFALQADAGACAGQACAFAAAFIgBAMQgBAHgDAFQgDAGgEAFIgLAMIgYAIIgEAAgAglgIIgkgNIgbgJIgUgYQgTgVgbgOQgYgLgHgYQgCgEgEgBQgKgHgMgDIgUgYIgXgXIgbgYIgJgLIgKgNQgFgGgDgFQgDgGgBgGIgMgMIgLgMIgJgKIgXgZIgEgLIgEgMIgIgMIgIgMIgHgLIgEgMQgCgGAAgGIABgLIABgMIAIgLIALgMIAbgGIABgDIALACIAYAHIAPALIAaAwQASAfAUAfQARAaAdAQIAIAMIALAMIAMAMIAQALIAHANIAcALIALAMIAIAMQACAGAEADQAKAIALAGIANAHIATAJIAMALIALAMIAMAMIAbALIALAMQAEAGADAHIAFALIACALIgCAMIgEAMIgIALIgLANIgXAGIgbgIg");
	this.shape_9.setTransform(444.725,409.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,0,0.247)").s().p("AC4EJIgjgiQgIgIgFgLQgKgGgGgJQgLgNgKgOQgJgOgMgNIgBgEIgCgDIgCgEIgBgEIgCgEIgBgDIAAgFIAAgEIgBgDIAAgEIAAgEIABgEIAAgDIAAgFIABgDIACgEIABgEIACgEIAGgHQAGgIAJgDIAMgFIAKgBIAAAAIAKABIAHADIANAHIAGAEIACAEIADAEIACAEIACADIABAFIAWAeIAjAsQANAQAQANIACAEIADAEIACAEIACADIACAFIACADIABAEIABAEIAAADIAAAFIAAADIAAAEIgBAEIAAAEIgCAEIgCADIgEAIQgGAHgHAFIgFAEIgGACIgFABIgLACQgSAAgOgNgAifB5QgPgMgNgPQgGgIgDgIIgFgEIgEgEIgDgDIgCgFIgDgDIgBgEIgCgEIgBgEIgDgEIgGgIIgGgHIgIgMIgBgDIgBgEIgBgEIgCgEIgCgDIgEgIIgCgDIgDgFIgDgDIgBgEIgCgEIgBgDIAAgFIAAgDIgBgEIAAgEIAAgDIABgFIAAgDIAAgEIABgEIACgEIABgEIACgDIAGgIQAGgHAJgEIALgFIALAAIAAgBIAKACQAEABADABIANAIIAGAEIACADIADAEIAEAHIAHANIAEAHIABAEIACADIACAFIADADIABAFIABADIAEAEIADAEIACADIAFAIQAEAGACAFIAFAEIAHALQAFALAJAIQALALAGANIADADIABAEIABAEIABAEIAAAEIAAADIAAAFIAAADIAAAEIgBAEIgBAEIgCADIgFAIQgFAHgHAFIgFAEIgHACIgFACIgKABQgSAAgOgLgAhxiRIgkggQgNgNgKgOIgBgEIgCgEIgBgEIAAgEIAAgDIgBgEIABgEIAAgEIAAgDIABgFIACgEIABgDIADgEIAGgIIAJgGIARgIIAKAAIAAgBQAOAAALAIIAZARQAKAHAGAKIALAHIAOAMQAFAGAEAGIAFAIIABAEIABADIACAEIABAEIAAAEIAAADIAAAFIAAADIgBAEIgCAEIgBAEIgBAEIgDADIgCAFIgDADIgFAEIgFAEIgQAFIgKADQgbgDgUgTg");
	this.shape_10.setTransform(525.725,470.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,0,0.247)").s().p("AC+EgQgZgDgUgPIgOgMIgHgEIgIgEQgSgQgUgMQgXgPgVgRQgPgMgKgQIgBgEIAAgEIgBgEIgBgEIgBgEIABgDIABgEIAAgEIABgEIABgEIACgEIAFgHIAHgHQAFgFAGgDQAFgDAGgBIAKgBIAAgBQAVABARALQAOAKAOALIATARIAMAIIAGAEIAFAEIAEADIAEAEIAJAEIAFAEIAFAEIAFAEIAJADIAFAEIAFAEIAGAEIAGAEIAFAEIADAEIACADIADAEIACAEIABAEIACAEIABAEIAAADIAAAEIAAAEIAAAEIgBAEIAAAEIgEAHIgCAEIgCAEIgIAHIgKAIQgKAFgLAAIgHAAgAh5CiIgggXIgKgHQgNgHgMgLIgkgjQgJgJgGgLIgCgEIgBgDIgBgEIgBgIIAAgIIAAgLQAAgIACgIIAAgDIAEgHIAFgHQAIgKALgEIAJgDIAKgBIAAgBIALACIAHADIANAHIAFAEIADADIACAEIADAEIABAEIABADIACAEIABADIAEAFIADADIADAEIAEAEIAGAEIAGAEIACADIADAEIAHAEIAGAEIAFAEIAEAEIALAHQAKAHAIAJQAJALAGAMIABAEIABADIABAEIAAAEIAAAEIAAAIIgBAEIgCADIgBAEIgCAEIgDAEIgDAEIgCAEIgFADIgHAEIgDADIgEABIgFABIgLACQgOgBgMgIgAhKhTQgMgKgHgNIgPgXIgBgEIgBgEQgIgHgFgIIgUgbQgMgRgPgOIgDgEIgBgEIgBgEIgCgDIAAgEIAAgEIgBgEIABgEIAAgEIAAgDIACgEIABgEIABgEIADgEIADgEIAIgHQAFgEAHgDIAJgEIAKAAIAAgBQAWgCARAPQAQAPANATIASAaIAFAEIAIALIAKAQQAIALAFAMIAIAPIABAEIABAEIABAEIAAAEIAAADIAAAEIAAAEIAAAEIgBAEIgBAEIgBAEIgCADIgBAEIgDAEIgCAEIgFAEIgGADQgDADgEABIgSAEQgSAAgOgLg");
	this.shape_11.setTransform(555.5125,490.1307);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,0,0.247)").s().p("ACaEJQgWgSgVgUIgKgLIgFgDIgFgEIgEgEIgCgEIgPgMIgVgUIgPgSIgBgEIgBgEIgBgDIAAgEIAAgEIgCgIIABgHIACgMIAAgEIAEgHIAGgIQAHgJAMgFIAIgDIAKAAIAAgBIAKACQAEAAAEACIANAIIAFADIADAEIADAEIACAEIABAEIALAKIAZAYIAXAXIAXAPQARAMAPAQQAGAJAGAKIABAEIAAADIABAEIAAAEIAAAEIAAAIIgBAEIgBADIgBAEIgDAEIgDAEIgCAEIgDAEIgFADIgHAEIgDADIgEABIgFABIgKACQgbgEgXgRgAiOCtQgJgGgIgJIgLgQIgBgEIgBgEIgCgDIgGgIIgHgIIgLgLIgCgEIgGgEIgEgEIgFgEIgDgDIgEgEIgDgEIgEgEIgFgEIgDgEIgDgDIgDgFIgDgDIgBgEIgCgEIgBgEIAAgEIgBgDIgBgEIABgEIABgEIAAgEIABgEIACgDIABgEIADgEIAGgHQAEgEAFgCQAIgFAJgDIAKgBIAAAAQANAAANAGQAPAHAKANQAIALAMAIQAEAHAGAFIAPAPQAIAIAHALIAIAMIABADIABAEIABAEIADAEIADAEIACAEIABADIABAEIACAEIACAEIAAAEIAAAEIAAADIAAAEIgCAEIgCAEIgBAEIgBAEIgCAEIgDADIgDAEIgEAEIgGAEIgIADIgHADIgLACQgOgBgNgHgAAghCIgJgDIgJgEIgKgIIgIgHIgQgNIgFgDIgTgMQgLgJgNgHQgKgGgIgIQgRgIgOgLQgQgNgNgPQgIgJgFgKIgCgDIgBgEIgBgEIAAgEIAAgEIgBgEIABgEIAAgDIAAgEIABgEIABgEIACgEIAGgHIAHgIQAJgIAMgCIAKgBIAAgBIAPADQAHACAIAEIALAHIAEAHIADAEIAEAEIAKAIIAEAEQASALARANQAVAQAXAOIAQALIAJAEIAHAEIAGADIAFAEIADAEIADAEIAEAEIAEAEIAFAHIADAEIABAEIABAEIABAEIACAEIAAADIAAAEIAAAEIAAAEIgCAEIgBAEIgBADIgBAEIgDAEIgDAEIgCAEIgKAHIgIAEIgSAEIgTgEg");
	this.shape_12.setTransform(553.65,488.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).wait(2));

	// sun
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,51,0.4)").s().p("AABDVIgQgEIgIgFIgWgIIgSgIIgegPIgZgOIgHgIIgNgIIgKgHIgFgHIgKgIIgHgIIgFgHIgFgHQgGgLgBgMQgDgSABgTQABgXAAgVQgBgfAEgdIACgIIADgHIAEgIIAEgHIAEgIIADgHQABgIACgHIAEgIIAJgOQAKgMAMgKQAMgJAMgHIAIgIIAKgFIAFgCIA+gIIARgDIABgCIALAAIASAFIAdAGIASAEIAKAIIAKAHIANAIIAHAHIAFAIIANAHIAFAIIAEAHIADAIIAIAHIAHAIIAFAHIAFAIIACAHIABAIIABAHIABAIIAFAHIADAPIABAIIADAWQACALAAALQAAAPgDAPIgDAPIgDAHIgEAIIgEAHIgEAIIgCAHIgBAIIgEAHIgDAIIgIAHIgHAIIgDAHIgFAHIgHAIIgIAHIgUAQIgDAHIgHAHIgHAGIgGACIgTAFIgLAFIgRAGIgNAEIgMADIgFgBg");
	this.shape_13.setTransform(0.0357,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-21.3,841.4,826.5999999999999);


(lib.petals_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// petals1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AArB4IgHgFQgDgCgFgCIgcgGQgDgDgDgGIgBgEIgDgCIgXgHIgIgIQgEgQgNgLQgOgLgKgNIgIgJIgIgJIgFgIIgEgIQgBgEgDgDQgEgFgGgEIgFgJIgEgIIgEgJIgEgIIgCgJIgBgIIABgJIACgJIAEgIIAIgJIAFgFIAGgCIAIgBIAGAAIALAIIAMAJIAIAIIAOAJIAMAJIAIAFIADACQAXAEAVACIAMAGIAfAGIALAFIAaAGIAOAJIAGAIIAIAJIALAJIAGAHIADAJIACAIIABARIAAAIIAAARIAAAJIAAAIIgEAIQgCAFgDAEIgJAJIgLAIQgMACgNADQgDABgDADIgIABIgfgBgAA+AGIAGAJIAGAIIAOAJIAGAIIACAAIAAgIQgBgFgDgCIgLgMIgEgHIgQgBg");
	this.shape.setTransform(-0.725,3.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAwCGQgDgCgCgFIgDgFQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgcgHIgNgIIgOgJIgRgRIgZgaIgGgIQAAgEgCgDIgLgTQgGgIgEgIIgLgIIgGgIIAAgJIAAgIIgGgJIgFgIIgCgJIgBgIIAAgJIAAgIIADgIIAFgJQAGgEAFgGQACgDACgEIADgIIAFgJIAGgEIALgDIAAgCIAOAGIAGAJIADAIIACAJIABAIQAHANAJALQAPATAQAQIARAPIAOAGIAJAEIAOAHIAFAIIADAFIABACQAGAEAHACQAHANAKALQAKAMAIANQAIANAAAPIABAIQAAAFgBAEIgEAIIgFAGIgDACIgLADIgOADIgGAJIgOAGQgIgDgHgFg");
	this.shape_1.setTransform(-1.925,22.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgdBBIgSgIIgRgJIgRgIIgFgJIgRgLIgXgMIgWgKIgJgIIgIgJIgIgJQgEgEgCgEIgDgIIADgJIAFgIQADgDAEgBIAKgDIAAgCIALAAIAPAGIAIACIAOADQAAAFABAEQACAEADAEIAUAKIAIAFIAXACIAOAGIAJAJICBACIAIgIIgBgIIgEgJIgDgJIADgIIADgIIAFgGIAEgCIAKgEIALAAIAPAGIAJAFIAOAGIAEAJIAEAIQACAEAAAFIgCAIIgDAJIgFAIIgOAIIgEAHIgIAKIgIAIIgJAJIgGAFIgLAGIgDAIIgGAGIgCACIgMAEIh4gGg");
	this.shape_2.setTransform(2.05,44.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ABQBpIgJgIIgCgJIgDgIIgFgJIgEgJQgBgEgDgBQgHgDgJAAIgOgGQgEgEgDgFIgBgFIgBgCIgNgGIgIgJIgDgJIgDgIIgFgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgFgFgHgDIgJgIIgGgGQgCgBgDgBQgbABgbABIgIgJIgDgIQgCgEAAgFIACgIIACgIIAMgJIAFgIIAGgJQADgDADgBIALgDIAAgBIALAAIAOAGIAGAFQAKACAKAFIARAIIANAIIAGAIIARAJIAJAEIAOAHIAIAIIALAJIAGAIIANASIAFAGIAFAJIAFAJIABAIIACAJIAEAIIAFAJIAAAIIACAJIABAJIgDAIIgEAIIgFAJIgOAFIgOgFg");
	this.shape_3.setTransform(18.775,63.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhEBdIgOgFIgIgJIgIgJIgEgIIgBgIQAAgFACgDIAIgJIAOgHIALgEIADgJIADgIIAJgHIAIgBIAtgGIADgIIAIgJIAIgJIABgIIACgJIADgHIAGgJIACgJIAEgIIAFgGIADgCIALgCIAAgCIAOAGIAJAIIAIAJIADAJIADAIIAFAJIADAIIADAJIAAAIIgCAJIgBAIIgKAQIgLAQQgKANgLALIgDACIgQAHIgHAFIgLADQgUAHgSAIQgDACgDADIgMACIgiAAg");
	this.shape_4.setTransform(15.7875,80.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AA3BpIgOgHIgJgEIgOgGIgIgJIgGgFIgDgDIgNgGIgIgIIgEgJIgFgIIgIgJIgJgIQAAgFgBgDQgFgJgGgHIgHgKIgEgIQgBgEgCgEIgLgRIgEgJIgBgIIABgIIAEgKIAEgIIAFgIQADgDADgBIAKgDIABgCIAOAGIAFAJIAEAHIAFAJIAFAJIABAIIAVAhQALAUATANQANAKAOAIIAGAJIAFAIIAPAJIAFAIIADAJIAAAIIgBAIIgFAJQgCADgEACIgLAEIgLAAg");
	this.shape_5.setTransform(-4.525,71.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AghB5IgRgGQgEgFgDgFQgBgDAAgEIgDgJIAAgIIADgJIACgIIAMgHIALgFIAfgLIAAgJIgBgIIgEgJIgDgIIgCgIIgBgIIgFgJIgEgIIgFgJIgFgIIgEgIIgIgJIgEgIIgEgJIgEgIIADgJIACgIIAEgJIAGgEIAIgDIAGgCIAGADIAOAGIASASIARARIAMAQIAOAJIADAIIADAIIACAJIAAAZIAAAZIAAAaIgCARIgNAQQgHAJgKAHQgKAHgLAHIgJAEIgKAEIgXAAg");
	this.shape_6.setTransform(14.5875,79.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("ABJA9IhUgJIgOgGIgJgIIgFgFIgGgDIgOgGIgJgFIgOgHIgIgIIgJgIIgIgIQgDgEgCgEIgEgJIABgIIACgJIAEgIIAFgGIADgCIAKgCIABgBIAOAFIAIAIIARAJIARAIIAGAJQADADADABIAOAIIAIAFIAOAFIBMAEIAOAEIAIAJIAEAIIABAIIgBAJIAAAIIgGAJIgDAGIgGACIgLADIgRgFg");
	this.shape_7.setTransform(8.975,91.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAoBDIgQgHIgHgFIgLgDIgNgGIgJgFIgLgDIgLAAIgggDIgLgIIgOgIIgGgJIgDgIIgDgIIgIgIIgIgJQgFgJgEgIIAEgIIAEgJQADgDAEgBIAKgDIAAgCIAXAAIAOAGIAGAJIADAFIAAACIAOAHIAFAGIAPAAIATgHIAigLIAOgFIAOAGIAFAIIADAJQACADAAAFIgCAJIgCAIIgGAIIgLAFIAZgDIARgFIAWAAIAPAFIAHAJQADAEABAEIAAAJIgCAIIgEAJIgIAFIgLAEIgUAFIgPAGIghAAg");
	this.shape_8.setTransform(44.6,100.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgFAxQgRgBgRgDIgdgLIgbgKIgYgJIgngRQgEgEgDgFQgCgEAAgEIgBgIQAAgFACgEIAFgIIAJgGIALgBIAAgCIAXAAIAOAFIAUAGIALAEIAGACIAcADIAOAGIAIAFIATgDIARgFIAfAAIAPAFQAEACAEAAQAGAAAFgCIAXgFIAJgGIAOgDIARAGIAOAIIAFAJIADAIIAAAIIgCAIIgDAJIgDAIIgGAJIgIAGIgDACIgOACIgXACIgUACIgOAGQgogCgmgDg");
	this.shape_9.setTransform(53.725,103.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("ArwEkQgBgDAAgFIAAgIQAAgEgCgDQgCgGgFgEIAEgIIAEgJIABgIIgBgIIgFgJQgDgDgBgEQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABgBIABgCIAOACQAFAMgBAOIgBAiIAAAZQgDADgDAAQgCAAgCgEgAJMiFIgQgHIgOgIIgMgJIgPgQIgQgRIgJgJIgHgJQgDgDgBgFIgLgIIgFgJIgEgIIABgIIACgJIADgJIAIgIIAJgJIAGgFIAFgDIALgCIABgBIAOAGIALAIIALAIIAGAJIAlAPIAXAKIAOAHIAOAAIAUgJIAIgIIAJgJIAIgJIARgGIAOAGIAIAJIAGAJIAAAIIAAAJIAGAIQAGAEAEAGIAEAHIACAJQABADgBAFIgCAIIgFAIIgJAGIgOAHIgJAEIgLADIgoADIgFADIgOAGIgJAGIgLADIguAAg");
	this.shape_10.setTransform(-6.88,118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-8.8,153.9,156.60000000000002);


(lib.painting_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AFtAAQAABtg4BWQgVAhgeAeQhrBriXAAQhzAAhZg+QgcgTgZgaQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWg");
	this.shape.setTransform(2.7,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxDxQgUgJgTgKIgEgEIgMgIIgMgLIgSgUIgDgEIgBgEIgBgEIgDgEIgEgEIgDgEIgCgEIgGgIIgDgMIgFgTIgGgYQgDgKACgJIAAgEIADgEIADgEIAEgEIAHgEIALgCIABgBIAHACIAIADIAIADIAHAEIAGAIIAHAIIAHAMIAFAIIABADIABAEIADAEIABAEIAEAEIADAEIAEAEIACAEIAEAIIAEAEIAFAEIAEAEIAKAHIADADIADABIAHACIAJACIAQAGIAoAAIAHgEIAIgDIAJgDIAHgDIAHgEIAIgEIAEgEIAEgEIAFgEIADgEIAEgEIAHgEIAFgDIAFgBIAJgBIAFAAIASAEIAGAEIAFAEIADAEIADADIACAEIABAEIACAEIABAEIAAAEIAAAEIAAAEIgBAEIAAAEIgDAEIgBAEIgDAEIgCAEIgCAEIgDAEIgDADIgXAPQgZAPgaALQgFADgFABQgdALgeAAQgeAAgggNgAA/AbIgIgFIgFgDIgEgEIgGgIQgGgkACgmIAEhaQABgkACgjIACgEIACgEIADgEIAEgEIADgEIAGgCIAEgBIAJgBIAAgBIAMADIAGAEIAFAEIAEAEIAGAHIABAEIABAEIABAEIAAAEIABAEIACAEQACAIAAAIIABAbQAAAQgBAQIgBAIIgBAEIgBADIABAgIABAvQABAZgHAVIgDAEIgDAEIgDAEIgHAEIgFADIgEABIgJABIgNgCgAhtAGIgIgFIgFgCIgEgEIgGgIIgBgEIgBgEIgBgIIgBgLIAAgMQgFgSABgSQABgbAAgcQAAgcAFgbIABgEIADgDIAEgFIAEgDIAFgEIAGgDIAJgBIABAAIAFAAIAMACIAGAEIAFAEIADAEIADAEIACAEIADAEIAEAIQADAVABAWIADA/QACAegIAdIgCAEIgCAEIgCAEIgDAEIgDAEIgFACIgHAEIgGADIgJABIgNgCg");
	this.shape_1.setTransform(6.5969,-6.9615);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AjMEvQgcgUgZgZQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAABtg3BWQgWAhgeAeQhrBriXAAQhzAAhZg+gAhpAkIgMACIgGAEIgEAEIgDAEIgDAEIAAAEQgCAKADAKIAGAXIAFATIADANIAGAIIACAEIADADIAEAFIACADIABAEIACAEIADAEIASAUIAMALIALAIIAFAEQATAKATAJQA9AaA9gYQAFgBAFgDQAagLAZgPIAWgOIADgEIAEgEIABgEIADgEIADgEIABgEIADgEIAAgEIAAgEIABgEIAAgDIAAgEIgBgFIgCgDIgBgFIgDgDIgDgEIgCgEIgGgEIgFgEIgSgDIgFAAIgJABIgGABIgEACIgHAEIgEAEIgDAEIgFAEIgEAEIgEAEIgIAEIgIAEIgGADIgKADIgHADIgHAEIgqAAIgQgGIgJgCIgGgCIgCAAIgEgDIgJgIIgEgEIgFgEIgEgEIgEgHIgCgFIgFgEIgDgEIgDgDIgCgFIgCgEIgCgDIAAgEIgFgIIgHgMIgHgIIgHgIIgGgDIgIgEIgIgDIgHgBIgBAAgABykHIgJABIgDABIgGACIgDAFIgFADIgDAEIgBAFIgCADQgDAkgBAjIgDBaQgDAnAHAlIAGAGIADAEIAGADIAIAFIAMACIAJgBIAFgBIAFgDIAGgEIAEgDIADgFIACgCQAIgXgBgZIgBgvIgCgfIACgEIABgEIABgIQABgPAAgRIgBgbQAAgIgCgHIgDgFIAAgDIgBgFIgBgDIgBgFIAAgEIgGgHIgEgEIgFgEIgGgEIgNgCgAg/joIgJABIgGADIgGAEIgDADIgFAFIgCADIgBAFQgGAbABAcQAAAcgCAbQAAARAFASIAAAMIABALIABAIIABAFIABADIAGAIIADAEIAGAEIAIAEIAMADIAJgBIAHgEIAGgDIAGgEIACgEIAEgEIACgEIABgEIADgEQAIgdgCgeIgDg/QgBgVgEgWIgDgIIgDgEIgDgEIgCgDIgDgFIgFgDIgHgFIgMgCIgFAAIAAAAg");
	this.shape_2.setTransform(2.7,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(9,1,1).p("AC0AAQAACrgnCAQgGAVgIAUQg0CNhLAAQhKAAg1iNQgHgUgGgVQgniAAAirQAAjGA0iNQAZhCAegjQAhgoAnAAQAoAAAhAoQAeAjAYBCQA1CNAADGg");
	this.shape_3.setTransform(4,42.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("Ah+FUQgIgUgGgVQgniAAAirQAAjGA1iNQAZhCAdgjQAigoAmAAQAnAAAiAoQAeAjAYBCQA1CNAADGQAACrgnCAIgOApQg0CNhLAAQhJAAg1iNg");
	this.shape_4.setTransform(4,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// painting_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(9,1,1).p("ArIuFIWRAAIAAcLI2RAAg");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ArIOGIAA8LIWRAAIAAcLg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.painting_mc, new cjs.Rectangle(-75.7,-94.6,151.5,189.3), null);


// stage content:
(lib.FloresFigueroaWeekendDrawingHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {main:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage. enableMouseOver();
		
		this.ToTri_btn.addEventListener("click", ToTri_btn)
		function ToTri_btn(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork")
		}
		this.line01_txt.addEventListener("click",changeLine01)
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01; 
		}
		
		var line01 = "Dappled light creeps in"
		
		this.line02_txt.addEventListener("click",changeLine02)
		function changeLine02 (){
			console.log ("will change line 2")
			root.line02_txt.text = line02;
		}
		
		var line02 = "Sunlit daisies softly sway"
		
		this.line03_txt.addEventListener("click",changeLine03)
		function changeLine03 (){
			console.log ("will change line 3")
			root.line03_txt.text = line03;
		}
		
		var line03 = "Beneath golden rays"
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		
		this.toFrame01_btn.addEventListener("click", toFrame01);
		function toFrame01(){
			console.log("going back to frame 1")
			root.gotoAndStop("main")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// table
	this.instance = new lib.table_mc();
	this.instance.setTransform(909.95,680.9,1,1,0,0,0,-3.4,116.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// buttons
	this.ToTri_btn = new lib.tributton();
	this.ToTri_btn.name = "ToTri_btn";
	this.ToTri_btn.setTransform(474.85,551.8);
	new cjs.ButtonHelper(this.ToTri_btn, 0, 1, 2, false, new lib.tributton(), 3);

	this.toFrame01_btn = new lib.tributton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(877.85,71.2,0.7819,0.7819);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.tributton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ToTri_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// window
	this.instance_1 = new lib.window();
	this.instance_1.setTransform(159.1,193.65,0.3455,0.3455);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// dirt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("As+CjIAAlFIZ9AAIAAFFg");
	this.shape.setTransform(156.225,281.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// text
	this.line02_txt = new cjs.Text("Line Two", "45px 'Broadway'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 53;
	this.line02_txt.lineWidth = 831;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(510.9,156.35);

	this.line03_txt = new cjs.Text("Line Three", "45px 'Broadway'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 53;
	this.line03_txt.lineWidth = 833;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(509.9,210.65);

	this.text = new cjs.Text("Haiku", "86px 'Broadway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 99;
	this.text.parent = this;
	this.text.setTransform(478.6,2);

	this.line01_txt = new cjs.Text("Line One", "45px 'Broadway'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 53;
	this.line01_txt.lineWidth = 832;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(509.4,102.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.line01_txt},{t:this.text},{t:this.line03_txt},{t:this.line02_txt}]}).to({state:[]},1).wait(1));

	// cup
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABrFlIgRgGIh/gGIgRgFIgGgGIgCgCIgPgHIhMgFIgOgGQgRABgQADQgDABgBAEQgBAEgDACQgHAFgJADIgXgDIgIgJIgJgIIgBgJIgBgRIAAgIIAAgIIAAgRIAAgHIgDgFIgDgIIABgIIACgJIADgIQABgFgBgDQgCgFgEgEIgBgJIgBgRIgBgRIAAgRIADgJIADgIIgDgRIgDgZQgCgSAEgRIABgIIADgIIAFgJQAFgpgDgrQgDguABgwIAAhDIAEgIIAFgJIACgRIABgaIABgaIACgIQAAgEABgEQADgEAEgFIAJgFIALgCIAAgCIAGADIAAgCIAFgGIADgCIAJgBIAFAAIAJAIIADAJIACAIIAGAJIADAIIADAJIABADIANAEIAOAEIAIAJIAGAIIAOAJIADAIIADAJIAJAJIARARIAIAIIAGAFIADADIAOAGIAJAIIAIAGIADADIAOAGIAJAIIAHAGIADADIAOAFIAIAJIAGAIIAOAJQABAEADADIAIAJIALAJIAIABIARgBIAOAGIAJAJIAIAJIAGAIIABAEIAIgBIAtgDIAXAAIAOAFIAIAJIAGAIIAOAIIAFAKIADAIIAJAIIADAJIADAIIACAIIAAAIIAAAJIAAAIIAAAIIgCAJIgDAIIgDAJIAAAIIgBAJIgBAIIgBAJIgGAIIgFAJIgMAJIgGAIIgIAJIgGAEIgNAHIgJAIIgIAGIgEACIgNAEIgRAGIgRAFIgGAAIAAAMIAAARIAAARIAAAEIAAADIAAAJIADAIIAFAJIABAJIACARIAAAIIAAAJIAAARIgDAJIgCAIQgCAEgDAEIgHAGIgLADIgLAAgABJEIIgGAIIgJAHIgBAAIgCADIgBABQAQABAPgFIgBgEIgCgJIgBgCIgDgBIgFABgAgwETIADADIAFACIAMADQAJAAAJgCIgQgEIgRgFIgFADgACPAfIgKAEIgBAIIgGAIIgCARIAAARIAAARIAAACIACgCIAOgDIAPgGIAJgHQADgEAFgCIAOgHIAFgIIADgJIgCgIIgEgHIgIgKIgGgEQgJgDgKgBIgMAIg");
	this.shape_1.setTransform(689.6167,197.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

	// shelf
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(9,1,1).p("A3zAAMAvnAAA");
	this.shape_2.setTransform(788.05,233.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(1));

	// petals
	this.instance_2 = new lib.petals_mc();
	this.instance_2.setTransform(110.65,159.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgFgVIADACIAEAIIAEAJIgDAHIgDAIIgFAJg");
	this.shape_3.setTransform(122.975,178.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.instance_2}]},1).wait(1));

	// sun
	this.instance_3 = new lib.sunlight_mc();
	this.instance_3.setTransform(130.05,141.5,1,1,0,0,0,0.3,18.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

	// painting
	this.instance_4 = new lib.painting_mc();
	this.instance_4.setTransform(668.1,355.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#001EE2").ss(1,1,1).p("EhWKg54MCsVAAAMAAABzxMisVAAAg");
	this.shape_4.setTransform(485.45,346.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,664.4).s().p("EhWJA55MAAAhzxMCsTAAAMAAABzxg");
	this.shape_5.setTransform(485.45,346.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00EF0F","#FFA097"],[0,1],29.5,414.1,29.5,-383.7).s().p("EhdIA+VMAAAh8pMC6RAAAMAAAB8pg");
	this.shape_6.setTransform(511.9,321.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(395.8,243,827.6000000000001,685.2);
// library properties:
lib.properties = {
	id: '69E2471E03C7C54CB8859163C3E36AF1',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FloresFigueroaWeekendDrawingHaiku_atlas_1.png?1740469977734", id:"FloresFigueroaWeekendDrawingHaiku_atlas_1"}
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
an.compositions['69E2471E03C7C54CB8859163C3E36AF1'] = {
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