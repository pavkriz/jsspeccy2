/**
 * Created by Pavel Kriz on 18. 3. 2016.
 */

JSSpeccy.Debugger = function(opts) {
    var self = {};

    var processor = opts.processor;
    var memory = opts.memory;

    var _formatHex = function(num, figures) {
        var result = num.toString(16).toUpperCase();
        while (result.length < figures) {
            result = "0" + result;
        }
        return result;
    };

    self.getText = function() {
        return "PC: " + _formatHex(processor.getPC(), 4) + "  " +
        "SP: " + _formatHex(processor.getSP(), 4) + "\n" +
        "AF: " + _formatHex(processor.getAF(), 4) + "  " +
        "BC: " + _formatHex(processor.getBC(), 4) + "\n" +
        "DE: " + _formatHex(processor.getDE(), 4) + "  " +
        "HL: " + _formatHex(processor.getHL(), 4) + "\n" +
        "IX: " + _formatHex(processor.getIX(), 4) + "  " +
        "IY: " + _formatHex(processor.getIY(), 4);
    };

    self.getProcessor = function() {
        return processor;
    };

    return self;
};
