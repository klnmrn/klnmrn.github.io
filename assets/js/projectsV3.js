document.addEventListener('DOMContentLoaded', function () {
    // Attach a click event listener to the parent container
    const projectList = document.querySelector('.project-list');
    projectList.addEventListener('click', function (e) {
      // Check if the clicked element has the 'portfolio-item' class
      const projectItem = e.target.closest('.project-item');
  
      if (projectItem) {
        // If it does, get the data-project attribute and toggle the active class
        const projectName = projectItem.querySelector('a').getAttribute('href').slice(1);
        toggleProjectDetails(projectName);
      }
    });
  
    function toggleProjectDetails(project) {
      // Get the active project element
      const activeProject = document.querySelector('.project-details.active');
      if (activeProject) {
        // If there is an active project, remove the active class
        activeProject.classList.remove('active');
      }
  
      // Toggle the active class on the selected project
      const projectElement = document.getElementById(project);
      projectElement.classList.toggle('active');
    }
  });