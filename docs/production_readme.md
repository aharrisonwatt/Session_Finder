# SessionFinder
[SessionFinder Live][site]
[site]: http://www.sessionfinder.online

SessionFinder is a full-stack web application.  SessionFinder uses Ruby on Rails with a PostgresSQL database for the backend.  SessionFinder utilizes Facebook's React.js design with a Flux artitecture to delivery front end content.

###Google Maps API
SessionFinder integrates a lot of functionality offered from the google maps API.  By adding a event listener to the map to triggers on idle map markers are loaded.  The current bounds of the map is parsed away and only events within the current view scope are loaded on the map.

```javascript
this.map.addListener('idle', function() {
  var bounds = this.getBounds();
  var boundsNorthEast = {
    lat: bounds.getNorthEast().lat(),
    lng: bounds.getNorthEast().lng()
  };
  var boundsSouthWest = {
    lat: bounds.getSouthWest().lat(),
    lng: bounds.getSouthWest().lng()
  }
```


### Event Filtering
The event items show are also filtered based on a simple tag parameter showcased in SessionFinder with 'Game' tag.  The tags are dynamically loaded based on all Tags currently stored in the database leaving the artitecture of the system flexable.  Since the Map and rendered items are located in separate components they both communicate the current state of the filters they are applying to a third component.  This component is responsible for determining what content is rendered in both components ensuring items displayed in both locations are in sync.

###Database
The database tracks all events(called happenings) in a single table.  All the images for events is abstracted away into a second table to easily allow the database to accommodate multiple images per event.  The tags for event event are stored in a joins table connecting each event tags.  This keeps the tagging system flexable for future growth and allows for easily editing of available tags.  Setting up a association between events and their tags allows for easy filtering of events with a single query reducing how often we have to hit our database.

```Ruby
def self.has_tag(tagIds)
  tagIds = tagIds.map do |tag|
    tag.to_i
  end
  self.joins(:taggings).where(taggings: {tag_id: tagIds})
end
```

##Future Direction
SessionFinder was designed with a simple principle in mind, keep the artitecture flexable for growth.  Design features one at a time and then insure the UI and UX exists for those features to be used.  It is important for a site to not only have good functionality but also that users stay long enough and feel good about using that functionality.  With that said here are the features I plan to implement in the future.

### Filter by Date
Allowing users to specify the date(s) and time events are happening.  This will increase not only the available ways that events can be filtered but allow for both reoccurring events and one time events that are removed once they are not longer relevant.
### Manage Events
Events are already tied to a user but need to be built out to allow for users to Edit/edit/view all the events they have created.  By implementing a user profile that renders all these events along with options for them to edit/destroy these events.
### Event Interaction
By logging in users can RSVP for events.  This information will be stored along with the event to not only be rendered on each event show page but allow users to track who is currently attending events they have created but also which events they are planning to attend.
