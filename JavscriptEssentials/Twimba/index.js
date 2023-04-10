const tweetsData = [
  {
    handle: `@TrollBot66756542 💎`,
    profilePic: `images/troll.jpg`,
    likes: 27,
    retweets: 10,
    tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
    replies: [],
    isLiked: false,
    isRetweeted: false,
    uuid: "4b161eee-c0f5-4545-9c4b-8562944223ee",
  },
  {
    handle: `@Elon ✅`,
    profilePic: `images/musk.png`,
    likes: 6500,
    retweets: 234,
    tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
    replies: [
      {
        handle: `@TomCruise ✅`,
        profilePic: `images/tcruise.png`,
        tweetText: `Yes! Sign me up! 😎🛩`,
      },
      {
        handle: `@ChuckNorris ✅`,
        profilePic: `images/chucknorris.jpeg`,
        tweetText: `I went last year😴`,
      },
    ],
    isLiked: false,
    isRetweeted: false,
    uuid: "3c23454ee-c0f5-9g9g-9c4b-77835tgs2",
  },
  {
    handle: `@NoobCoder12`,
    profilePic: `images/flower.png`,
    likes: 10,
    retweets: 3,
    tweetText: `Are you a coder if you only know HTML?`,
    replies: [
      {
        handle: `@StackOverflower ☣️`,
        profilePic: `images/overflow.png`,
        tweetText: `No. Onviosuly not. Go get a job in McDonald's.`,
      },
      {
        handle: `@YummyCoder64`,
        profilePic: `images/love.png`,
        tweetText: `You are wonderful just as you are! ❤️`,
      },
    ],
    isLiked: false,
    isRetweeted: false,
    uuid: "8hy671sff-c0f5-4545-9c4b-1237gyys45",
  },
];

let tweetBtn = document.getElementById("tweet-btn");
let tweetInput = document.getElementById("tweet-input");
let tweetFeed = document.getElementById("tweet-feed");

tweetBtn.addEventListener("click", () => {
  console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.heart) {
    handleLikeClick(e.target.dataset.heart);
  }
  if (e.target.dataset.dots) {
    console.log(e.target.dataset.dots);
  }
  if (e.target.dataset.retweet) {
    console.log(e.target.dataset.retweet);
  }
});

function handleLikeClick(tweetId) {
  console.log(tweetId);
}

function getFeedHTML() {
  let HTMLfeed = ``;
  tweetsData.forEach(function (tweet) {
    HTMLfeed += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-solid fa-comment-dots" data-dots="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-heart="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
             <i class="fa-solid fa-retweet" data-retweet=${tweet.uuid}></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`;
  });
  return HTMLfeed;
}

function renderFeed() {
  tweetFeed.innerHTML = getFeedHTML();
}

renderFeed();
