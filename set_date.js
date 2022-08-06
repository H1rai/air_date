function(instance, properties, context) {
 var datepicker = instance.data.datepicker;
 
    if(datepicker != null){
     if(properties.thedate!=null){
         if(properties.enable_range === true){
     	datepicker.selectDate(properties.thedate);
        instance.publishState('value',properties.thedate);
        instance.publishState('valuelist',[properties.thedate]);
     	instance.publishState('range',[c]);
       } else {
           datepicker.selectDate(properties.thedate);
        instance.publishState('value',properties.thedate);
        instance.publishState('valuelist',[properties.thedate]);
           
       }
        
     }
     else{
       datepicker.clear();
       instance.publishState('range', null);
  	   instance.publishState('valuelist',null); 
       instance.publishState('value',null);  
     }
     
 }

}