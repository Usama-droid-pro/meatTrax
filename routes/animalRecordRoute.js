
const express = require('express');
const router = express.Router();
const controller = require("../controllers/animalRecordController")
const upload = require('../middlewares/animal_images')


router.post("/create_record" , upload.single('image') , controller.createAnimalRecord)
router.get("/getAnimalBy_qrCode" , controller.getAnimalBy_QR)
router.get("/getAllAnimals" , controller.getAllAnimals)
router.get("/getTotalAnimalsCount" , controller.getTotalAnimalsCount)
router.delete("/deleteAnimalRecord" , controller.deleteAnimalRecord)
router.put("/updateAnimalRecord" , controller.updateAnimalRecords)
router.put("/updateAnimalImage" ,upload.single('image') , controller.updateAnimalImage)
router.get("/searchByanimal_id" , controller.searchByAnimal_id)





module.exports= router;