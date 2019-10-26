"use strict";

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
        // console.log('started');
        let defaultElements = [
            {command: 'bold', type: 'button', innerHtml: 'B'},
            {command: 'italic', type: 'button', innerHtml: 'I'},
            {command: 'uderline', type: 'button', innerHtml: 'U'},
            {command: 'strikeThrough', type: 'button', innerHtml: 'S'},
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

        // Hide textarea
        document.getElementById(args.selector).style.display = 'none';

        // Make the iframe editable in the browser
        contentEditable.contentDocument.designMode = "on";
    };

    Element.prototype.appendBefore = function(element) {
        element.parentNode.insertBefore(this, element);
    }, false;

    Element.prototype.appendAfter = function(element) {
        element.parentNode.insertBefore(this, element.nextSibling);
    }, false;
});