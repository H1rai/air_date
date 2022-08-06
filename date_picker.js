function(instance, context,properties) {
    const i = instance;
    const d = i.data;
    const c = i.canvas;
    const dp = new AirDatepicker('#el');
    var fromDate = new Date();
    var toDate = new Date();
    var min_date = new Date();
    fromDate.setHours(23);
    fromDate.setMinutes(59);
    fromDate.setSeconds(59);
    toDate.setHours(23);
    toDate.setMinutes(59);
    toDate.setSeconds(59);


    d.input = $('<input readonly style="padding:0px; border-width:0px; text-align:inherit; font-famliy:inherit; font-size:inherit; color:inherit; font-weight:inherit; text-decoration:inherit;font-style:inherit;background:transparent;">');
    c.append(d.input);
    
    fromDate.setDate(toDate.getDate()-14);
    min_date.setDate(toDate.getDate()-93);

instance.publishState('start_date',fromDate);
instance.publishState('end_date',toDate);
console.log(dp);

var week_1_button = {
    content: '1週間',
    className: 'custom-button-classname',
    onClick: (dp) => {
        var week_1 = new Date();
        fromDate = new Date();
        fromDate.setHours(23);
        fromDate.setMinutes(59);
        fromDate.setSeconds(59);
        toDate = new Date();
        toDate.setHours(23);
        toDate.setMinutes(59);
        toDate.setSeconds(59);

        fromDate.setDate(fromDate.getDate()-7),
        instance.publishState('start_date',fromDate),
        instance.publishState('end_date',toDate),
    console.log(dp),
    dp.selectDate([fromDate,toDate]),
    dp.hide();
    }
};

let button = {
    content: 'OK',
    className: 'custom-button-classname',
    onClick: function(dp){
        instance.publishState('start_date',fromDate),
        instance.publishState('end_date',toDate),
        instance.triggerEvent('value_is_changed', function () {});
        console.log('start',fromDate,'end',toDate);
        dp.hide();
        
    }
}
    


new AirDatepicker(d.input[0], {
    firstDay:0,
    range:true,
    multipleDatesSeparator :' ~ ',
    maxDate:new Date(),
    minDate:min_date,
    selectedDates:[toDate,fromDate],
    buttons: [week_1_button,button],
    
        onSelect: function(obj){
            fromDate = obj.date[0];
            toDate =obj.date[1];
        }
        

},
                    );

}
