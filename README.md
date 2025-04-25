<div align='center'>
    <h1>searchtify</h1>
    <h3>a search package for spotify that requires no credentials!</h3>
</div>

<br><br>

<h2 align='center'>disclaimer</h2>

the point of this package is NOT to provide some sort of "clean" API for spotify searching.

the point of this package is to provide a wrapper for spotify's complex API protection.

<br><br>

<h2 align='center'>usage</h2>

usage is relatively simple:

```js
import Spotify from 'searchtify';

const spotify = new Spotify();

const search = await spotify.search('Blinding Lights');
console.log(search.tracksV2.items[0].item.data);
```

and its album:
```js
// uri format: spotify:album:4yP0hdKOZPNshxUOjY0cZj
const album = await spotify.getAlbum(search.tracksV2.items[0].item.data.albumOfTrack.uri);
console.log(album);
```

or, for example, an artist:

```js
// uri format: spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ
const artist = await spotify.getArtist(search.tracksV2.items[0].item.data.artists.items[0].uri);
console.log(artist);
```

`search` consists of:

- `albumsV2`
- `artists`
- `audiobooks`
- `chipOrder`
  - this is not actual data, just the order of the tabs spotify puts on their bar
- `episodes`
- `genres`
- `playlists`
- `podcasts`
- `topResultsV2`
  - has a "featured" prop with an item array as well
- `tracksV2`
- `users`

all of these consist of the following props:

1. an array named `items` with various data related to the item
2. a number named `totalCount` with the totals if you were to increase the limit

searching also allows you to pass various search parameters:

```js
const search2 = await spotify.search('Hurry Up Tomorrow', { limit: 25 });
console.log(search2.tracksV2.items);
```

*notable* parameters include:

- `limit` - number - the limit of results for each items array
- `offset` - number - the offset to start at
- `numberOfTopResults` - number - the number of items in `topResultsV2`

there are also various boolean parameters that explain themselves:

- `includeAudiobooks`
- `includeArtistHasConcertsField`
- `includePreReleases`
- `includeLocalConcertsField`
- `includeAuthors`

if there's something you need from here, enable it as part of the search parameters

you can also search for the things on the homepage:

```js
const popular = await spotify.getPopular();
console.log(popular[0].data.title.translatedBaseText + ':');
console.log(popular[0].sectionItems.items[0].content.data);
```

the structure of the response is the homepage categories and data going down.

`getPopular` accepts one argument, which is a timezone in the format of "America/New_York".

it defaults to the user's timezone.

<br><br>
<h5 align='center'>made with ❤️</h5>