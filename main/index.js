        // Array of notes
        var warningNotes = [
          "Hiiiiii Can I Ask Something?????",
          "Im Sorry If this Is sudden Buttttt",
          "I really miss youuu and im craving for your kissesss😖",
          "ThankYouuuuuuuuu I realllyyyyy loveeeeee youuuuu sooo muchhhhh😍💋",
      ];

      // Initialize the currentIndex to 0
      var currentIndex = 0;

      // Number of notes before redirect
      var notesBeforeRedirect = 4;

      function showSequentialWarning() {
          // Display the warning note after a delay
          setTimeout(function() {
              alert(warningNotes[currentIndex]);
              
              // Increment the index
              currentIndex++;

              // Check if the currentIndex reached the notesBeforeRedirect
              if (currentIndex < notesBeforeRedirect) {
                  // If not, call the function again to display the next note
                  showSequentialWarning();
              } else {
                  // If reached the notesBeforeRedirect, redirect to loading.html
                  window.location.href = "loading.html";
              }
          }, 1000); // Delay in milliseconds between each note (adjust as needed)
      }