<template>
  <section class="section">
    <h1>Post a dish</h1>
    <form @submit.prevent="postDish(dishName, dishInfo, dishType)">
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
          <textarea class="textarea" placeholder="Describe the dish" v-model="dishInfo"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Type</label>
        <div class="control">
          <div class="select">
            <select v-model="dishType">
              <option disabled selected value>Select one please</option>
              <option>First</option>
              <option>Second</option>
              <option>Both</option>
              <option>Desert</option>
            </select>
          </div>
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
        dishInfo: '',
        dishType: ''
      }
    },
    methods: {
      succMsg () {
        this.$toastr('success', 'Your dish has benn added', 'Congratulatios!')
      },
      errMsg () {
        this.$toastr('error', 'An error ocurred', 'Atention!')
      },
      infoMsg () {
        this.$toastr('info', 'You miss some filds', 'Atention!')
      },
      postDish (dishName, dishInfo, dishType) {
        var that = this
        if (dishName && dishInfo && dishType) {
          firebase.database.ref('dish').push({
            'dishName': dishName,
            'dishInfo': dishInfo,
            'dishType': dishType,
            'created_at': new Date().getTime()
          })
            .then(function (data) {
              that.succMsg()
              that.dishName = that.dishInfo = that.dishType = ''
            })
            .catch(function (data) {
              that.errMsg()
            })
        } else {
          that.infoMsg()
        }
      }
    }
  }
</script>

<style scoped>

</style>