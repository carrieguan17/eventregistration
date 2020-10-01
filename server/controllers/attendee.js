const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find((err, attendees) => {
    if (err) {
      console.log(err, `Server get attendees err`)
      res.status(401)
      res.end()
    } else {
      console.log(`Server get attendess success`)
      res.status(201)
      res.send(attendees)
      res.end()
    }
  })
};

exports.add = (req, res) => {
  // your code here
  let newAttendee = new Attendee(req.body)
  newAttendee.save((err, result) => {
    if (err) {
      console.log(`Error adding new attendee`)
    } else {
      console.log(`New attendee added`)
    }
  })
  res.end()
};

exports.delete = (req, res) => {
  // delete request takes in the first name and last name from the client end (didn't have time to write it in the client side yet ...)
  Attendee.remove({firstName: req.body.firstName, lastName: req.body.lastName}, (err) => {
    if (err) {
      console.log(`Error deleting attendee`)
    } else {
      console.log(`Attendee deleted`)
    }
  })
  res.end()
};

exports.update = (req, res) => {
  // update request takes all info (first name, last name, email, shirt size, skill level) from client end
  let toBeUpdatedAttendee = req.body;
  Attendee.update({firstName: req.body.firstName, lastName: req.body.lastName}, toBeUpdatedAttendee, (err) => {
    if (err) {
      console.log(`Error updating attendee`)
    } else {
      console.log(`Attendee info updated`)
    }
  })
  res.end()
}
