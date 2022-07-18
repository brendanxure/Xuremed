const mongoose = require("mongoose");

const dashboard = new mongoose.Schema({
   drug : {
       interactions : [
           {
             ingredients : {
                 drugbank_id : 'String',
                 name : 'String'
             },
             affected_ingredient : {
                 drugbank_id : 'String',
                 name : 'String'
             },
             description : 'String',
             action: 'String',
             severity : 'String'
           }
       ]
   }
})