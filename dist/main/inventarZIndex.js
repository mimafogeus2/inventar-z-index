"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var zIndex = function(layers) {
    return function(_a) {
        var name = _a[0], value = _a[1];
        return layers.map((function(layerName, index) {
            var capitalizedLayerName = layerName.charAt(0).toUpperCase() + layerName.slice(1);
            var varName = "" + name + capitalizedLayerName;
            var varValue = value * (index + 1);
            return [ varName, varValue ];
        }));
    };
};

exports.default = zIndex;
//# sourceMappingURL=inventarZIndex.js.map
