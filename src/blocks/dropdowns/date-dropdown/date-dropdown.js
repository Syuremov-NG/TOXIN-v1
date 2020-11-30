$('.date-dropdown__input').datepicker({
    clearButton: true,
    navTitles : {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
    prevHtml: '<div class="material-icons">arrow_back</div>',
    nextHtml: '<div class="material-icons">arrow_forward</div>',
    //inline: true,
    range: true,
})
$('.date-right').datepicker({
    position: "bottom right"
})
//document.getElementsByClassName(".datepicker--nav-title").innerHTML = "";