const projectService = require("../services/projectService")

exports.getProjects = async (req,res,next)=>{
    try{
        let projects = await projectService.getAllProjects();
        return res.status(200).json(projects)
    }
    catch(err){
        return res.status(500).json(err);
    }
}
