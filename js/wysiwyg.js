// "use strict";

document.title = "WYSIWYG Rich Text Editor";

let textEditor = new (function () {
    let self = this;

    self.init =  function(args) {

        // Hide textarea
        document.getElementById(args.selector).style.display = 'none';

        // Fonts
        const fonts = [
            'Arial',
            'sans-serif'
        ];
        
        let defaultElements = [
            {command: 'bold', type: 'button', innerHTML: 'Bold'},
            {command: 'italic', type: 'button', innerHTML: 'Italic'},
            {command: 'underline', type: 'button', innerHTML: 'Underline'},
            {command: 'strikeThrough', type: 'button', innerHTML: 'Strike'}
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


        for(let idx = 0; idx < defaultElements.length; idx++) {
            // Create element for button
            let element = document.createElement(defaultElements[idx].type);
            element.appendBefore(document.getElementById('myRichTextEditorField'));
            
            element.setAttribute('title', defaultElements[idx].command);

            element.innerHTML = defaultElements[idx].innerHTML;
            element.setAttribute('type', defaultElements[idx].type);
            element.style.margin = '0 2px 5px 0';
            element.style.padding = '5px 5px 5px 5px';
            element.style.border = 'none';
            element.style.background = "#d3d3d3";

            let command;
            let argument = null;

            // if its button
            if (defaultElements[idx].type.indexOf('button') !== -1) {
                let showCode = false;
                let isPrompt = false;

                // If its a button add event click to it
                element.onclick = function () {
                    command = this.getAttribute('title');
                    if (command == 'viewSourceCode') {
                        // view source code of the html tags
                        showCode = execViewSourceCommand(element, contentEditable, showCode);
                    } else {
                        // switch (command) {
                            
                        // }

                        if ((argument !== null && isPrompt) || !isPrompt)
                            myRichTextEditorField.document.execCommand(command, false, argument);
                    }
                };
            } else {
                // if it is not a button

            }
        }
    };
    

    Element.prototype.appendBefore = function(element) {
        element.parentNode.insertBefore(this, element);
    }, false;

    Element.prototype.appendAfter = function (element) {
        element.parentNode.insertBefore(this, element.nextSibling);
    }, false;

    let loadIcons = function(){
        let icons = document.createElement('link');
        icons.setAttribute('href', '');
        icons.setAttribute('rel', 'stylesheet');
        icons.setAttribute('type', 'text/css');
    };
});