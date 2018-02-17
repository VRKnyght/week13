const friends = [
  {
    name: 'The Doctor',
    photo: 'photo/url',
    scores: [1,2,3,4,5]
  },
  {
    name: 'The unStable',
    photo: 'photo/url',
    scores: [4,2,2,4,1]
  }  
]

newFriend = {
  name: 'Crusher',
  photo: '/asdf/asdf',
  scores: [3,5,2,7,1]
}

// convert newFriends scores to numbers
newFriend.scores = newFriend.scores.map(parseFloat);

// get the friend's scores alone in an array
const friendsScores = friends.map(function(friend) {
  return friend.scores
})

const scoreDifferencesArray = [];

friendsScores.forEach(function(singleFriendScores) {
  const differences = [];
  
  singleFriendScores.forEach(function(score, index) {
    
    // calculate difference between current friend
    // and new friends scores at the same index
    const difference = newFriend.scores[index] - score;
    
    // push the absolute value of that difference
    differences.push(Math.abs(difference));
  })
  differenceSum = differences.reduce(function(sum, score) {
    return sum + score
  })
  scoreDifferencesArray.push(differenceSum);
})

console.log(scoreDifferencesArray)
// scoreDifferencesArray is now an array of difference arrays
// that directly maps to each friend in the friends list
// this is where you need to find the closest friend using the minimu
// value of this newly built array

friends.push(newFriend)

// send back the closest friend here to close the request