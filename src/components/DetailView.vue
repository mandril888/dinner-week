<template>
  <section class="section">
    <h2>List of Dishes</h2>
    <ul>
      <li v-for="dish in allDishes">
        {{ dish.dishName }} - {{ dish.dishInfo }}
        <a @click="removeDish(dish['.key'])">
          <span class="icon has-text-danger">
            <i class="fa fa-ban"></i>
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
  import firebase from '../../service/firebase'

  export default {
    data () {
      return {
        allDishes: this.$root.dish
      }
    },
    methods: {
      succMsg () {
        this.$toastr('success', 'Your dish has benn removed', 'Congratulatios!')
      },
      removeDish (id) {
        var that = this
        firebase.database.ref('dish/' + id).remove()
          .then(function (data) {
            that.succMsg()
          })
      }
    }
  }
</script>
<style scoped>

</style>