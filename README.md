## starrynight:autodrop

Reset the database on a regular interval.

 **Security Warning: Only use this package for demo apps which can have their database regularly reset.**

======================================
#### Installation  

````
meteor add starrynight:autodrop
````

===================================
#### Example  

Parser takes [later.js](http://bunkat.github.io/later/) syntax.  ``dropDatabase`` functionality is added within this package.

````js
SyncedCron.add({
  name: 'Reset the database on a regular interval.',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 days');
  },
  job: function() {
    Meteor.call('dropDatabases');
  }
});
````


===================================
#### Licensing

MIT.  Use as you will.
