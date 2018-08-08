// new Vue({
// 	el: '#app',
//   data: {
//   	title: 'Hello World!',
//     link: `http://google.com`,
//     finishedLink: `<a href="http://google.com">Google</a>`
//   },
//   methods: {
//   	changeTitle: function(event) {
//     	this.title = event.target.value;
//     },
//     sayHello: function() {
//       this.title = 'hello';
//       return this.title;
//     }
//   }
// });

new Vue({
	el: '#exercise',
	data: {
		age: 33,
		name: 'Brenda'
	},
	methods: {
		ageMultiply: function(num) {
			return this.age * num;
		}
	}
});
