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
      //////projectElement.classList.toggle('active');

      // Check if the project element is part of the same origin as the script
      if (projectElement.ownerDocument.defaultView === window) {
        projectElement.classList.toggle('active');
      } else {
        // If the project element is from a different origin, log a warning message
        console.warn('The project element is from a different origin.');
      }
      
      const baseUrl = window.location.origin;
      const currentUrl = window.location.href;
      
      if (currentUrl.includes('#')) {
        // If the current URL contains a project hash, update the URL to index.html#projects
        window.history.replaceState(null, null, `${baseUrl}/#projects`);
      } else {
        // If it doesn't, update the URL to index.html#projects
        window.history.replaceState(null, null, `${baseUrl}/#${project}`);
      }}

    const closeButtons = document.querySelectorAll('.project-details .close');

    closeButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        // Prevent the default behavior of closing the active modal
        event.stopPropagation();
        
        // Scroll to the projects list
        const projectListElement = document.querySelector('#projects'); 
        projectListElement.scrollIntoView({ behavior: 'smooth' });

        // Navigate to index.html#projects
        window.location.href = '#projects';
      });
    });




///  document.addEventListener('click', function (event) {
///   const activeProject = document.querySelector('.project-details.active');

///    if (event.target.classList.contains('close') && !activeProject.contains(event.target)) {
///      event.preventDefault();

      // Prevent the default behavior of closing the active modal
///      event.stopPropagation();

      // Scroll to the projects list
///      const projectListElement = document.querySelector('#projects'); 
///      projectListElement.scrollIntoView({ behavior: 'smooth' });

      // Update the URL to the base URL with the '#projects' hash

      /////const baseUrl = window.location.protocol + '//' + window.location.host;
      /////window.history.pushState(null, null, `${baseUrl}#projects`);

      // Update the hash to navigate to #projects
///      setTimeout(() => {
///        window.location.href = 'index.html#projects';
///      }, 100);
///    }
///  });
});