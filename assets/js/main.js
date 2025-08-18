document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal_join_waitlist');
    const modalWindow = document.querySelector('.modal_window');
    const closeModalButton = document.querySelector('.close_modal');
    const openModalButtons = document.querySelectorAll('[data-w-id="4e870d66-9fd1-5824-aa2f-f20e3fbfd043"], [data-w-id="eebb26de-e363-f490-5e60-1822b528dcee"], [data-w-id="ec17a15e-8224-0174-5a61-8a1be3561360"], [data-w-id="fb2e4746-dbcd-3c72-cfa3-31ca134a9ea0"], [data-w-id="a3bba266-da0b-a874-ddbc-99cfcef833a3"], [data-w-id="3c5cbb73-5018-1dde-c3b0-fccd610432a7"]');
    const body = document.body;

    // Function to open the modal
    function openModal() {
        if (modal && modalWindow) {
            body.classList.add('no-scroll');
            modal.style.display = 'block';
            // A tiny delay ensures the display property is set before the transition starts
            setTimeout(() => {
                modal.style.opacity = '1';
                modalWindow.style.transform = 'translate3d(0, 0, 0)';
            }, 20);
        }
    }

    // Function to close the modal
    function closeModal() {
        if (modal && modalWindow) {
            modal.style.opacity = '0';
            modalWindow.style.transform = 'translate3d(125%, 0, 0)';
            // Wait for the transition to finish before hiding and allowing scroll again
            setTimeout(() => {
                modal.style.display = 'none';
                body.classList.remove('no-scroll');
            }, 500); // This should match your CSS transition time
        }
    }

    // Event listeners for open buttons
    openModalButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          openModal();
        });
    });

    // Event listener for the close button
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Dynamic form logic...
    const roleSelect = document.getElementById('role-select');
    const allRoleFields = document.querySelectorAll('.role-fields');
    const checkboxes = document.getElementById('checkboxes');

    if (roleSelect) {
        roleSelect.addEventListener('change', function() {
            const selectedRole = this.value;

            allRoleFields.forEach(field => {
                field.style.display = 'none';
            });

            if (selectedRole) {
                const fieldsToShow = document.getElementById(selectedRole + '-fields');
                if (fieldsToShow) {
                    fieldsToShow.style.display = 'block';
                }
                if (checkboxes) {
                    checkboxes.style.display = 'block';
                }
            } else {
                if (checkboxes) {
                    checkboxes.style.display = 'none';
                }
            }
        });
    }
});