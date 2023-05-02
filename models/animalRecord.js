 const mongoose = require('mongoose');
 const AutoIncrement = require('mongoose-sequence')(mongoose);


 const animalRecord = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    animal_id : Number,
    breed : {
        type:String,
        enum: ["niliravi" , "kundi" , "non descript buff" , 'dhanni' , 'cholistani' , 'sahiwal' , 'dajal' , 'lohani' , 'red sindhi' , 'bhagnari' , 'cross breed' , 'non descript cattle' , 'Friesian']
    },
    body_coat_major_color: {
        type:String,
        enum:['black' , 'grey' , 'white', 'red' , 'brown ', 'other color']
    }
    , 
    body_coat_minor_color:{
        type:String,
        enum:['white spots' , 'black spots' , 'red spots' , 'brown spots' , 'no spot']
    },
    horns_type:{
        type:String,  
        enum:['small' , 'medium' , 'large' , 'polled']
    },
    horns_position:{
        type:String,  
        enum:['inward' , 'outward' , 'downward' , 'half ring' , 'full ring' , 'none' , 'dehorned']
    },
    known_age:{
        type:String,
        enum:["kheera" , 'donda' , 'choga' ,'chigga' , 'full mouth' , 'broken teeth' ]
    }, 
    live_weigh_kg:String,
    origin: String,
    farmer_name: String,
    address: String,
    housing_roof_type: {
        type:String,
        enum:['lenter' , 'slabs' ,'iron sheet' , 'fibre sheet' , 'other roof']
    }, 
    housing_floor_type:{
        type:String,
        enum:["brick" , 'pakka' , 'katcha' , 'cubical' , 'other floor']
    },
    living_climate_temp_centigrade:{
        type:String
    },
    Rearing_RH : String, //new
    ventilation_facility : {
        type:Boolean,   //new
       
    },
    stall_type:{
        type:String,
        enum:['tie' , 'free']
    },
  
    grazing_facility:{
        type:Boolean,    
       
    },
    salt_lick :{  // changed
        type:Boolean,
        
    },
    health_status:{
        type:String,
        enum:['dull'  , 'active alert']
    },
    deformity_status:Boolean,
    disease_condition_history:{
        type:String,
        enum:['diarrhea' , 'cough' ,'fever' , 'skin allergy' , 'injury' , 'indigestion' , 'disease free']
    },
    vet_consultency: Boolean,
    treatment_history:String,
    withdrawal_period : {
        type:String,
        enum:['completed' , 'not completed' , 'no drug']
    },
    vaccination_status:Boolean,
    deworming_status: Boolean, 
    name_of_slaughter_house:String,
    method_of_slaughter:{
        type:String,
        enum:["halal"]
    },
    carcass_weight:Number,
    qr_code:String,
    image:String,
    feeding_dry_roughage : {
        type: String,
        default : "null"
    },
    feeding_green_roughage :{
        type: String,
        default : "null"
    },
    feeding_concentrated : {
        type: String,
        default : "null"
    },
    nutritional_supplement: { //new and below
        type:Boolean
    },
    supplement_type: String,
    drinking_water_type : {
        type: String,
        enum: ["ground water" , "supply water" , 'canal water' , 'pond water' , 'unknown water source']
    },
    butcher_name : String,
    slaughter_date : String,
    chilling_facility:Boolean,
    beef_cut_packing : Boolean,
    distributor_type : {
        type:String,
        enum:["export" , 'local']
    },
    beef_transport_refrigeration:Boolean,
    date_of_carcass_supply : String,
    contact_number : String,
    harmonal_therapy: Boolean



 })

animalRecord.plugin(AutoIncrement, { inc_field: 'animal_id' });
module.exports = mongoose.model ("animal_record" , animalRecord)
