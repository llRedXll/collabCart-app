// frontend/public/js/app.js

const apiUrl = 'http://localhost:3000/api/lists'; // Adjust the URL as needed

// Function to fetch lists from the server
async function fetchLists() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const lists = await response.json();
        renderLists(lists);
    } catch (error) {
        console.error('Error fetching lists:', error);
    }
}

// Function to render lists in the UI
function renderLists(lists) {
    const listContainer = document.getElementById('shoppingList');
    listContainer.innerHTML = '';

    lists.forEach(list => {
        const listElement = document.createElement('div');
        listElement.className = 'list-item';
        listElement.innerHTML = `
            <h3>${list.title}</h3>
            <button onclick="deleteList('${list._id}')">Delete</button>
        `;
        listContainer.appendChild(listElement);
    });
}

// Function to delete a list
async function deleteList(listId) {
    try {
        const response = await fetch(`${apiUrl}/${listId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchLists(); // Refresh the list after deletion
    } catch (error) {
        console.error('Error deleting list:', error);
    }
}

// Function to add a new list
async function addList() {
    const listTitle = document.getElementById('listTitleInput').value.trim();
    if (!listTitle) return;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: listTitle }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        document.getElementById('listTitleInput').value = ''; // Clear input
        fetchLists(); // Refresh the list after adding
    } catch (error) {
        console.error('Error adding list:', error);
    }
}

// WebSocket connection for real-time updates
const socket = new WebSocket('ws://localhost:3000'); // Adjust the URL as needed

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    if (data.type === 'LIST_UPDATED') {
        fetchLists(); // Refresh lists on update
    }
});

// Initial fetch of lists
fetchLists();