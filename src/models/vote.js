const mongoose = require('mongoose');
const voteSchema = new mongoose.Schema({
  candidate:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'Candidate'
  }
})

const Vote = new mongoose.model("Vote", voteSchema)
module.exports = Vote
