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

document.getElementById('form-movie').addEventListener('submit', downloadMovie);
document.getElementById('button-clear').addEventListener('click', clearStatus);
