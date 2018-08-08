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
		name: 'Brenda',
		link: `https://random.dog/63aec50b-28d8-46b3-8d6c-b8357165ed55.jpg`
	},
	methods: {
		ageMultiply: function(num) {
			return this.age * num;
		},
		randomNumber: function() {
			return Math.random();
		}
	}
});
