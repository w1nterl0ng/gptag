document.getElementById('searchBox').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const fileList = document.getElementById('fileList');
    const files = fileList.getElementsByTagName('li');

    for (let file of files) {
        if (file.innerText.toLowerCase().includes(searchTerm)) {
            file.style.display = '';
        } else {
            file.style.display = 'none';
        }
    }
});

// Mock data for demonstration purposes
const mockFiles = [
    { name: 'song1.gp3', type: 'gp3' },
    { name: 'song2.gp4', type: 'gp4' },
    { name: 'song3.gpx', type: 'gpx' },
    { name: 'song4.gp5', type: 'gp5' },
];

const fileList = document.getElementById('fileList');

mockFiles.forEach(file => {
    const li = document.createElement('li');
    li.innerText = file.name;
    li.dataset.type = file.type;
    fileList.appendChild(li);
    li.addEventListener('click', () => {
        document.getElementById('songName').value = file.name;
        document.getElementById('subtitle').value = 'Sample Subtitle';
        document.getElementById('album').value = 'Sample Album';
        document.getElementById('transcriber').value = 'Sample Transcriber';
    });
});

document.getElementById('saveButton').addEventListener('click', () => {
    const songName = document.getElementById('songName').value;
    const subtitle = document.getElementById('subtitle').value;
    const album = document.getElementById('album').value;
    const transcriber = document.getElementById('transcriber').value;
    console.log(`Saved: ${songName}, ${subtitle}, ${album}, ${transcriber}`);
});
