$.fn.copyCSS = function () {
	var sheets = document.styleSheets, 
			o = {},
			element = $(this[0]);
	console.log(element)
	for ( var i in sheets ) {
		var rules = sheets[i].rules || sheets[i].cssRules;
		for ( var r in rules ) {
			if ( element.is(rules[r].selectorText) ) {
				o = $.extend(o, css2json(rules[r].style), css2json(element.attr('style')));
			}
		}
	}
	return o;
}

function css2json(css){
	var s = {};
	if ( !css ) return s;
	if ( css instanceof CSSStyleDeclaration ) {
		for ( var i in css ) {
			if( (css[i]).toLowerCase ) {
				s[(css[i]).toLowerCase()] = (css[css[i]]);
			}
		}
	} 
	else if( typeof css == "string" ) {
		css = css.split("; ");          
		for ( var i in css ) {
			var l = css[i].split(": ");
			s[l[0].toLowerCase()] = (l[1]);
		};
	}
	return s;
}


var copy = {};

function start() {
	copy = $(".sidebar.left").copyCSS();
	$(".sidebar.left").css( { "position" : "absolute" });
	$(".sidebar.left").animate( { "top" : 0 }, 300 );
}
