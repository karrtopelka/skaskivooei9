splitScroll = () => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.facts-title',
        triggerHook: 0
    })
    .setPin('.facts-title')
    // .addIndicators()
    .addTo(controller);
}

splitScrollTwo = () => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.htg-title',
        triggerHook: 0
    })
        .setPin('.htg-title')
        // .addIndicators()
        .addTo(controller);
}

splitScroll();
splitScrollTwo();
