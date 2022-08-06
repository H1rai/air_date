function(instance, properties, context) {

    const dp = new AirDatepicker('#el');

            instance.publishState('start_date',properties.start_set_deta),
            instance.publishState('end_date',properties.end_set_deta),
            console.log(properties),
            console.log(dp),

    
    
    }