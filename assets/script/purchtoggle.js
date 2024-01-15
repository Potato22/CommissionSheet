const purchcontainer = $('.purchaseButtonContainer');
purchcontainer.attr({
    'data-disableorder': disableOrders
})
const purchoff = purchcontainer.data('disableorder');
if (purchoff == true) {
    purchcontainer.attr({
        'aria-label': disablereason,
        'href': 'JavaScript:void(0);',
        'target': ''
    })
}