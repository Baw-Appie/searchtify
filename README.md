<div align='center'>
    <h1>searchtify</h1>
    <h3>a search package for spotify that requires no credentials!</h3>
</div>

<br><br>

<h2 align='center'>usage</h2>

usage is relatively simple:

```js
import Spotify from 'searchtify';

const spotify = new Spotify();

const search = await spotify.search('House of Balloons');
console.log(search.tracksV2.items[0]);
```

or, for example, an artist:

```js
const search2 = await spotify.search('The Weeknd');
console.log(search2.artists.items[0]);
```

`search2` consists of:

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

<br><br>
<h5 align='center'>made with ❤️</h5>