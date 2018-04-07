<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>{{ another }}</h3>
    <b>Coin Type</b> {{currency.id}} <br/>
    <b>Price USD</b> {{currency.price_usd}}<br>
    <b>First Name & Last Name:</b> {{firstName}} {{lastName}}<br>
    <b>First Name & Last Name:</b> {{firstName2}} {{lastName2}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      another: 'Welcome to Your Vue.js App',
      currency: {
        id:'',
        price_usd:''
    },
      firstName: {

      },
      lastName:{

      },
      
      firstName2: {

      }, 
      lastName2:{

      }
  }
  },
  created() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
        .then((resp) => {
         this.coinInfo = resp.data[0]
         this.currency.id = resp.data[0].id;
         this.currency.price_usd = resp.data[0].price_usd;
        })
    axios.get('static/test.json')
    .then((resp) => {
        this.firstName = resp.data[0].firstName;
        this.firstName2 = resp.data[1].firstName;
        this.lastName = resp.data[0].lastName;
        this.lastName2 = resp.data[1].lastName;
    })
    
        .catch((err) => {
          console.log(err)
        })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>


