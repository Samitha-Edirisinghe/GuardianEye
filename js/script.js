const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

function togglePassword() {
    let passwordField = document.getElementById("password");
    let toggleIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "img/hide.png"; // Change to 'hide' icon
    } else {
        passwordField.type = "password";
        toggleIcon.src = "img/show.png"; // Change to 'show' icon
    }
}

// Toggle Notifications
function toggleNotifications(event) {
    event.stopPropagation();
    var dropdown = document.getElementById("notificationDropdown");
    dropdown.classList.toggle("show");
}

// Mark All as Read
function markAllAsRead() {
    document.querySelectorAll('.notification-item').forEach(item => {
        item.style.display = 'none';
    });
    updateNotificationCount();
}

// Accept Button Handler
document.querySelectorAll('.accept-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const notification = e.target.closest('.notification-item');
        notification.style.display = 'none';
        updateNotificationCount();
        // Add your accept logic here
    });
});

// Update Notification Count
function updateNotificationCount() {
    const visibleNotifications = document.querySelectorAll('.notification-item:not([style*="display: none"])').length;
    document.querySelector('.notification-count').textContent = visibleNotifications;
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.notification-bell')) {
        document.getElementById("notificationDropdown").classList.remove('show');
    }
}

// Update Notification Count
function updateNotificationCount() {
    const visibleNotifications = document.querySelectorAll('.notification-item:not([style*="display: none"])').length;
    const notificationCountElement = document.querySelector('.notification-count');
    const noNotificationMessage = document.getElementById('noNotificationMessage');
    const notificationItems = document.getElementById('notificationItems');

    notificationCountElement.textContent = visibleNotifications;

    if (visibleNotifications === 0) {
        noNotificationMessage.style.display = 'block';
        notificationItems.style.display = 'none';
    } else {
        noNotificationMessage.style.display = 'none';
        notificationItems.style.display = 'block';
    }
}

// Update Notification Count
function updateNotificationCount() {
    const visibleNotifications = document.querySelectorAll('.notification-item:not([style*="display: none"])').length;
    const notificationCountElement = document.querySelector('.notification-count');
    const noNotificationMessage = document.getElementById('noNotificationMessage');
    const notificationItems = document.getElementById('notificationItems');

    notificationCountElement.textContent = visibleNotifications;

    if (visibleNotifications === 0) {
        noNotificationMessage.style.display = 'block';
        notificationItems.style.display = 'none';
    } else {
        noNotificationMessage.style.display = 'none';
        notificationItems.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateNotificationCount();
});
