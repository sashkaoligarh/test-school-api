const Lectures = require('../models/lectureModel')
const errorHandler = require('../utils/errorHandler')


module.exports.get = async function(req, res) {
    try {
        const lectures = await Lectures.find({
        })
        res.status(200).json(lectures)
    } catch(e) {
        console.log(e)
    }

}
module.exports.getById = async function(req, res) {
    try {
        const lectures = await Lectures.findById({_id: req.params.id})
        res.status(200).json(lectures)
    } catch(e) {
        console.log(e)
    }
}



module.exports.add = async function(req, res) {
    const lecture = await new Lectures({
        date: req.body.date,
        groupNumber: req.body.groupNumber,
        lecturer: req.body.lecturer,
        lecture: req.body.lecture    
    })
    
    try {
        lecture.save().then(console.log('Lecture added', req.body))
        res.status(201).json(lecture)

    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.remove = async function(req,res) {
    try {
        await Lectures.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Lecture deleted'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req,res) {
    const updated = {
        date: req.body.date,
        groupNumber: req.body.groupNumber,
        lecturer: req.body.lecturer,
        lecture: req.body.lecture  
    }
    
    try {
        const lectures = await Lectures.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json({lectures})
    } catch (e) {
        errorHandler(res, e)
    }
}