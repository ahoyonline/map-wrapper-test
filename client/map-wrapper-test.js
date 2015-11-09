var initialMapData = {
  "polylines": [{
    "points": [
      [
        51.478743593503175, -0.051326751708984375
      ],
      [
        51.48408885790311,
        0.028324127197265625
      ],
      [
        51.49969344453868, -0.041027069091796875
      ]
    ],
    "editedBy": -1
  }],
  "markers": [{
    "point": [
      51.4669818064563, -0.045146942138671875
    ]
  }, {
    "point": [
      51.466874867210024,
      0.009784698486328125, 1
    ]
  }, {
    "point": [
      51.49883853701273,
      0.010986328125
    ]
  }]
};


var mapDataReactive = new ReactiveVar({
  polylines: [],
  markers: []
});

Template.map_adapter.helpers({
  mapData: function() {
    return mapDataReactive.get();
  },
  options: function() {
    return {
    };
  },
  listener: function() {
    return function(newMapData, type, index) {
      mapDataReactive.set(newMapData);
    };
  }
});

Template.map_adapter.events({
  'click .add_new_line': function() {
    var mapData = mapDataReactive.get();
    mapData.polylines.push({
      points: []
    });
    mapDataReactive.set(mapData);
  },
  'click .add_marker': function() {
    var mapData = mapDataReactive.get();
    mapData.markers.push({});
    mapDataReactive.set(mapData);
  },
  'click .load_objects': function() {
    mapDataReactive.set(initialMapData);
  },
  'click .clear_all': function() {
    mapDataReactive.set({
      polylines: [],
      markers: []
    });
  }
});
Template.map_data_viewer.helpers({
  mapData: function() {
    return JSON.stringify(mapDataReactive.get(), undefined, 2);
  }
});
Template.foo.helpers({
  user: Meteor.userId
});