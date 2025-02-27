async function downloadMovie(e) {
    e.preventDefault();
    
    const url = document.getElementById('input-url').value;
    const statusDiv = document.getElementById('status');
    
    const response = await fetch("/api/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
    });
    
    const data = await response.json();
    statusDiv.textContent = `ID: ${data.uuid}`;
}

function clearStatus() {
    document.getElementById('status').textContent = '';
    document.getElementById('input-url').value = '';
}

async function getFiles() {
    const response = await fetch("/api/status", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    
    const data = await response.json();
    const tbody = document.getElementById('files').querySelector('tbody');
    tbody.innerHTML = '';

    data.files.forEach(file => {
        tbody.innerHTML += `
            <tr class="file-row">
                <td>${file.name}</td>
                <td>${file.size}</td>
            </tr>
        `;
    });
}

document.getElementById('form-movie').addEventListener('submit', downloadMovie);
document.getElementById('button-clear').addEventListener('click', clearStatus);
document.getElementById('button-get-files').addEventListener('click', getFiles);
