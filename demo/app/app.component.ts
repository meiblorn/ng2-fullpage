/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from "../../components";

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('fullpage.js/jquery.fullPage.css'),
        require('./app.component.scss')
    ],
    template: require('./app.component.html')
})
export class AppComponent {

    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: false,
        scrollingSpeed: 1000,

        menu: '.menu',
        css3: true,
        anchors: [
            'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
            'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
        ]
    });

    @Output() private templates = {
        install: require('raw!./templates/install.template.txt'),
        usage: require('raw!./templates/usage.template.txt'),
        slides: {
            attributes: require('raw!./templates/slide1/usage.attributes.slide.template.txt'),
            classOptions: require('raw!./templates/slide2/usage.class.options.template.txt'),
            mix: require('raw!./templates/slide3/usage.mix.template.txt')
        },
        service: require('raw!./templates/service.tempalte.txt')
    };

    constructor(private fullpageService: MnFullpageService) {
    }

}
