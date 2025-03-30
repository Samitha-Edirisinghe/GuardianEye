// Coding by Samitha Randika | https://www.linkedin.com/in/samitha-randika-edirisinghe-b3a68a2b6 //
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
        toggleIcon.src = "assets/img/show.png"; // Change to 'hide' icon
    } else {
        passwordField.type = "password";
        toggleIcon.src = "assets/img/hide.png"; // Change to 'show' icon
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


// Officer data (only badge numbers needed now)
const officerData = {
    1: { badge: "GCU-4560" },
    2: { badge: "GCU-4561" },
    3: { badge: "GCU-4562" },
    4: { badge: "GCU-4563" },
    5: { badge: "GCU-4564" },
    6: { badge: "GCU-4565" },
    7: { badge: "GCU-4566" },
    8: { badge: "GCU-4567" },
    9: { badge: "GCU-4568" },
    10: { badge: "GCU-4569" }
};

// Initialize officer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Click handlers for officer list
    document.querySelectorAll('.crime-count').forEach(officerElement => {
        officerElement.addEventListener('click', function() {
            const officerNum = parseInt(this.getAttribute('data-officer'));
            const phoneNum = this.getAttribute('data-phone');
            showOfficerDetails(officerNum, phoneNum);
        });
    });

    // Call button handler
    document.getElementById('officerCallBtn')?.addEventListener('click', function() {
        const phoneNum = document.getElementById('officerPhone').textContent;
        initiateCall(phoneNum);
    });

    // Message button handler
    document.querySelector('.message-btn')?.addEventListener('click', function() {
        const phoneNum = document.getElementById('officerPhone').textContent;
        messageOfficer(phoneNum);
    });

    // Dispatch button handler
    document.querySelector('.dispatch-btn')?.addEventListener('click', function() {
        const officerName = document.getElementById('officerName').textContent;
        dispatchOfficer(officerName);
    });
});

// Show officer details in panel
function showOfficerDetails(officerNumber, phoneNumber) {
    const panel = document.getElementById('officerDetailPanel');
    
    // Update officer details
    document.getElementById('officerName').textContent = `Officer ${officerNumber.toString().padStart(2, '0')}`;
    document.getElementById('officerBadge').textContent = officerData[officerNumber]?.badge || `100${officerNumber}`;
    document.getElementById('officerPhone').textContent = phoneNumber;
    
    // Show last 4 digits on call button
    document.getElementById('officerCallBtn').textContent = `Call (${phoneNumber.slice(-4)})`;
    
    // Show panel
    panel.style.display = 'block';
}

// Close panel when clicking outside
document.addEventListener('click', function(event) {
    const officerPanel = document.getElementById('officerDetailPanel');
    if (!event.target.closest('.crime-count') && !event.target.closest('.officer-detail-panel')) {
        if (officerPanel) officerPanel.style.display = 'none';
    }
});

// Action functions
function initiateCall(phoneNumber) {
    console.log(`Calling: ${phoneNumber}`);
    // In production: window.location.href = `tel:${phoneNumber}`;
    alert(`Calling: ${phoneNumber}`);
}

function messageOfficer(phoneNumber) {
    console.log(`Messaging: ${phoneNumber}`);
    alert(`Messaging: ${phoneNumber}`);
}

function dispatchOfficer(officerName) {
    console.log(`Dispatching: ${officerName}`);
    alert(`Dispatching: ${officerName}`);
}