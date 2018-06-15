(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"UI_3_Check_atlas_", frames: [[1321,702,400,400],[1723,702,300,400],[1321,0,700,700],[721,1971,48,48],[0,560,800,744],[721,1562,800,407],[0,0,1312,558],[802,560,517,1000],[1321,1104,394,393],[0,1306,719,720]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bermudablueforks = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ch_darkbrownsugar_300x400 = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DSMORTONc = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ic_check_white_24dp_2x = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.limemoirepapercups = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LOGOGREENFOODNEW = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.martinsblack = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.milk_PNG12734 = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.searchiconpng18 = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.towel1595087_960_720 = function() {
	this.spriteSheet = ss["UI_3_Check_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.UI3Check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34495F").s().p("Ag6BmIAAgkIAhAAIAAiDIghAAIAAgkIB1AAIAAAkIghAAIAACDIAhAAIAAAkg");
	this.shape.setTransform(984.6,164);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34495F").s().p("AAzBmIgOgpIhKAAIgPApIg0AAIBLjLIA7AAIBLDLgAAYAXIgYhIIgZBIIAxAAg");
	this.shape_1.setTransform(966.1,164);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34495F").s().p("AgzBpIAZg6Ig8iXIA0AAIAjBjIAjhjIAzAAIhVDRg");
	this.shape_2.setTransform(936.6,169.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#34495F").s().p("Ag3BNIAAiZIAyAAIAAAXQAPgOAMgFQAMgEAKAAIAGAAIAGAAIAAAvIgFAAIgKgCIgLAAIgTABIgQAFIAABmg");
	this.shape_3.setTransform(921.5,166.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#34495F").s().p("Ag9A8QgWgWAAgmQAAglAWgWQAWgWAnAAQAoAAAXAWQAVAWAAAlQAAAmgWAWQgWAWgoAAQgnAAgWgWgAgLgsQgGACgFAFQgEAGgDAJQgDAJAAANQAAANADAJQABAJAFAGQAEAFAGADQAGACAHAAQAHAAAGgCQAGgCAFgGQAFgGACgIQACgIAAgPQAAgMgDgJQgCgKgEgFQgEgGgHgCQgGgCgHAAQgGAAgFACg");
	this.shape_4.setTransform(904,166.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34495F").s().p("AgXBZQgOgMAAgcIAAhHIgUAAIAAghIAUAAIAAgsIAxAAIAAAsIAuAAIAAAhIguAAIAAA2IAAAOQAAAGACAFQACAEAFADQAFADAJAAIAKgCIAJgDIAEAAIAAAiIgRADIgWABQgcAAgOgLg");
	this.shape_5.setTransform(888,164.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#34495F").s().p("AAcBPIAAhMIgBgRQgBgKgCgFQgDgEgFgDQgGgCgJAAQgGAAgHACIgPAHIAABsIgxAAIAAiZIAxAAIAAASQANgLANgGQALgFAOAAQAZAAAOAOQAOAPAAAdIAABjg");
	this.shape_6.setTransform(871.8,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34495F").s().p("Ag4A9QgYgVAAgnQAAglAXgWQAXgWAoAAQAlAAATATQATATAAAjIAAARIhvAAQABASAMAJQANAKAYAAQAPAAAPgGQAOgFAJgHIAFAAIAAAoQgQAGgPADQgPADgSAAQgtAAgZgUgAAggSQAAgQgHgIQgIgHgPAAQgNAAgJAHQgJAHgCARIA/AAIAAAAg");
	this.shape_7.setTransform(852.5,166.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34495F").s().p("AgbBNIg7iZIA0AAIAjBpIAjhpIAzAAIg7CZg");
	this.shape_8.setTransform(834.2,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34495F").s().p("AAcBPIAAhMIgBgRQgBgKgCgFQgDgEgFgDQgGgCgJAAQgGAAgHACIgPAHIAABsIgxAAIAAiZIAxAAIAAASQANgLANgGQALgFAOAAQAZAAAOAOQAOAPAAAdIAABjg");
	this.shape_9.setTransform(815.2,166.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34495F").s().p("Ag6BmIAAgkIAgAAIAAiDIggAAIAAgkIB2AAIAAAkIgiAAIAACDIAiAAIAAAkg");
	this.shape_10.setTransform(797.6,164);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34495F").s().p("AgRAsQgEgEAAgEQAAgFAEgDQADgEAFAAQAEAAAEAEQACADAAAFQAAAEgCAEQgEADgEABQgGgBgCgDgAACgaQgCgEAAgFQAAgFACgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(895,136);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34495F").s().p("AgrBCQgDgDgBgEQAAgEACgCQACgCAEAAIAFABIAEACIABACIACAAIABABQAGAAALgOQAKgNAAgGQAAgGgDgRIgIgcQgFgTgEgGQgEgHgHAAIgDAAIgFABIAAgEIAcgFIACAAQADgBAGAYQAGAVACAJIAFAYIAPgbQAKgTAAgHIAAgEQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBgBIgBgBIgEgDQgDgCAAgEQAAgDADgCQACgCAEAAQAFAAADADQAEADAAAHQAAALgNAYQgJATgLAQQgPAWgJAMQgQASgLAAQgEAAgDgCg");
	this.shape_12.setTransform(886,138);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34495F").s().p("AgmBEQgJgEABgDIAfhwIABgEIAAgDIgBgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCAAIgHgBIAAgDIAHgBIAKgCIAGgBIAHgBIABAAIABACIAAABIgUBMQAJgMAGgGQAKgKAMAAQAMAAAGAHQAHAIAAAKQAAAZgWAXQgWAVgWAAQgLAAgIgFgAgPASQgNAZAAARQAAAEACACQADACAFAAQASAAAPgXQAOgVAAgSQAAgHgEgFQgEgFgGAAQgQAAgOAdg");
	this.shape_13.setTransform(876.5,133.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34495F").s().p("AAHBHQgEgCAAgGIABgHIABgLQgGAMgKAIQgJAIgLAAQgJAAgHgGQgGgHAAgNQAAgXAUgXQAVgXATABQAIAAADADIADAIIAMgqIABgDIAAgCQAAgFgCgBIgEgBIgDAAIgEABIAAgDIAggGIABABIAAABIgUBJIgOAwIgBAEIAAADIABADIADABQADAAAFgFIAJgLIADADIgCACIgKALQgKALgJAAQgDAAgCgCgAgWAHQgNAXAAAQQAAAHADAFQADAEAHAAQAOAAANgXQANgWAAgTQAAgGgCgEQgCgFgGAAQgPAAgPAYg");
	this.shape_14.setTransform(861.2,133.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34495F").s().p("AgeAoQgJgIAAgOQAAgWAUgVQAUgWAWAAQAHAAAFAEQAFAEAAAHQAAAPgRALQgRAJgSACIgHABIgBAHIgBAGQAAAJAGAFQAGAFAIAAQAGAAAJgFIAPgLIACACQgEAGgJAHQgPAKgPABQgLgBgHgHgAAGgkQgGAFgFAIIgIAQIgEAIQATgBAMgMQAMgLAAgKQAAgEgCgDQgCgBgDAAQgHAAgGAFg");
	this.shape_15.setTransform(850.9,136);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34495F").s().p("AgmAvIARg9IACgKIABgGQAAgDgBgCQgCgCgDAAIgEAAIgDABIAAgDIADgBIASgEIAKgCIAAABIAAABIAAACIgJAoIACgFQAHgOAJgMQAKgMAKAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAIgGgBIgCgDIgBgCIgBgBIgCgBQgEAAgHALQgHAMgFAMIgIAUIgIAYg");
	this.shape_16.setTransform(843.2,135.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34495F").s().p("AgfAoQgIgIAAgOQAAgWAVgVQATgWAVAAQAJAAAEAEQAFAEAAAHQAAAPgSALQgQAJgTACIgFABIgDAHIAAAGQAAAJAGAFQAGAFAIAAQAHAAAIgFIAPgLIACACQgFAGgIAHQgPAKgPABQgKgBgJgHgAAGgkQgGAFgFAIIgJAQIgDAIQATgBAMgMQAMgLAAgKQAAgEgBgDQgDgBgDAAQgHAAgGAFg");
	this.shape_17.setTransform(834.2,136);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34495F").s().p("AAJAvIgBgGIgGg/IgqBEIAAABIgBAAIgCAAIAAgBIgBgZIgBgSIgCgOQgCgTgCgEQgDgFgGABIgDAAIgCAAIAAgDIAIgCIAIgCIAKgCQADAAAEAdIADAkIAog/IABgBIABgBIABABIABABIAHBKIALgOIALgPQAIgKACgHQACgDAAgEIAAgDIgCgCIgDgDIgDgDIgBgEQAAgCACgDQACgDAFAAQADAAAEADQADADAAAHQAAAJgIAOIgNASIgSAXQgOASgDAAIgBgBg");
	this.shape_18.setTransform(822.5,136);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34495F").s().p("AglAnQgIgIAAgPQAAgVATgVQATgVAWAAQARAAAHAJQAHAKAAAMQAAAVgTAVQgUAWgVAAQgOAAgJgJgAgPgTQgMAVAAAVQAAAJAEAFQAEAGAIAAQAQAAANgZQALgVAAgSQAAgIgCgFQgEgIgJAAQgPAAgOAXg");
	this.shape_19.setTransform(810.2,136);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34495F").s().p("Ag/BEIAAgDQAIAAACgDQAFgCACgLIAbhbIABgIIABgDIAAgCQAAgFgDgBQgDgDgJAAIAAgDIAzAAQAQAAAKADQASAIAAAUQABANgIAKQgOARglAAIgIAAIgIgBIgMAoIgCAGIgBAHQAAAFAEACQADABAIABIAAADgAAHg8QgCABgBADIgOA0IAFABIAGAAQAQAAAIgDQARgJAAgWQAAgNgIgGQgGgFgNAAg");
	this.shape_20.setTransform(798.6,133.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AkcBzIAAjlII5AAIAADlg");
	this.shape_21.setTransform(954.4,154.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#34495F").s().p("AzwZAIAA5AIWlAAIKsrUIgFnWIqZgFIAAGQImPAAIAAsgIW9AAIAAQLIuPPEIzCAAIAAGfQAAGfAEAAQAFAABShpIBShpIYAAAIAApEIGQAAIAAPUI7LAAIiOC0g");
	this.shape_22.setTransform(963,77.1,0.061,0.061);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#34495F").s().p("AJ2Y/IiKizI7SAAIAAvUIGQAAIAFI/IYDAFIBQBpQBRBpAHAAQAHAAgCmdIgDmcIzGgKIuGu9IAAwNIW9AAIAAMgImPAAIgFmLIqZgFIAAHdIKpLSIWoAAIAAZAg");
	this.shape_23.setTransform(943.7,77.1,0.061,0.061);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#34495F").s().p("AgzYWQikgEhwgSQhtgSiMgsQjMhBithqQishpiYiXQjhjhhukEQhvkEAAktQABiyAkiYQAkiYBQigQC8l3F4j0QF5j1HFgqQBHgHA0gDIAhgBIg7A6QhtBpgxB/QgxB+AHCcQAGCKAtBoQAtBnBhBiQB3B4CbAxQC7A7C4gwQC5gxCJiRQA5g9Aig5QAig5AchRQASg1AFgiQAFgkAAhNQAAhPgHgxQgHgwgRgvQgLgaBUBDQBVBEBZBZQCpCoBlC3QBlC1AzDlQAYBuAACrQAACsgZBzQhfG3lMFIQlMFInWB3QiIAihxAMQhRAIhqAAIhVgBg");
	this.shape_24.setTransform(972.6,111.2,0.061,0.061);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#34495F").s().p("EgpRB48IhZgfQhugnhYgtQhYgvgtgqQg3g0grhCQgshCg4h1IhAiFIAAzGIGQAAIAAI0QAAHcAIBGQAGA3ARAmQAFAMAsBKQAhA5AeAXQAeAXBbAkIBOAgIThAAIA5gkQBkhAAqg1QApg2AmhyQANgqAEgjQADgkgBhSIgDiBIy1gFIAFmLMAnXgAKIAFqPMgmQAAAIpoocIoDAAIAAmQIKaAAIJpIcMAuWAAAIGOlZIACkxImaAAIAAmQIW0AAIAA5eIoIAAIAAzxIg/B+QjDGDlCEnQlCEnmkCwQnEC+n8APQn8AOnYijQpSjNmhm3Qmgm5iRo+QgoiegLjdQgMjeAXivQAxlwCwlUQCxlUEckOQEckNFriuQFsivGdhAQB+gUEQgBQEOAAB6AUQGXBCFPCaQFPCZElD+QCUCDCOCyQCOC1BTCjQAdA6ASgDQAMgCADjuQADjpACxoIAC49I4EAAIAACgIo5AAIAAmGIAoAAQAiAAADgFQADgGgQgeQgOgegahrQgShPgDhMQgDhQAAlZIAAnYIPTAAIAAGQIpEAAIAAD4QAABvADBWQADBUAGAaQAIAqAJALQAIAKAoASIA2AYIQPAAIgBxvIono/IsnAAIAAiWIi9AAIgDqhQgDnZgChmQgEhrgMgSIgRgbI0cAAQtFAAjvADQjwACgMAJQgOAKgCBfQgCBaADH5IADKuImPAAIgL2iIAdhAQAXg2Aig0QAhgyAdgbQAZgYA1gaQA1gaA2gQQAqgMDbgDQDpgDO8AAIVugBIBBAsQBuBLAxBDQAyBDAdByQAPA7ADBZQADBbAAGJIAAInIMHACIMHMtIAAUNICZAFQCBAEA8AOQA8AOAyAmQASAOATAWQAUAWAKASIAXArIgDchIAvAHQAUACBbACQBfACBsAAIEKAAIBVAdQCaA0BEBEQBDBFAoCRQAPA2ACD+QACD4gBV+IgDdhIgbBRQgsCAhRA7QhRA7i4AqIhhAVIgGbMIgXBEQgXBCgtAxQgtAvhAAaQgtARg7AEQg9AEkfACImJADIAAHkIqJI1ImkAAIgGLpIgoBQQgpBTgzAxQgzAyhGAaIhJAbIvcAAIAACiQAABsgEApQgFAogQA4QgqCHg6BuQg6Bvg8A2QghAfhUA5QhTA6hTAyIg+AlgAqh39Ih4APQokBDnEE7QnDE7jlHZQi6GCgCGlQgBGlC4GEQCrFrFDEbQFBEaGPCKQIiC+IyhRQIxhSHPlQQBXhACXiYQCXiZA9hWQC9kMBdkxQAtiUANhlQANhjgBjCQAAifgEg3QgFg4gShVQg+kiiHj3QiIj5jWjVQj1j0k+idQk+idlrg5QhIgMjGgGQhogEhAAAQg8AAgbADgAfRhMQgZADAEAJQAJAYATBwQATByAIBJQAEArAEBCQADBDAAAzIAAB8IDwAAIAAYFIEWgEQDegCA/gJQA+gJAJgeQAHgfgB8bQgC8cgIgVQgFgLgMgMQgMgLgOgGQgSgIhHgDQhFgDiigDIkfgDIAAYnIiSAAQheAAgZADg");
	this.shape_25.setTransform(975.7,108.4,0.061,0.061);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#34495F").s().p("Ag3YVQjqgHiqgqQirgqjNhlQleitjhkiQjikihGlvQgRhbAAiVQgBiVARhcQBAleDbkiQDakhFQiyQCnhYCygyQCygyDjgVQBRgIADAGQADAGg4A5QhTBVguBgQguBggPBzQgTCbAyCPQAxCPByBzQAzAzAhAYQAgAXA7AdQBaArA9AOQA8AOBdAAQCOgCBxgvQBzgxBlhlQAzgzAYghQAYghAcg7QATgnARgsQARgsAFgWQAOg7gBhgQgChggPg6QgSg/AEgEQAEgFBTBDQBUBCA0AyQCvCmBzDRQBzDSAtDpQATBhAACbQAACdgTBfQgnDGhRCqQhSCqiFCfQijDCjnCQQjoCPkEBDQiSAmhxAMQhQAIhuAAIhagBg");
	this.shape_26.setTransform(934,111.2,0.061,0.061);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#34495F").s().p("EATCB48Ihig8QjMh8hVhjQhVhlhJjJQgYhAgFgnQgFgmgEiGIgGi5Iv7gKIhCggQg9gegrgtQgsgugmhKIgmhJIgKruImogKIqBouIgFniIl8gFQj0gEhLgEQhQgEgfgLQiTgwgxiaQgIgXgEi+QgEi8gDoHIgFtwIgegDQghgEhdgXQirgrhIg/QhJg/gtiUIgXhJIgD9CQgC1uADjzQACj1APg8QApifBHhLQBHhLChg2QA2gSAugDQAvgEC/AAQEJAAAzgHIA2gGIgCuPQgCoEACjKQACjOAHgRQAMgeAhgiQAhgiAhgRQAwgYA0gKQAzgKBygFICWgGIAF0NIMHssIMRAAIAAywIArhXQARgjAYgmQAXgmAQgSQAfgkA7ggQA8ghBCgRQAjgJEFgDQEAgDN5AAIVqgBIA/ApQBIAuA2A4QA3A4AWAxQAdBBAHAYQANArAFBHQAIBhADI0IADKwImRAAIAAqAQAAnvgHh5QgGh4gbgOQgSgJ0gABQtkADjdACQjhAEgGAJQgKAMACKuIADKqIjXAAIAACWIskABIohI9IAARwIIDAAQFyAABQgDQBPgDAogPQAhgMAMgLQARgQAIghQALgzAAj2IAAkJIo/gFIAAmQIPTAAIAAHGQAAGFgMB2QgLB0g0CHQgFALAGADQAHAEAaAAIApAAIAAGGIo5AAIAAigI4EAAMAAAAyAIAZAAQAOAAAKgHQAKgIAJgQQB8jiCQiwQCPiyC1iXQEYjsFriXQFqiYGGgtQCBgPDoADQDnAEB1ATQJrBiHhFIQE/DZDmEmQDhEfB6FPQB5FNAGFfQAGFnhzFZQjEJMnyGrQnzGqqKCIQqACGpuiiQpvihnUmkQiwieiUjJQiTjKhZjMIgvhtIgFUrInqAAIAAZeIWqAAIAAGQImkAAIAAExIGLFYMAuZAAAIJnobIKUAAIAAGQIn7AAIpqIcMgmMAAAIAAKUMAnXAAAIAAGQIyrAFIgDCHQgCBfAEAeQADAiATAzQAiBjAgArQAgArBOA1IBeA+IT1gFIBPgiQAigPAfgRQAhgSAMgMQANgLAZgmQAYgkAWgqIA0hjIAAxtIGQAAIAAS6IgsBhQhtDxhlBhQhlBijkBSIhiAjgAEC35QlPAjkvB6QkvB6j8DJQhSBBhwB1QhxBzg9BTQj7FQhXGOQhYGPBaGVQBEE1CoERQClEMD1DRQD2DTEvCFQE2CIFXArQBgAMC3AAQC4AABcgMQGMg0FYipQFXioEDkOQCNiTBkiZQBjiYBHivQBDioAeiTQAfiTAGi3QAEiRgNh6QgNh7gjiIQiXpInjmcQnkmdqHhjQhggPjAgEQhDgCg2AAQhoAAg6AGgEgpFgZwQjyAKgPAGQgOAGgJANQgIANgHAZQgLAtgBb5QAAb5ALAqQAGAYALAKQAOANAgAGQAzAJDvAEIEVADIAA4FIEKAAIABijQABj0AvjGQAPhFAAgGQAAgEgrgCQgrgDhAAAIiWAAIgCsUQgCpKgDhjQgChGgFgTQgDgNgIgBIgpAAQhmAAjEAHg");
	this.shape_27.setTransform(931,108.4,0.061,0.061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance = new lib.ic_check_white_24dp_2x();
	this.instance.parent = this;
	this.instance.setTransform(126.7,462.6,0.799,0.799);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_28.setTransform(147.5,481.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AyNA7QheAAAAhcIAAgZMAnWAAAIAAAZQAABchdAAg");
	this.shape_29.setTransform(248.8,507.7);

	this.instance_1 = new lib.limemoirepapercups();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183,380,0.163,0.163);

	this.instance_2 = new lib.limemoirepapercups();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133,347,0.147,0.147);

	this.instance_3 = new lib.limemoirepapercups();
	this.instance_3.parent = this;
	this.instance_3.setTransform(246,347,0.147,0.147);

	this.instance_4 = new lib.ic_check_white_24dp_2x();
	this.instance_4.parent = this;
	this.instance_4.setTransform(739.1,460.4,0.799,0.799);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_30.setTransform(760,479.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AyNA7QheAAAAhcIAAgZMAnWAAAIAAAZQAABchdAAg");
	this.shape_31.setTransform(861.2,505.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("Ag5CGIAAhzIBzAAIAABzgAg5gTIAAhyIBzAAIAAByg");
	this.shape_32.setTransform(948,275.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("Ag5CGIAAhzIBzAAIAABzgAg5gTIAAhyIBzAAIAAByg");
	this.shape_33.setTransform(963.4,275.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("Ag5CGIAAhzIBzAAIAABzgAg5gTIAAhyIBzAAIAAByg");
	this.shape_34.setTransform(978.7,274.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("Ai8CHIAAg+IF4AAIAAA+gAi7AgIAAg9IF4AAIAAA9gAi7hIIAAg+IF4AAIAAA+g");
	this.shape_35.setTransform(890,275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAZBHIAAhBQAAgNgGgFQgGgHgKAAQgHAAgHAFQgHADgDAIQgCAFAAANIAAA4IgSAAIAAiOIASAAIAAAzQAMgNASAAQALgBAJAFQAIAFAEAHQADAIAAAPIAABBg");
	this.shape_36.setTransform(232.6,278);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgfAoQgNgOAAgaQAAgQAGgMQAFgNAMgGQAKgGANAAQARAAAKAIQAMAJADAQIgRACQgDgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgVAAgMgOg");
	this.shape_37.setTransform(222.4,280);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgbA1IAAhnIAQAAIAAAQQAGgLAFgEQAEgDAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDADQgFAEgCAGQgDAKAAALIAAA1g");
	this.shape_38.setTransform(214.5,279.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_39.setTransform(204.8,280);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAAdgJQgBgNgGgHQgIgKgNAAQgLAAgJAIQgIAIgBAOIA5AAIAAAAg");
	this.shape_40.setTransform(193.7,280);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgcBFQgMgGgIgMQgHgLgBgPIASgBQABAKAFAHQAEAHAKAFQAKAEALAAQALAAAJgEQAHgDAEgFQAEgGAAgGQAAgHgDgFQgEgFgJgDQgGgDgSgFQgVgEgHgEQgLgFgFgIQgEgIgBgJQABgMAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgTABQgBgOgIgGQgJgIgQAAQgQABgJAGQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGAKQgHALgMAGQgNAFgPAAQgSAAgOgFg");
	this.shape_41.setTransform(181.5,278);

	this.instance_5 = new lib.searchiconpng18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(133,261,0.08,0.08);

	this.instance_6 = new lib.DSMORTONc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(778,571,0.24,0.24);

	this.instance_7 = new lib.ch_darkbrownsugar_300x400();
	this.instance_7.parent = this;
	this.instance_7.setTransform(498,581,0.34,0.34);

	this.instance_8 = new lib.towel1595087_960_720();
	this.instance_8.parent = this;
	this.instance_8.setTransform(175,582,0.185,0.185);

	this.instance_9 = new lib.bermudablueforks();
	this.instance_9.parent = this;
	this.instance_9.setTransform(485,355,0.345,0.345);

	this.instance_10 = new lib.ic_check_white_24dp_2x();
	this.instance_10.parent = this;
	this.instance_10.setTransform(740,689,0.799,0.799);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_42.setTransform(760,708.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AyOA7QhdAAAAhcIAAgZMAnXAAAIAAAZQAABcheAAg");
	this.shape_43.setTransform(861.3,733);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AyONSQhdAAAAhdIAA3pQAAheBdAAMAkcAAAQBeAAAABeIAAXpQAABdheAAg");
	this.shape_44.setTransform(861.3,648.3);

	this.instance_11 = new lib.ic_check_white_24dp_2x();
	this.instance_11.parent = this;
	this.instance_11.setTransform(433,689,0.799,0.799);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_45.setTransform(453.9,708.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AyNA7QheAAAAhcIAAgZMAnWAAAIAAAZQAABchdAAg");
	this.shape_46.setTransform(555.1,733);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AyNNSQheAAAAhdIAA3pQAAheBeAAMAkbAAAQBdAAAABeIAAXpQAABdhdAAg");
	this.shape_47.setTransform(555.1,648.3);

	this.instance_12 = new lib.ic_check_white_24dp_2x();
	this.instance_12.parent = this;
	this.instance_12.setTransform(126.7,682.4,0.799,0.799);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_48.setTransform(147.5,701.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AyNA7QheAAAAhcIAAgZMAnWAAAIAAAZQAABchdAAg");
	this.shape_49.setTransform(248.8,727.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AyNNSQhdAAgBhdIAA3pQABheBdAAMAkbAAAQBdAAAABeIAAXpQAABdhdAAg");
	this.shape_50.setTransform(249,648.3);

	this.instance_13 = new lib.milk_PNG12734();
	this.instance_13.parent = this;
	this.instance_13.setTransform(814,354,0.143,0.143);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AyNNSQhdABAAhdIAA3pQAAheBdgBMAkbAAAQBdABAABeIAAXpQAABdhdgBg");
	this.shape_51.setTransform(861.2,426.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AyNNSQhdABgBhdIAA3qQABheBdAAMAkbAAAQBdAAAABeIAAXqQAABdhdgBg");
	this.shape_52.setTransform(249,426.4);

	this.instance_14 = new lib.ic_check_white_24dp_2x();
	this.instance_14.parent = this;
	this.instance_14.setTransform(433,466,0.799,0.799);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("AjRD8QgqAAAAgrIAAmhQAAgrAqAAIGjAAQAqAAAAArIAAGhQAAArgqAAg");
	this.shape_53.setTransform(453.9,485.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009900").s().p("AyNA7QheAAAAhcIAAgZMAnWAAAIAAAZQAABchdAAg");
	this.shape_54.setTransform(555.1,511.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AyNNTQhegBAAhdIAA3pQAAhdBeAAMAkbAAAQBdAAAABdIAAXpQAABdhdABg");
	this.shape_55.setTransform(555.1,426.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(2,1,1).p("Aj5izIHzAAQATAAAAAUIAAE/QAAAUgTAAInzAAQgTAAAAgUIAAk/QAAgUATAAg");
	this.shape_56.setTransform(963.5,275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EguJADeQhHAAAAhaIAAkHQAAhaBHAAMBcTAAAQBHAAAABaIAAEHQAABahHAAg");
	this.shape_57.setTransform(425.7,277);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_14},{t:this.shape_52},{t:this.shape_51},{t:this.instance_13},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_12},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_29},{t:this.shape_28},{t:this.instance}]}).wait(1));

	// Background
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("EggLAhmMAAAg0fQDbi9E0ioQQnpHXeABQIeAAHlBLMAAABB/g");
	this.shape_58.setTransform(893,235.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("EhVnA1+MAAAhTPQJGk/M1kbUAsMgPRA+egABQWhAAUJCBMAAABp6g");
	this.shape_59.setTransform(550.9,456.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58}]}).wait(1));

	// Logo
	this.instance_15 = new lib.martinsblack();
	this.instance_15.parent = this;
	this.instance_15.setTransform(8,59,0.224,0.224);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkTkXIInAAIAAIvIonAAg");
	this.shape_60.setTransform(106,96.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AkTEYIAAovIInAAIAAIvg");
	this.shape_61.setTransform(106,96.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("A0akXMAo1AAAIAAIvMgo1AAAg");
	this.shape_62.setTransform(205.3,140.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A0aEYIAAovMAo1AAAIAAIvg");
	this.shape_63.setTransform(205.3,140.4);

	this.instance_16 = new lib.LOGOGREENFOODNEW();
	this.instance_16.parent = this;
	this.instance_16.setTransform(74.4,37.2,0.323,0.323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(552.9,420.2,1096.1,782.1);
// library properties:
lib.properties = {
	width: 1100,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/UI_3_Check_atlas_.png", id:"UI_3_Check_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;