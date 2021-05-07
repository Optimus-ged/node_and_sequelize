// Importing dependancies
import PhotoArt from "../models/photo_art_mdl";

const photoArtCtrl = {
    // Getting all article photos
    getPhotoArt : async (req, res)=>{
        let response = await PhotoArt.findAll().catch((err)=>console.error(err));
        if(response){
            return res.status(200).json({
                status : 200,
                length : response.length,
                response : response
            });
        }
    },
};

// Exporting module
export default photoArtCtrl;