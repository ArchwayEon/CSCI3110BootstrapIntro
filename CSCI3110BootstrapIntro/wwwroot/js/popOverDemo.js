"use strict";

(function _popoverDemo() {
    let allPopoverDOMElementList =
        document.querySelectorAll('[data-bs-toggle="popover"]');
    // Convert the NodeList to an Array
    let allPopoverDOMElements = Array.from(allPopoverDOMElementList);
    let allTooltipElements = allPopoverDOMElements.map(po => {
        return new bootstrap.Popover(po);
    });

    let popoverElement = document.querySelector('.popover-dismiss');
    let popover = new bootstrap.Popover(popoverElement, {
        trigger: 'focus'
    });

    let popoverHoverElement = document.querySelector('#popoverHoverBtn');
    let hoverBtnPopover = new bootstrap.Popover(popoverHoverElement);
    popoverHoverElement.addEventListener("mouseover", () => {
        hoverBtnPopover.show();
    });
    popoverHoverElement.addEventListener("mouseout", () => {
        hoverBtnPopover.hide();
    });

})();
