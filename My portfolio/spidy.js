<script>
function showCV() {
    // hide all main sections
    document.querySelector("nav").style.display = "none";
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    // show CV section
    document.getElementById("cv-section").style.display = "block";
}

function goHome() {
    document.querySelector("nav").style.display = "flex";
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "block";
    });

    document.getElementById("cv-section").style.display = "none";
}
</script>
