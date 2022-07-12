function(instance, context) {
    const i = instance;
    const d = i.data;
    const c = i.canvas;
    var startDate = new Date();
    var min_date = new Date();
    var button_date_start =new Date();
    d.input = $('<input readonly style="padding:0px; border-width:0px; text-align:inherit; font-famliy:inherit; font-size:inherit; color:inherit; font-weight:inherit; text-decoration:inherit;font-style:inherit;background:transparent;">');
    c.append(d.input);
   
   
   
   var week_1_button = {
   content: '1週間',
   className: 'custom-button-classname',
   onClick: (dp) => {
       var button_date_end = new Date();
       button_date_start.setDate(button_date_end.getDate()-7)
       dp.selectedDates[button_date_start,button_date_end];
   }
}

   
    var endDate = new Date();
    startDate.setDate(endDate.getDate()-14);
    min_date.setDate(endDate.getMonth()-93);
   
   instance.publishState('start_date',startDate);
   instance.publishState('end_date',endDate);


   new AirDatepicker(d.input[0], {
       firstDay:0,
       range:true,
       multipleDatesSeparator :' ~ ',
       onSelect: function(obj){
       i.publishState('start_date',obj.date[0]),
        i.publishState('end_date',obj.date[1]),
         instance.triggerEvent('value_is_changed', function () {});
       },
       maxDate:new Date(),
       minDate:min_date,
       selectedDates:[endDate,startDate],
       buttons: [week_1_button]
   });
   
  
   
   
}
