<template>
  <section class="section">
    <h2>List of Dishes</h2>
    <ul>
      <li class="dishDetail" v-for="dish in allDishes">
        <div>
          <p><b>{{ dish.dishName }}</b> (<i>{{ dish.dishType }}</i>)</p>
          <a @click="removeDish(dish['.key'])">x</a>
        </div>
        <p>{{ dish.dishInfo }}</p>
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

<style lang="scss" scoped>

  ul {
    li.dishDetail {
      border-radius: 3px;
      padding: 10px;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
      div {
        display: flex;
        justify-content: space-between;
        p {
          float: left;
          margin-bottom: 0;
          b {
              text-transform: uppercase;
          }
        }
        a {
          float: right;
          color: white;
          border: 1px solid grey;
          background: #5a5a5a;
          border-radius: 50%;
          text-align: center;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
          width: 15px;
          height: 15px;
          line-height: 12px;
          font-size: 11px;
        }
      }
      p {
        margin-bottom: 0;
      }
    }
  }
</style>