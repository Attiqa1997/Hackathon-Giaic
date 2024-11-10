// TypeScript function to toggle visibility with smooth transition
function toggleSection(sectionId: string) {
    const sectionContent = document.getElementById(sectionId) as HTMLElement;
    const isExpanded = sectionContent.style.display === "block";

    // Toggle display and add transition effect
    sectionContent.style.display = isExpanded ? "none" : "block";
}

// Add event listeners to section titles
document.querySelectorAll(".section-title").forEach(title => {
    const sectionId = title.getAttribute("data-toggle");
    title.addEventListener("click", () => toggleSection(sectionId!));
});

// Ensuring the function is accessible globally
(window as any).toggleSection = toggleSection;
