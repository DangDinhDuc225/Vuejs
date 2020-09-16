var vueInstance = new Vue({
    el: "#app",
    //Ràng buộc dữ liệu
    data: {
        title:'Dien thoai Samsung',
        url:'https://www.thegioididong.com/dtdd/samsung-galaxy-note-10-plus',
        target: '_blank',
        check: true,
        price: 10000,
    },
    methods: {
        formatPrice() {
            //code js-numberformat
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
})

new Vue({
    el: '#example-3',
    methods: {
        warn: function (message, event) {
          // now we have access to the native event
          if (event) {
            event.preventDefault()
          }
          alert(message)
        }
      }
  })