import DS from 'ember-data';

var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
	FIXTURES: [
		{
			id: "1",
			title: 'Ember.js App',
			isCompleted: false
		}, {
			id: "2",
			title: 'Leaning Ember.js TodoMVC',
			isCompleted: false
		}, {
			id: "3",
			title: 'Develop Amazing Things',
			isCompleted: true
		}
	]
});

export default Todo;
