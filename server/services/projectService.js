const projectModel = require("../models/project")

exports.getAllProjects = async ()=>{
    return await projectModel.find()
}
