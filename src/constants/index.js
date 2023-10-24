// referencias de valores fijos provenientes del api
const cors_anywhere = "http://cors-anywhere.herokuapp.com/";
const base_url = "https://api.musixmatch.com/ws/1.1/";
const chart_tracks_get = "chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=1";
const api_key = "&api_key=f14634ab1a3c811edf337ce72fbb5a8d";
const track_search = "track.search?q_track=";
const track_search_params = "&page=1&page_size=10&f_has_lyrics=1&s_track_rating=desc";
const track_lyrics_get = "track.lyrics.get?commontrack_id=";
const track_get= "track.get?commontrack_id=";

// funciones que van a envolver las apis
export const chartTracksGet = () => `${cors_anywhere}${base_url}${chart_tracks_get}${api_key}`;
export const trackSearch = q_track => `${cors_anywhere}${base_url}${track_search}${q_track}${track_search_params}${api_key}`;
export const trackLyricsGet = commontrack_id => `${cors_anywhere}${base_url}${track_lyrics_get}${commontrack_id}${api_key}`;
export const trackGet = commontrack_id => `${cors_anywhere}${base_url}${track_get}${commontrack_id}${api_key}`;
