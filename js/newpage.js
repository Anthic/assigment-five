// //index page to blog page
// function questionTab() {
//     window.location.assign("http://127.0.0.1:5500/question.html")
//   }
//   function homeTab() {
//     window.location.assign("http://127.0.0.1:5500/index.htm")
//   }

        // Add an event listener to the button
        document.getElementById('blogButton').addEventListener('click', function() {
          // Navigate to question.html
          window.location.href = 'question.html';
      });

              // Add an event listener to the button
              document.getElementById('homeButton').addEventListener('click', function() {
                // Navigate back to index.html
                window.location.href = 'index.html';
            });