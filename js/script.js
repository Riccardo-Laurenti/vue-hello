const { createApp } = Vue;

createApp({
    data () {
        return {
            message: "Hello Vue"
        };
    }
}).mount("#title");

createApp({
  data() {
    return {
      image: 'https://www.tachigrafodigitale.net/wp-content/uploads/2022/09/logo-siak-ufficiale.png'
    };
  }
}).mount("#my_img");