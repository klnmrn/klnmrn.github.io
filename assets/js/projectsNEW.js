document.addEventListener('DOMContentLoaded', function() {
    // Event listener to handle project clicks and load details into the modal
    document.getElementById('projects').addEventListener('click', function(e) {
      const projectElement = e.target.closest('.project');
  
      if (projectElement) {
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
            projectTitle.textContent = 'Urban Road Safety Research';
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
        break;
    }
  }
  
  function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

});
  