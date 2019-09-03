require('../db/mongoose.js')
const Candidate = require('../models/candidate')
const Vote = require('../models/vote')
const express = require('express')
const router = new express.Router()

router.get("/candidates", async(req,res)=>{
  try {
    const candidates = await Candidate.find({})

    // candidates.length == 0 && res.status(204).send()
    res.json({candidates})
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post("/candidates/create", (req,res)=>{
  // try {
  //   const candidate = new Candidate(req.body)
  //   await candidate.save()
  //   res.send(candidate)
  // } catch (e) {
  //   res.status(500).send(e)
  // }
const candidate = new Candidate(req.body)
candidate.save().then(()=>{
  res.send(candidate)
}).catch(()=>{
  res.status(500).send()
})

})

router.post("/vote/:candidate_id", async(req,res)=>{
  let candidate = req.params.candidate_id;
  try {
      let vote = new Vote({candidate})
      await vote.save()
      res.send(vote)
  } catch (e) {
    res.status(500).send(e)
  }
})


router.get("/results", async(req,res)=>{
  try {
    const candidates = await Candidate.find({})
    const votes = await Vote.find({})

    // (candidates.length == 0 ||votes.length == 0 ) && res.status(204).send()

    res.send({candidates, votes})
  } catch (e) {
    res.status(500).send()
  }
})
module.exports = router
