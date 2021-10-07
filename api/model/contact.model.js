let mongoose = require('mongoose');

const Contactschema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true
    }
  },
  /* creates createdAt and updatedAt field automatically */
  {timestamps: true}
)

module.exports = mongoose.model('Contact', Contactschema);
