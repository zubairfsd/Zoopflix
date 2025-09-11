import axios from '../../utils/Axios';
export { removemovie } from '../reducers/movieSlice';
import { loadmovie } from '../reducers/movieSlice';


export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

    const theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data,
      watchproviders: watchproviders.data.results?.IN || null,
    };

    dispatch(loadmovie(theultimatedetails));
    console.log(theultimatedetails);
  } catch (error) {
    console.error("Failed to load movie data:", error);
    // Optional: dispatch an error action if needed
  }
};
