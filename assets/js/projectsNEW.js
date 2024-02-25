document.addEventListener('DOMContentLoaded', function () {
    // Attach a click event listener to the parent container
    document.getElementById('projects').addEventListener('click', function (e) {
      // Check if the clicked element has the 'project' class
      const projectElement = e.target.closest('.project');
  
      if (projectElement) {
        // If it does, get the data-project attribute and load details
        const projectName = projectElement.dataset.project;
        loadProjectDetails(projectName);
      }
    });
  
  function loadProjectDetails(project) {
    openModal();
  
    const projectTitle = document.getElementById('projectTitle');
    const projectImage = document.getElementById('projectImage');
    const projectDescription = document.getElementById('projectDescription');
  
    switch (project) {
        case 'project1':
            projectTitle.textContent = 'Project 1';
            projectImage.src = 'project1-image.jpg';
            projectDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Mi proin sed libero enim sed faucibus turpis in eu. Mauris vitae ultricies leo integer. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Donec ac odio tempor orci dapibus ultrices. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Sed risus ultricies tristique nulla aliquet enim. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Consequat id porta nibh venenatis cras. Nisl suscipit adipiscing bibendum est ultricies integer quis. Viverra suspendisse potenti nullam ac tortor vitae purus. Ridiculus mus mauris vitae ultricies leo. Lectus magna fringilla urna porttitor rhoncus dolor.';
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
        break;
    }
  }
  
    // JavaScript functions for the modal
    function openModal() {
        document.getElementById('modal').style.display = 'flex';
        // Add event listener to close the modal on background click
        document.getElementById('modal').addEventListener('click', closeModalOnBackgroundClick);
    }
    
    function closeModalOnBackgroundClick(event) {
        // Close the modal only if the click is on the modal background, not on the modal content
        if (event.target.id === 'modal') {
        closeModal();
        }
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modal').removeEventListener('click', closeModalOnBackgroundClick);
      
        // Update the URL hash to go back to the #projects section
        window.location.hash = 'projects';
      }

});
  