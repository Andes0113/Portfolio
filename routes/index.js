const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects

router.get('/', (req,res)=>{
    res.render('index', {projects})
});

router.get('/about',  (req,res)=>{
    res.render('about');
});

router.get('/projects/:id', (req,res)=>{
    let id = req.params.id;
    let project = projects[id];
    res.render('project', { project });
})

module.exports = router;