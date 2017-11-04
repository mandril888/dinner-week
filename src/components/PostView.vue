<template>
  <section class="section">
    <h1>Post a dish</h1>
    <form @submit.prevent="postDish(dishName, dishInfo)">
      <div class="field">
        <label class="label">Dish name</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Dish name" v-model="dishName">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Dish info</label>
        <div class="control">
          <textarea class="textarea" placeholder="Describes the dish" v-model="dishInfo"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">POST DISH</button>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
  import firebase from '../../service/firebase'
  export default {
    data () {
      return {
        dishName: '',
        dishInfo: ''
      }
    },
    methods: {
      postDish (a, b) {
        if (a && b) {
          firebase.database.ref('dish').push({
            'dishName': a,
            'dishInfo': b,
            'created_at': new Date().getTime()
          })
            .then(this.$router.push('/'))
        }
      }
    }
  }
</script>
<style scoped>

</style>