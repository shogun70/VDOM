// NOTE this depends on base2 lib

(function() {

base2.JavaScript.bind(window);

var domSystem = Meeko.stuff.domSystem;
var ifaceLookup = {
	HTMLElement: "Element"
}

domSystem.config(function(ifName, spec) {
	var natives = domSystem.natives;
	var name = spec.name;
	var exists;
	try { exists = (typeof natives[ifName].prototype[name] !== "undefined"); }
	catch (error) { exists = true; }
	if (exists) return;
	var b2_ifName = ifaceLookup[ifName] || ifName;
	var b2_iface =  base2.DOM[b2_ifName];
	if (!b2_iface) return;
	if (!b2_iface[name]) return;
	return { value: domSystem.createDelegate(spec, b2_iface) };
});

})();
