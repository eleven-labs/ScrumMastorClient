define([
    'jquery',
    'jqueryui',
    'underscore',
    'backbone',
    'taskModel',
    'taskCollection',
    'taskView',
    'text!templates/tasks/index.html'
], function($, jqueryui, _, Backbone, TaskModel, TasksCollection, TaskView, TasksTemplate) {

    var TasksView = Backbone.View.extend({
        el: $("#content"),

        render: function() {
            this.$el.html(TasksTemplate);

            var tasksCollection = new TasksCollection();
            tasksCollection.fetch({ 
              reset: true , 
              success: function(collection, response, option) {
                  console.log(collection);
                  collection.sort();
                  collection.each(function(model, index){
                    var view = new TaskView({model : model, collection: collection});
                    
                    if (model.getStatus() == 0) {
                      $("#tasks-list-todo").append(view.render().el);
                    }

                    if (model.getStatus() == 1) {
                      $("#tasks-list-current").append(view.render().el);
                    }

                    if (model.getStatus() == 2) {
                      $("#tasks-list-done").append(view.render().el);
                    }
                  });

                  $( "#tasks-list-todo" ).sortable({
                    placeholder: "ui-state-highlight",
                    connectWith: ".connectedSortable",
		                update: function(event, ui) {
                      var model = collection.get(ui.item.data('id'));
                      var start_priority = model.getPriority();
                      console.log(start_priority);
		                  console.log(ui.item.index());

                      if (start_priority > ui.item.index()) {
                        for (var i = start_priority - 1; i >=  ui.item.index(); i--) {
                          var model = collection.findWhere({priority: i, status: 0});
                          if (model != undefined) {
			                    console.log(model.getTitle());
                          model.setPriority(model.getPriority() + 1);
                          model.save();
                          }
                        }
                      } else {
                        for (var i = start_priority + 1; i <=  ui.item.index(); i++) {
                         var model = collection.findWhere({priority: i, status: 0});
                         if (model != undefined) {
                          model.setPriority(model.getPriority() - 1);
                          model.save();
                         }
                        }
                      }

                      var model = collection.get(ui.item.data('id'));
                      model.setStatus(0);
                      model.setPriority(ui.item.index());
                      model.save();
                      console.log('update: '+ui.item.index())
                    },
                  }).disableSelection();

                $("#tasks-list-current").sortable({
                  placeholder: "ui-state-highlight",
                  connectWith: ".connectedSortable",
                  update: function(event, ui) {
                    var model = collection.get(ui.item.data('id'));
                      var start_priority = model.getPriority();
                      console.log(start_priority);
                      console.log(ui.item.index());

                      if (start_priority > ui.item.index()) {
                        for (var i = start_priority - 1; i >=  ui.item.index(); i--) {
                          var model = collection.findWhere({priority: i, status: 1});
                          if (model != undefined) {
                            console.log(model.getTitle());
                            model.setPriority(model.getPriority() + 1);
                            model.save();
                          }
                        }
                      } else {
                        for (var i = start_priority + 1; i <=  ui.item.index(); i++) {
                         var model = collection.findWhere({priority: i, status: 1});
                         if (model != undefined) {
                          model.setPriority(model.getPriority() - 1);
                          model.save();
                        }
                        }
                      }

                      var model = collection.get(ui.item.data('id'));
                      model.setStatus(1);
                      model.setPriority(ui.item.index());
                      model.save();
                      console.log('update: '+ui.item.index())
                  },
                }).disableSelection();


                $("#tasks-list-done").sortable({
                  placeholder: "ui-state-highlight",
                  connectWith: ".connectedSortable",
                  update: function(event, ui) {
                    var model = collection.get(ui.item.data('id'));
                      var start_priority = model.getPriority();
                      console.log(start_priority);
                      console.log(ui.item.index());

                      if (start_priority > ui.item.index()) {
                        for (var i = start_priority - 1; i >=  ui.item.index(); i--) {
                          var model = collection.findWhere({priority: i, status: 2});
                          if (model != undefined) {
                            console.log(model.getTitle());
                            model.setPriority(model.getPriority() + 1);
                            model.save();
                          }
                        }
                      } else {
                        for (var i = start_priority + 1; i <=  ui.item.index(); i++) {
                         var model = collection.findWhere({priority: i, status: 2});
                         if (model != undefined) {
                          model.setPriority(model.getPriority() - 1);
                          model.save();
                         }
                        }
                      }

                      var model = collection.get(ui.item.data('id'));
                      model.setStatus(2);
                      model.setPriority(ui.item.index());
                      model.save();
                      console.log('update: '+ui.item.index())
                  },
                }).disableSelection();
              } 
            });
        },

        close: function() {
            // nothing
        }
    });

    return TasksView;
});
