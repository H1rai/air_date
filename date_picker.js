function(instance, context) {
    const i = instance;
    const d = i.data;
    const c = i.canvas;
    var startDate = new Date();
    var min_date = new Date();
    var button_date_start =new Date();
    var button_date_end =new Date();
    var endDate = new Date();
    d.input = $('<input readonly style="padding:0px; border-width:0px; text-align:inherit; font-famliy:inherit; font-size:inherit; color:inherit; font-weight:inherit; text-decoration:inherit;font-style:inherit;background:transparent;">');
    c.append(d.input);
   
  
   
   var week_1_button = {
    content: '1週間',
    className: 'custom-button-classname',
    onClick: (dp) => {
        var week_1 = new Date();
        endDate = new Date();
        button_date_start.setDate(week_1.getDate()-7);
        button_date_end.setDate(week_1.getDate());

        
        dp.selectedDates[0]=button_date_start;
        dp.selectedDates[1]=button_date_end;

        
        dp.setViewDate[0]=button_date_start;
        dp.setViewDate[1]=button_date_end;

       console.log(dp);
       
    }
 };

 let button = {
    content: 'OK',
    className: 'custom-button-classname',
    onClick: function(obj){
        instance.publishState('start_date',startDate),
        instance.publishState('end_date',endDate),
         instance.triggerEvent('value_is_changed', function () {});
         console.log('start',startDate,'end',endDate);
        obj.hide();
        
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
       maxDate:new Date(),
       minDate:min_date,

       
         onSelect: function(obj){
            startDate = obj.date[0];
            endDate =obj.date[1];
         
       },

       selectedDates:[endDate,startDate],
       buttons: [week_1_button,button]
   }
                     
                    );

}
