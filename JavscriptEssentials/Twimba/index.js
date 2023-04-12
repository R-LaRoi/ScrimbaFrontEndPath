// import { v4 as uuidv4 } from "uuid";
// uuidv4();

const tweetsData = [
  {
    handle: `@TrollBot66756542 💎`,
    profilePic: `avatar.png`,
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

let tweetFeed = document.getElementById("tweet-feed");

document.addEventListener("click", function (e) {
  if (e.target.dataset.heart) {
    handleLikeClick(e.target.dataset.heart);
  }

  if (e.target.dataset.dots) {
    handleReplies(e.target.dataset.dots);
  }
  if (e.target.dataset.retweet) {
    handleRetweet(e.target.dataset.retweet);
  }
  if (e.target.id === "tweet-btn") {
    handleTweetBtn();
  }
});

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  renderFeed();
}

function handleRetweet(tweetId) {
  const retweetObj = tweetsData.filter(function (retweet) {
    return retweet.uuid === tweetId;
  })[0];

  if (retweetObj.isRetweeted) {
    retweetObj.retweets--;
  } else {
    retweetObj.retweets++;
  }
  retweetObj.isRetweeted = !retweetObj.isRetweeted;

  renderFeed();
}

function handleReplies(replyId) {
  document.getElementById(`replies-${replyId}`).classList.toggle("hidden");
}

function handleTweetBtn() {
  let tweetInput = document.getElementById("tweet-input");

  if (tweetInput.value) {
    tweetsData.unshift({
      handle: "Greatness",
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: "${ new uuid goes here}",
    });

    renderFeed();
    tweetInput.value = "";
  }
}

function getFeedHTML() {
  let HTMLfeed = ``;

  tweetsData.forEach(function (tweet) {
    let likeHeart = "";
    let iconShare = "";

    if (tweet.isLiked) {
      likeHeart = "liked";
    }

    if (tweet.isRetweeted) {
      iconShare = "retweeted";
    }

    let repliesHtml = "";

    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        repliesHtml += `<div class="tweet-reply">
            <div class="tweet-inner">
            <img src=${reply.profilePic}" class="profile-pic">
            <div>
            <p class="handle">${reply.handle}</p>
            <p class="tweet-text">${reply.tweetText}</p>
            </div>
            </div>
            </div>`;
      });
    }

    HTMLfeed += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}  class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-solid fa-comment-dots" data-dots="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart ${likeHeart}" data-heart="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
             <i class="fa-solid fa-retweet ${iconShare}" data-retweet=${tweet.uuid}></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
     <div class="hidden display" id="replies-${tweet.uuid}">
     ${repliesHtml}
</div>
</div>`;
  });
  return HTMLfeed;
}

function renderFeed() {
  tweetFeed.innerHTML = getFeedHTML();
}

renderFeed();

console.log(uuidv4);
