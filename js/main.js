
/**
 * AgriWisdom - Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
  // Enable Bootstrap tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.getAttribute('href').length > 1) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Mobile sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      document.body.classList.toggle('sidebar-open');
    });
  }

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Form validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Notification counter - simulate new notifications
  updateNotificationCount();

  // Add course progress animation
  animateProgressBars();
});

/**
 * Update notification count
 */
function updateNotificationCount() {
  // This would normally fetch from an API
  const notificationCount = 3;
  const notificationBadge = document.querySelector('.notification-badge');
  
  if (notificationBadge) {
    notificationBadge.textContent = notificationCount;
    
    if (notificationCount > 0) {
      notificationBadge.classList.remove('d-none');
    } else {
      notificationBadge.classList.add('d-none');
    }
  }
}

/**
 * Animate progress bars
 */
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const value = bar.getAttribute('aria-valuenow');
    
    // Start at 0 and animate to actual value
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = value + '%';
      bar.style.transition = 'width 1s ease-in-out';
    }, 200);
  });
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
  toastContainer.style.zIndex = '1080';
  
  const toastElement = document.createElement('div');
  toastElement.className = `toast align-items-center text-white bg-${type}`;
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');
  
  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;
  
  toastContainer.appendChild(toastElement);
  document.body.appendChild(toastContainer);
  
  const toast = new bootstrap.Toast(toastElement, { autohide: true, delay: 3000 });
  toast.show();
  
  // Remove from DOM after hiding
  toastElement.addEventListener('hidden.bs.toast', function() {
    document.body.removeChild(toastContainer);
  });
}
