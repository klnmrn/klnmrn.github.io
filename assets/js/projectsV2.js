document.addEventListener('DOMContentLoaded', function () {
    // Attach a click event listener to the parent container
    document.getElementById('projects').addEventListener('click', function (e) {
      // Check if the clicked element has the 'project' class
      const projectElement = e.target.closest('.project');
  
      if (projectElement) {
        // If it does, get the data-project attribute and toggle the active class
        const projectName = projectElement.dataset.project;
        toggleProjectDetails(projectName);
      }
    });
  
    function toggleProjectDetails(project) {
      // Get the active project element
      const activeProject = document.querySelector('.project.active');
      if (activeProject) {
        // If there is an active project, remove the active class
        activeProject.classList.remove('active');
      }
  
      // Toggle the active class on the selected project
      const projectElement = document.querySelector(`.project[data-project="${project}"]`);
      projectElement.classList.toggle('active');
  
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
        
            default:
                break;
            }

      
      // Once the project details are loaded, update the project content
      setTimeout(() => {
        // Update the project title and description
        const projectTitle = document.getElementById('projectTitle');
        const projectDescription = document.getElementById('projectDescription');
        projectTitle.textContent = `Project ${project}`;
        projectDescription.textContent = 'This is the project description for Project ${project}.';
      }, 1000);
    }
  });