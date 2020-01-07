'use strict';

export function linksClick(a, b) {
    let actions = a,
        style = actions.style,
        actions1 = b,
        style1 = actions1.style;
    actions.classList.add('invisible');
    actions1.classList.add('visible');
}