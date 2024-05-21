document.addEventListener('DOMContentLoaded', () => {
    // Handle complaint form submission
    const complaintForm = document.getElementById('complaintForm');
    complaintForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Complaint submitted successfully!');
        complaintForm.reset();
    });

    // Handle status form submission
    const statusForm = document.getElementById('statusForm');
    statusForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const complaintId = document.getElementById('complaintId').value;
        document.getElementById('statusResult').innerText = `Status for complaint ID ${complaintId}: In Progress`;
    });
});
