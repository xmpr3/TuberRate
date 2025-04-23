export const GOOGLE_API_KEY = "AIzaSyBk6tYmsG6mKOZZ9KUbmRKHUKO-QK3ic9M";

export const YOUTUBE_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" +
	GOOGLE_API_KEY;

export const VIDEO_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const COMMENTS_API =
	"https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const SEARCH_RESULT_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
