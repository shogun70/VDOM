(function() {

Meeko.stuff.domSystem.initialize();

var xblSystem = Meeko.stuff.xblSystem;
var domSystem = Meeko.stuff.domSystem;

xblSystem.Element.bind = function(elt) {
	if (!elt) return; // FIXME why does this occur??
	Meeko.stuff.domSystem.attach(elt);
	return elt;
}

if (!document.documentElement.matchesSelector) {
	xblSystem.Element.matchesSelector = window.Element.matchesSelector;
}

xblSystem.initialize();

})();
