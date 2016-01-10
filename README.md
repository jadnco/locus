# Car Spotting iOS/Web App
January 7, 2016

An iOS and/or web that is essentially Instagram dedicated for car spotters.

Audience is of all ages, anyone can be a car spotter.

#### Name Ideas
- Spot – Good short name, but my be too similar to Spotify.
- Locus – technical; a particular position, point, or place.

#### Problem

#### Solution

#### Business Models
- Free app/service – revenue would come in through sponsored posts/ads. I think this is particularly a good idea because of the niche market. Car spotters would likely have their own car projects, so services like car detailing, parts, photography equipment etc. could potentially get a good amount of traction.
  
  *This car is available at your local dealer* could be shown on posts, from sponsoring dealerships. Book a test drive, etc.

- One time paid app – The iOS app would have a one time purchase fee, something like $2.49. This might be a good idea, however I don’t know if people would be willing to pay a fee when they could use something like Instagram for free. One plus is that a fee may increase the quality of posts and it might feel more like an exclusive ‘club’.

#### Features
- Places the taken image on a map so people could see the exact location of where the car was.
- Tap the license plate, the app would automatically blur/censor the license plate.
- Car selector. After taking an image, the user could manually select the car make, year etc. This would allow categories to be made. e.g. If someone wanted to see pictures of a 2012 Tesla Model S P85D, they would input that and results would be given back. This would be the ‘title’ of the image, use could also add their own comments.

#### Technology
- React Native
- Potential APIs
  - [Edmunds Vehicle API](http://developer.edmunds.com/api-documentation/vehicle/index.html)
  - [CarQuery API](http://www.carqueryapi.com)

#### User Onboarding
- Ask for favourite car types/brands, which would be used to help recommend following certain accounts.

## Views

#### Home Feed

#### Photo/Post/Spot
- Title displaying car info, make etc. eg *2016 Jaguar F-Type R AWD*
- Photo itself
- Poster's comment with a *view more/ellipsis* that shows more detailed information of the car; horsepower, engine, gearbox etc.
- Location of shot, which would go to a map view when tapped on.

#### User Profile
- Shows name, location, bio, avatar etc.
- Most photographed car company
- What car they own

#### Feed
- Shows recent posts by all the users that are followed.

#### Camera
- Interface that takes the photo/videos
- Includes blur feature for license plates.

#### Notifications

#### Search

## Development

### Models

#### User

`firstName`
  Type: String
  Example: *John*

`lastName`
  Type: String
  Example: *Smith*

`fullName`
  Concatenation of the `firstName` and `lastName`.
    
  Type: String
  Example: *John Smith*

`handle`
  Username and unique identifier with minimum characters of three.

  Type: String
  Example: *jadnco*

`joinDate`
  When the user first created their account.

  Type: Date
  Example: *2015-12-29T01:46:49.453Z*

`email`
  Email address used to sign up.
