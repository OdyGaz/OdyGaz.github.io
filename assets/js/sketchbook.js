/* ==========================================================================
   SKETCHBOOK DATA & DYNAMIC RENDERER
   ========================================================================== */

// 1. Η Λίστα των Δεδομένων (Εδώ θα προσθέτεις νέα σκίτσα στο μέλλον)
const sketchesData = [
    {
        id: "01",
        title: "Το φορτίο του σύμπαντος",
        imagePath: "../assets/images/drawings/σισυφος.png",
        notes: `...τούτη την νύχτα τη φορτωμένη με σημάδια κι αστερισμούς άνοιγα την αγκαλιά μου για πρώτη φορά στην τρυφερή αδιαφορία του κόσμου...
Camus`
    },
    {
        id: "02",
        title: "Η Γεωμετρία της Δύναμης.",
        imagePath: "../assets/images/drawings/Clean&Jerk.png",
        notes: `Η κίνηση ως τέχνη, η προσπάθεια ως καθαρή ροή.`
    },
    
];

// 2. Η Μηχανή Παραγωγής (Renderer)
document.addEventListener("DOMContentLoaded", () => {
    const notebookContainer = document.getElementById("notebook-paper");
    
    if (!notebookContainer) {
        console.warn("Notebook container elements not found!");
        return;
    }

    // Καθαρισμός του container (για σιγουριά)
    notebookContainer.innerHTML = "";

    // Loop μέσα από όλα τα δεδομένα μας
    sketchesData.forEach((sketch) => {
        // Υπολογισμός τυχαίας μικρής κλίσης (-1.2 έως +1.2 μοίρες) για "φυσικό" Da Vinci Vibe
        const randomRotation = (Math.random() * 2.4 - 1.2).toFixed(2);

        // Δημιουργία του HTML block για κάθε σκίτσο
        const sketchHTML = `
            <article class="sketch-entry">
                <!-- Αριστερό/Δεξί μέρος: Η Εικόνα του Σκίτσου -->
                <div class="sketch-image-wrapper">
                    <img 
                        src="${sketch.imagePath}" 
                        alt="${sketch.title}" 
                        class="sketch-image"
                        onerror="this.src='../assets/images/placeholder-sketch.png'; this.style.opacity='0.5';"
                    >
                </div>

                <!-- Δεξί/Αριστερό μέρος: Τίτλος & Χειρόγραφες Σημειώσεις -->
                <div class="sketch-details">
                    <span class="sketch-num">Study No. ${sketch.id}</span>
                    <h2 class="sketch-entry-title">${sketch.title}</h2>
                    
                    <!-- Εφαρμογή της τυχαίας κλίσης στο "χαρτί" των σημειώσεων -->
                    <div class="sketch-notes-paper" style="transform: rotate(${randomRotation}deg);">
                        <p class="handwritten-notes">${sketch.notes}</p>
                    </div>
                </div>
            </article>
        `;

        // Προσθήκη του HTML στο container
        notebookContainer.insertAdjacentHTML("beforeend", sketchHTML);
    });
});