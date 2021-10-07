import Contact from '../model/contact.model';

exports.contact_create = (req, res) => {
  const contact = new Contact({
    ...req.body
  });
  contact.save();
  res.status(200).json(contact);
}

exports.contact_update = (req, res) => {
  Contact.findOneAndUpdate(
    {"_id": req.params.id},
    { $set: req.body },
    {new: true})
    .then( results => {
      res.status(200).json(results);
    })
    .catch(err =>{
      console.log(err);
    });
}

exports.contact_get = (req, res) => {
  Contact.find()
    .then( results => {
      res.status(200).json(results);
    })
    .catch(err =>{
      console.log(err);
    });
}


exports.contact_getSingle = (req, res) => {
  Contact.findById(
    { "_id": req.params.id }
    )
    .then( results => {
      res.status(200).json(results);
    })
    .catch(err =>{
      console.log(err);
    });
}

exports.contact_delete = (req, res) => {
  Contact.findOneAndDelete(
    { "_id": req.params.id },
  )
    .then( results => {
      res.status(200).json(results);
    })
    .catch(err =>{
      console.log(err);
    });
}

