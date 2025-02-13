function searchVideos() {
    let query = document.getElementById("search").value.toLowerCase();
    let videos = document.querySelectorAll(".video-card");
    let videoGrid = document.querySelector(".video-grid");

    let foundVideos = [];
    
    videos.forEach(video => {
        let title = video.querySelector("h3").innerText.toLowerCase();
        if (title.includes(query)) {
            video.style.display = "block";
            foundVideos.push(video);
        } else {
            video.style.display = "none";
        }
    });

    // Ensure the video grid remains structured
    if (foundVideos.length > 0) {
        videoGrid.innerHTML = ""; // Clear grid
        foundVideos.forEach(video => videoGrid.appendChild(video)); // Append matched videos
    }
}
