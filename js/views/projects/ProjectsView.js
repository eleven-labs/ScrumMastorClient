define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel',
  'collections/projects/ProjectsCollection',
  'text!templates/projects/projectsTemplate.html'
], function($, _, Backbone, ProjectModel, ProjectsCollection, projectsTemplate){

  var ProjectsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){


    }
  });

  return ProjectsView;
});
