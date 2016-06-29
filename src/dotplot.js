/*
* Documentation about dotplots : http://www.code10.info/index.php%3Foption%3Dcom_content%26view%3Darticle%26id%3D64:inroduction-to-dot-plots%26catid%3D52:cat_coding_algorithms_dot-plots%26Itemid%3D76
*/
Dotplot = (function(window) {

    var my = window['Dotplot'] || {};

    return my

})(window);

/**
 * Function to embed a new dotplot in a webpage at an HTML node refered by its id as elt,
 * accordingly to parameters set by the options object
 * @param {string} elt     Dom node ID where the dotplot should be inserted
 * @param {[[Type]]} options [[Description]]
 */
Dotplot.createDiagram = function(elt, options) {
    //checking

    if (options.hasOwnProperty('sequences')) {

    }


}

Dotplot.diagrams = {};

Dotplot.matrices = {};

Dotplot
