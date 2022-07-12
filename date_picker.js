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
        button_date_start.setDate(endDate.getDate()-7);
        dp.selectDate(button_date_start);
        dp.selectDate(week_1);
        dp.setViewDate(button_date_end);
        dp.setViewDate(week_1);


         
    }
 };

 let button = {
    content: 'Select 2021-07-26',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
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
       selectedDates:[endDate,startDate],
       buttons: [week_1_button,button]
   });
   
  
   
   
}
