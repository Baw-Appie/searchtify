import Spotify from './spotify.js';

const spotify = new Spotify();

const search = await spotify.search('House of Balloons');
console.log(search.tracksV2.items[0]);

const search2 = await spotify.search('The Weeknd');
console.log(search2.artists.items[0]);