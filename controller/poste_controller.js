import Poste from "../models/poste_model";

const posteController = {
    // Handling get all postes from database
    getPostes = async(req, res)=>{
        let response = await Poste.findAll().catch(err =>{
            res.status(500).json({
                status : 500,
                error : {
                    message : err.message
                }
            });
        });
        res.status(200).json({
            status : 200,
            length : response.length,
            message : "All postes success getted",
            response : response
        });
    },
};

export default posteController;