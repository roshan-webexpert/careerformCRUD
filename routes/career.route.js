const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Career = require('../models/careerForm.model');

// route        GET /career
// description  Register to career
// access       Public
router.get('/', (req, res) => {
    Career.find((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    Career.findById(id, (err, career) => {
        res.json(career);
    });
});

// route        POST /career
// description  Register to career
// access       Public

//another way of code for insert
// router.post('/', (req, res) => {
//     const career = new Career(req.body);
//     career.save((err, data) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ data: "Form Added Successfully" });
//         }
//     });

// });

router.post('/add', (req, res) => {
    const career = new Career(req.body);
    career.save()
        .then(career => {
            res.status(200).json({ 'career': 'Form Added Successfully' });
        })
        .catch(err => {
            res.status(400).send('Form added failed');
        });
});


router.post('/update/:id', (req, res) => {
    Career.findById(req.params.id, (err, career) => {
        if (!career) {
            res.status(404).send('Data not found');
        }
        else {
            career.name = req.body.name;
            career.mobile = req.body.mobile;
            career.email = req.body.email;
            career.position = req.body.position;
            career.resume = req.body.resume;
            career.selected = req.body.selected;
            career.rejected = req.body.rejected;

            career.save()
                .then(career => {
                    res.json('Career updated Successfully');
                })
                .catch(err => {
                    res.status(400).send('Update not possible');
                });
        }
    });
});


// route        DELETE /career
// description  Delete a career
// access       Public
//another way of code for delete
// router.post('/', (req, res) => {
//     Career.remove({_id: req.body.id}, (err) => {
//         if(err){
//             res.send(err);
//         }
//         else {
//             res.send({data:"Career deleted Successfully"});
//         }
//     });
// });

router.delete('/delete/:id', (req, res, next) => {
    Career.deleteOne({ _id: req.params.id })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Form Deleted Successfully'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


module.exports = router;