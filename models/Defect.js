const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DefectSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
    moduleId: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    assignedTo:{
        type:String,
        required:true
    }
  
    
});

const Defect = mongoose.model('defects', DefectSchema);

module.exports = Defect;