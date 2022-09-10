const Tour = require('./../models/tourModel');



exports.getAllTours = async (req, res) => {

 const allTours = await Tour.find();

    res.status(200).json({status: "succsess", 
    results: allTours.length,
      data: {
        tours: allTours
    } 
    });
}

exports.getTour = async (req, res) => { 

    const tour = await Tour.findById(req.params.id);

    res.status(200).json({status: "succsess", 
      data: {
        tour
        } 
    });
}

exports.createTour = async (req, res) => {  
   try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({status: "succsess", data: {
        tour: newTour
    }})
    } catch (err) { 
        res.status(400).json({status: "fail", message: err } )
    }
}


 
