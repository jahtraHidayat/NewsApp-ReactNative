// IMPORT ALL CONSTANTA VARIABLE OR PARAMETER FOR API
import {
  articles_url,
  country_code,
  // category,
  _api_key,
} from '../config/rest_consfig';

// craete async function for getArticles
export async function getArticles(category = 'general') {
  try {
    // add ORIGINAL URL for API
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );

    // fetching to json Data
    let result = await articles.json();
    articles = null;

    // return for API
    return result.articles;
  } catch (error) {
    throw error;
  }
}
