function(instance, context) {
    const i = instance;
    const d = i.data;
    const c = i.canvas;
    var startDate = new Date();
    var min_date = new Date();
    var button_date_start =new Date();
    var endDate = new Date();
    d.input = $('<input readonly style="padding:0px; border-width:0px; text-align:inherit; font-famliy:inherit; font-size:inherit; color:inherit; font-weight:inherit; text-decoration:inherit;font-style:inherit;background:transparent;">');
    c.append(d.input);
   
   
   
 
    var week_1_button = {
        content: '1週間',
        className: 'custom-button-classname',
        onClick: (dp) => {
            button_date_start.setDate(endDate.getDate()-7);
             instance.publishState('start_date',button_date_start);
             selectedDates[endDate,button_date_start];

             
        }
     }
   
    
    startDate.setDate(endDate.getDate()-14);
    min_date.setDate(endDate.getDate()-93);
   
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
