// People array
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Comments array
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Get DOM elements
  const peopleList = document.querySelector('.people');
  const isEveryoneAdult = document.querySelector('.is-everyone-adult');
  const commentWithId = document.querySelector('.comment-with-id');
  const deletedComment = document.querySelector('.deleted-comment');
  const modifiedComments = document.querySelector('.modified-comments');
  
  // Display people list
  const peopleHTML = people.map(person => `<li>${person.name} (${person.year})</li>`).join('');
  peopleList.innerHTML = peopleHTML;
  
  // Check if everyone is 19 or older
  const isEveryoneAdultResult = people.every(person => new Date().getFullYear() - person.year >= 19);
  isEveryoneAdult.textContent = isEveryoneAdultResult ? 'Yes' : 'No';
  
  // Find the comment with the ID of 823423
  const commentWithIdResult = comments.find(comment => comment.id === 823423);
  commentWithId.textContent = commentWithIdResult.text;
  
  // Delete the comment with the ID of 823423
  const commentIndex = comments.findIndex(comment => comment.id === 823423);
  const deletedCommentResult = comments.splice(commentIndex, 1);
  deletedComment.textContent = JSON.stringify(deletedCommentResult);
  
  // New array with modified comments
  const modifiedCommentsResult = comments.map(comment => {
    comment.text = comment.text.toUpperCase();
    return comment;
  });
  modifiedComments.textContent = JSON.stringify(modifiedCommentsResult, null, 2);
  