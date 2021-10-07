<template>
  <div>
    <b-form ref="form">
      <b-form-group
        label="First Name:"
      >
        <b-form-input
          v-model="contact.first_name"
          placeholder="Please Enter First Name"
          maxlength="50"
          required
          id="first_name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Last Name:"
      >
        <b-form-input
          v-model="contact.last_name"
          placeholder="Please Enter Last Name"
          maxlength="50"
          required
          id="last_name"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <p v-if="!is_email_validated">
          <b>Please enter validated email address:</b>
        </p>
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="contact.email" required>
      </div>
      <div class="col-md-6">
        <label for="phone_number" class="form-label">Phone Number</label>
        <input type="number" class="form-control" id="phone_number" v-model="contact.phone_number" required>
      </div>
      <div class="col-12">
        <button v-if="!existingContact" class="btn btn-primary" @click="validateSubmit">Create Contact</button>
      </div>
    </form>
  </div>
</template>

<script>
  import config from '~/common/config';
  import axios from 'axios';

    export default {
      name: "SingleContactBlock",

      props:{
        existingContact: {
          type: Object,
          default: null
        }
      },

      data() {
        return {
          contact: {
            first_name: '',
            last_name: '',
            email:'',
            phone_number:'',
            image:'',
          },
          is_email_validated: false,
        };
      },

      mounted() {
        if (this.existingContact) {
          this.contact = JSON.parse(JSON.stringify(this.existingContact ?? null));
        }
      },

      methods: {
        validateSubmit() {
          // Check first and last names are non empty and validate email
          if ((!this.$refs.form.checkValidity() || !(this.validEmail(this.contact.email)))) {
            this.$refs.form.reportValidity();
            return;
          } else {
            this.submitData();
          }
        },

        validEmail(email) {
          //Validate the email
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.is_email_validated = re.test(email);
          return re.test(email);
        },

        submitData() {
          //Connect with the endpoint and send the data
          axios.post(config.CONTACT_API_URL, this.contact)
            .then(res => {
              if (res.status === 200) {
                //this.alert("Created a contact successfully!");
                this.$router.push('/');
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      },
    }
</script>

<style scoped>

</style>
