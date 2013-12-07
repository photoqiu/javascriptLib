(function() {
    var doc = document,win = window,config = {'debug':true};
    function dot () {
        this.config = config;
        this.init();
    }
    dot.prototype = {
        init : function() {
                        
        },
        getSystem : function() {
        
        },
        setSystem : function() {
        
        },
        amd : function() {
            return true;
        },
        version : function() {
            return 'v0.1';
        },
        show : function() {

        },
        hidden : function() {

        }
    };
    win.dot = new dot();
})();
