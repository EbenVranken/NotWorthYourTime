var colors = ["ec4e20", "ff9505", "016fb9", "ff4d80", "2f9d50", "fff", "9d2f90", "2f9d99"];
const elements = document.getElementsByTagName("h1");

function asignColors() {
    for(i = 0; i < elements.length; i++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        elements[i].style.color = "#" + colors[randomIndex];
        colors.splice(randomIndex, 1);
    }
}

function audio(obj) {
    let source = "audio/" + obj.innerHTML + ".mp4";

    document.getElementById("audioSource").src = source;
    document.getElementById("audioSource").play();

    document.getElementById("background").src = source;

    document.getElementById("background").style.display = "block";

}

function end() {
    document.getElementById("background").style.display = "none";
}