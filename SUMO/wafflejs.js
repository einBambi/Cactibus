(function(){
    var FLAGS = {
        'editing-tools-show-hide': true,'elasticsearch': true,'ethnio-all': false,'ethnio-home': false,'karma': false
        },
        SWITCHES = {
        'wiki-rebuild-on-demand': false,'karma': true,'migrate-helpfulvotes': true,'hide-helpful-chart': true,'track-article-reads': true
        },
        SAMPLES = {
        'usernames-test': false
        };
    window.waffle = {
        "flag": function waffle_flag(flag_name) {
            return !!FLAGS[flag_name];
        },
        "switch": function waffle_switch(switch_name) {
            return !!SWITCHES[switch_name];
        },
        "sample": function waffle_sample(sample_name) {
            return !!SAMPLES[sample_name];
        }
    };
})();
