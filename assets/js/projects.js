// Function to open the modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
    // Clear modal content when closing
    document.getElementById('modalContent').innerHTML = '';
  }

function loadProjectDetails(project) {
    openModal();

    // Get references to HTML elements inside the modalContent
    const projectTitle = document.getElementById('projectTitle');
    const projectImage = document.getElementById('projectImage');
    const projectDescription = document.getElementById('projectDescription');

    // Use a switch statement to populate details based on the clicked project
    switch (project) {
        case 'project1':
            projectTitle.textContent = 'Project 1';
            projectImage.src = 'project1-image.jpg';
            projectDescription.textContent = 'Description for Project 1.';
            break;
        case 'project2':
            projectTitle.textContent = 'Project 2';
            projectImage.src = 'project2-image.jpg';
            projectDescription.textContent = 'Description for Project 2.';
            break;
        case 'project3':
            projectTitle.textContent = 'Project 3';
            projectImage.src = 'project3-image.jpg';
            projectDescription.textContent = 'Description for Project 3.';
            break;
        case 'project4':
            projectTitle.textContent = 'Project 4';
            projectImage.src = 'project4-image.jpg';
            projectDescription.textContent = 'Description for Project 4.';
            break;
        case 'project5':
            projectTitle.textContent = 'Project 5';
            projectImage.src = 'project5-image.jpg';
            projectDescription.textContent = 'Description for Project 5.';
            break;
        case 'project6':
            projectTitle.textContent = 'Project 6';
            projectImage.src = 'project6-image.jpg';
            projectDescription.textContent = 'Description for Project 6.';
            break;
        // Repeat the above block for projects 2 to 6, updating case statements
        default:
            // Handle default case or do nothing
            break;
    }
}

// Event listener to handle project clicks and load details into the modal
document.getElementById('projects').addEventListener('click', function(e) {
    if (e.target.closest('.project')) {
      const projectName = e.target.closest('.project').dataset.project;
      loadProjectDetails(projectName);
    }
  });
  