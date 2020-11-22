/* 
  -- IMPORT command -- 
  After a package has been installed with NPM
  using `npm i packageName`, we can use the import command
  to make the functions of that module available in our code

  In this case, squiggly brackets indicate that we only want
  to use one of the functions from the Luxon package, rather then
  the whole thing. Importing only the functions neededs help 
  keep file size down.

*/
import { DateTime } from 'luxon';

/* 
  --- Time Zone Names ----
  See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  Use the values in the "TZ database name" column
*/

/*
  Create an object with each timezone you will be using.
  You don't have to do this, but it makes your code much easier
  to read and manage.

  The all-caps variable names is not required but
  it's a common convention which indicates that the
  variables are global constants -- i.e: they are values
  which will never change while the application is running
  and can be used for referencing important bits of content
  (kind of like a glossary)
*/

const ZONES = {
  MELBOURNE: 'Australia/Melbourne',
  ICELAND: 'Iceland',
  BRUSSELS: 'Europe/Brussels',
};

// create a dateTime object for each timezone
// (note the ZONES.X used here, referencing our timezone object)
const dtMelb = DateTime.local().setZone(ZONES.MELBOURNE);
const dtIceland = DateTime.local().setZone(ZONES.ICELAND);
const dtBrussels = DateTime.local().setZone(ZONES.BRUSSELS);

console.log('The time in Melbourne is ' + dtMelb.hour + ':' + dtMelb.minute);
console.log('The time in Iceland is ' + dtIceland.hour + ':' + dtIceland.minute);
console.log('The time in Brussels is ' + dtBrussels.hour + ':' + dtBrussels.minute);

/* 
---- Things to do next ----
• Put the time values into the DOM elements rather than logging to console

• The code above will run once when the JS first loads and that's it. 
The time won't be kept up to date unless the user refreshes their browser.

To fix that, you're going to need to do two things:

1.  Take the code that works out the current time, 
and the code that updates the HTML,
and put it into a function. This will let you call that code whenever
you want without having to reload the page
See the functions serction at https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/#functions
2.  Use setInterval to create a timer which will run your function
every x seconds.
See setInterval at https://javascript.info/settimeout-setinterval

(You can also use setTimeout rather than setInterval. The difference is subtle,
  but I'll let you suss that one out if you feel enthusiastic!)
  
---- Bonus Stuff ----
The "hour" property used above returns a value formatted in 24-hour time.
Can you work out how to turn that into a 1-12 am/pm format instead?

---- More Bonus Stuff ----
If you start to feel kinda cocky, you might want to play around with
functions, objectd and loops to try and find a more effeicient way of 
getting the data for each timezone.

In psuedo-code, the principle is:

1.  Have an array of objects, with each object containing 
    all the data you need for each time zone
2.  Write a function which loops through the array and generates a 
    timezone message for each item

The goal in this case is to seperate the data (your list of zones) from
the logic (the code which gets an hours:minutes string for any given zone).

If done right, you could add or remove any number of zones to your list without
needing to write extra code to specifically format the newly added data.

Have a look at https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2
and pay particular attention to the "OBJECTS for...in" section near the end.


*/
