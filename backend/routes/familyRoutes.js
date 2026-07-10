import express from "express";
import Family from "../models/Family.js";

const router = express.Router();


// ======================
// ADD MEMBER
// ======================
router.post("/", async (req, res) => {
    try {

        const { name, age, gender, relation, phone } = req.body;


        // Validation
        if (!name || !age || !gender || !relation || !phone) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }


        // Check duplicate phone number
        const existingMember = await Family.findOne({ phone });


        if (existingMember) {
            return res.status(400).json({
                message: "Family member already exists."
            });
        }


        const member = new Family({

            name,
            age,
            gender,
            relation,
            phone

        });


        await member.save();


        res.status(201).json({

            message: "Family member added successfully.",
            member

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }
});




// ======================
// GET ALL MEMBERS
// ======================
router.get("/", async (req, res) => {

    try {

        const members = await Family.find();


        res.status(200).json(members);


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});




// ======================
// GET SINGLE MEMBER
// ======================
router.get("/:id", async (req, res) => {

    try {

        const member = await Family.findById(req.params.id);


        if (!member) {

            return res.status(404).json({

                message: "Family member not found."

            });

        }


        res.status(200).json(member);



    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});




// ======================
// UPDATE MEMBER
// ======================
router.put("/:id", async (req, res) => {

    try {


        const { name, age, gender, relation, phone } = req.body;



        // Validation
        if (!name || !age || !gender || !relation || !phone) {

            return res.status(400).json({

                message: "Please fill all fields."

            });

        }



        // Check duplicate phone number
        const duplicate = await Family.findOne({

            phone,

            _id: { $ne: req.params.id }

        });



        if (duplicate) {

            return res.status(400).json({

                message: "Phone number already exists."

            });

        }




        const updated = await Family.findByIdAndUpdate(

            req.params.id,

            {

                name,
                age,
                gender,
                relation,
                phone

            },

            {
                new:true
            }

        );




        if (!updated) {

            return res.status(404).json({

                message:"Family member not found."

            });

        }




        res.status(200).json({

            message:"Family member updated successfully.",

            updated

        });



    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }

});




// ======================
// DELETE MEMBER
// ======================
router.delete("/:id", async (req,res)=>{

    try{


        const deleted = await Family.findByIdAndDelete(req.params.id);



        if(!deleted){

            return res.status(404).json({

                message:"Family member not found."

            });

        }



        res.status(200).json({

            message:"Family member deleted successfully."

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



export default router;