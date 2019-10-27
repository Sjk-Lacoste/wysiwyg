// "use strict";

document.title = "WYSIWYG Rich Text Editor";

// Fonts
const fonts = {
    bold: 'fa fa-bold',
    italic: 'fa fa-italic',
    underline: 'fa fa-underline'
};

let textEditor = new (function () {
    let self = this;

    self.init =  function(args) {

        // Hide textarea
        document.getElementById(args.selector).style.display = 'none';
        
        let defaultElements = [
            {command: 'bold', type: 'button', innerHTML: 'Bold'},
            {command: 'italic', type: 'button', innerHTML: 'Italic'},
            {command: 'uderline', type: 'button', innerHTML: 'Underline'},
            {command: 'strikeThrough', type: 'button', innerHTML: 'Strike'},
        ];

        // Container
        let container = document.createElement('div');
        container.setAttribute('id', 'myRichTextEditorFieldContainer');
        container.appendAfter(document.getElementById(args.selector));

        // Replace the textarea with iframe editable
        let contentEditable = document.createElement('iframe');
        contentEditable.setAttribute('name', 'myRichTextEditorField');
        contentEditable.setAttribute('id', 'myRichTextEditorField');
        contentEditable.style.width = '100%';
        contentEditable.style.border = 'solid 1px lightgrey';

        container.appendChild(contentEditable);

        // Make the iframe editable in the browser
        contentEditable.contentDocument.designMode = "on";

        //  Loop through the buttons
        let el = 0;
        for(el in defaultElements) {
            let thisElement;
            
            // Create element
            let element = document.createElement(defaultElements[el].type);
            
            if (el > 0) {
                thisElement = element;
            }
            
            if (el > 0) {
                element.appendAfter(thisElement);
            } else {
                element.appendBefore(contentEditable);
            }

            element.innerHTML = defaultElements[el].innerHTML;
            element.style.margin = '0 5px 5px 0';
        }
    };

    Element.prototype.appendBefore = function(element) {
        element.parentNode.insertBefore(this, element);
    }, false;

    Element.prototype.appendAfter = function (element) {
        element.parentNode.insertBefore(this, element.nextSibling);
    }, false;
});