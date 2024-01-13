const purchcontainer = $('.purchaseButtonContainer');
purchcontainer.attr({
    'data-disableorder': disableOrders
})
const purchoff = purchcontainer.data('disableorder');
const disablereason = "... The slots are out or is just closed, come back later!"
if (purchoff == true) {
    purchcontainer.attr({
        'aria-label': disablereason,
        'href': 'JavaScript:void(0);',
        'target': ''
    })
}