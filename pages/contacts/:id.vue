<template>
  <div>
    <SingleContactBlock :existingContact="contact" :is_editing="true"/>
  </div>
</template>

<script>
  import SingleContactBlock from "../../components/SingleContactBlock";
  import config from "../../common/config";
  import axios from "axios";

  export default {
    components: {SingleContactBlock},

    data() {
      return {
        contact: {
          type: Object
        }
      }
    },

    computed: {
      id() {
        return this.$router.currentRoute.params.id;
      }
    },

    async created() {
      try {
        const response = await axios.get(config.CONTACT_API_URL+'/'+this.id);
        this.contact = response.data;
      } catch(err) {
        console.log(err);
      }
    },
  }

</script>

<style scoped>

</style>
