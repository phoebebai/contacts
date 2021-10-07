<template>
  <div>
    <h4>Contact List</h4>
    <ul id="contacts_list">
      <li v-for="contact in contacts" :key="contact._id">
        <NuxtLink :to="'/contacts/' + contact._id">{{contact.first_name + contact.last_name}}</NuxtLink>
        <button type="button" class="btn btn-danger" @click="deleteContact(contact._id)">Delete</button>
      </li>
    </ul>
    <NuxtLink :to="'/contacts'" type="button">Create a contact</NuxtLink>
  </div>
</template>

<script>
  import axios from 'axios';
  import config from "../common/config";

  export default {
    data() {
      return {
        contacts: [],
      }
    },

    async created() {
      try {
        const response = await axios.get(config.CONTACT_API_URL);
        this.contacts = response.data;
      } catch(err) {
        console.log(err);
      }
    },

    methods: {
      deleteContact(contact_id) {
        axios.delete(config.CONTACT_API_URL + '/' + contact_id)
          .catch(err => {
            console.log("Deleted Unsuccessfully");
          });
      }
    }
  }

</script>
