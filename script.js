// TypeScript function to toggle visibility with smooth transition
function toggleSection(sectionId) {
    var sectionContent = document.getElementById(sectionId);
    var isExpanded = sectionContent.style.display === "block";
    // Toggle display and add transition effect
    sectionContent.style.display = isExpanded ? "none" : "block";
}
// Add event listeners to section titles
document.querySelectorAll(".section-title").forEach(function (title) {
    var sectionId = title.getAttribute("data-toggle");
    title.addEventListener("click", function () { return toggleSection(sectionId); });
});
// Ensuring the function is accessible globally
window.toggleSection = toggleSection;
