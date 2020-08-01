const config = require('./config');
const twitter = require('twitter-lite');
const client = new twitter(config);

client.get('users/show', { screen_name: 'ahmed_mahallawy' }).then(result => {
    var user = result;
    var latestTweet = user.status;

    client.post('favorites/create', { id: latestTweet.id_str }).then(result => {
        console.log('Liked tweet successfully!');
    }).catch(console.error);

    client.post('statuses/retweet', { id: latestTweet.id_str }).then(result => {
        console.log('Retweeted successfully!');
    }).catch(console.error);

    client.post('friendships/create', { screen_name: user.screen_name }).then(result => {
        console.log('Followed ' + user.screen_name + ' successfully!');
    }).catch(console.error);
}).catch(console.error);