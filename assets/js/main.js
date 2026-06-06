document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. ΑΡΧΙΚΗ ΣΕΛΙΔΑ: ΛΕΙΤΟΥΡΓΙΑ POP & REVEAL BUBBLE (index.html)
    // ==========================================================================
    const popTrigger = document.getElementById('pop-trigger');
    const targetBubble = document.getElementById('target-bubble');
    const cvTargetBubble = document.getElementById('cv-target-bubble');
    const teachingBubble = document.getElementById('teaching-target-bubble');
    const portfolioBubble = document.getElementById('portfolio-target-bubble');

    // Έλεγχος ότι βρισκόμαστε στην αρχική σελίδα και υπάρχουν όλα τα στοιχεία
    if (popTrigger && targetBubble && cvTargetBubble && teachingBubble && portfolioBubble) {
        
        popTrigger.addEventListener('click', () => {
            const bubbles = [targetBubble, cvTargetBubble, teachingBubble, portfolioBubble];
            const placed = []; // Πίνακας για την καταγραφή των θέσεων που έχουν ήδη δοθεί
            const minDistance = 15; // Ελάχιστη απόσταση (%) μεταξύ των φυσαλίδων

            bubbles.forEach(bubble => {
                let top, left, isValid;
                let attempts = 0;

                do {
                    // Παραγωγή τυχαίων συντεταγμένων εντός των ορίων [15%, 80%]
                    top = 15 + Math.random() * 65;
                    left = 15 + Math.random() * 65;
                    isValid = true;

                    // Έλεγχος αν η νέα θέση συγκρούεται με κάποια από τις ήδη τοποθετημένες φυσαλίδες
                    for (const other of placed) {
                        const distY = Math.abs(top - other.top);
                        const distX = Math.abs(left - other.left);
                        if (distY < minDistance && distX < minDistance) {
                            isValid = false;
                            break;
                        }
                    }

                    attempts++;
                } while (!isValid && attempts < 100); // Ασφάλεια για αποφυγή infinite loop

                // Εφαρμογή των σωστών συντεταγμένων και εμφάνιση της φυσαλίδας
                bubble.style.top = `${top}%`;
                bubble.style.left = `${left}%`;
                bubble.classList.add('visible');

                // Καταγραφή της θέσης για τον έλεγχο της επόμενης φυσαλίδας
                placed.push({ top, left });
            });
        });
    }

    // ==========================================================================
    // 2. ΣΕΛΙΔΑ ΔΗΜΟΣΙΕΥΣΕΩΝ: HIDDEN OBJECT GAME (publications.html)
    // ==========================================================================
    const gameContainer = document.getElementById('bubble-game');
    
    if (gameContainer) {
        // Ο πίνακας με τα δεδομένα των 17 δημοσιεύσεων (πλέον περιλαμβάνει και το [7])
        const papersData = [
            { id: 17, title: "Designing DBD Plasma Sources", url: "https://iopscience.iop.org/article/10.1088/2631-8695/ae51ea" },
            { id: 16, title: "OES of Low-Pressure DC Argon Plasmas", url: "https://iopscience.iop.org/article/10.1088/1361-6463/ae2ede" },
            { id: 15, title: "Screening of CBD Oils by HA-DBDI MS", url: "https://doi.org/10.1039/D5AN01179E" },
            { id: 14, title: "Desorption Step in Plasma-Based Ambient MS", url: "https://doi.org/10.1021/acs.analchem.5c03205" },
            { id: 13, title: "Plasma Tubes for Programmable Metasurfaces", url: "https://doi.org/10.1002/aelm.202500605" },
            { id: 12, title: "Desorption Mechanisms in Helium LTP Source", url: "https://doi.org/10.1021/jasms.5c00171" },
            { id: 11, title: "Low-Cost Heat Assisted DBDI Source", url: "https://doi.org/10.1039/D4AN00901K" },
            { id: 10, title: "Absolute Atomic Nitrogen Density Mapping", url: "https://doi.org/10.1088/1361-6595/ad227b" },
            { id: 9, title: "Trichel Pulses for Needle-Plane Geometry", url: "https://doi.org/10.1063/5.0084851" },
            { id: 8, title: "Helium Plasma Jet against Melanoma Cells", url: "https://doi.org/10.1063/5.0077694" },
            { id: 7, title: "Cold Plasmas in the Fight Against Cancer", url: "https://mipse.umich.edu/ltpc/newsletters.html" },
            { id: 6, title: "Propagation Dynamics of Helium Plasma", url: "https://doi.org/10.1016/j.sab.2021.106248" },
            { id: 5, title: "Sulfur Detection in Soil by LIBS", url: "https://doi.org/10.3390/ma14030541" },
            { id: 4, title: "LIBS Analysis of Liquid Slag Surface", url: "https://doi.org/10.1016/j.sab.2020.105921" },
            { id: 3, title: "Cancer Biomarkers Detection in Saliva", url: "https://doi.org/10.1021/acs.analchem.0c01063" },
            { id: 2, title: "LIBS assisted by ML for Olive Oils", url: "https://doi.org/10.1016/j.sab.2019.105746" },
            { id: 1, title: "Classification of Olive Oils by ML", url: "https://doi.org/10.1016/j.foodchem.2019.125329" }
        ];

        // Παλέτα glow χρωμάτων
        const colors = [
            'rgba(183, 232, 173, 0.85)', // Green
            'rgba(252, 232, 129, 0.85)', // Yellow
            'rgba(135, 206, 250, 0.85)', // Blue
            'rgba(216, 191, 216, 0.85)', // Purple
            'rgba(255, 182, 193, 0.85)'  // Pink
        ];

        const maxActiveBubbles = 6;

        function spawnBubble() {
            const paper = papersData[Math.floor(Math.random() * papersData.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];

            const bubble = document.createElement('div');
            bubble.className = 'glowing-bubble';
            
            const posX = 10 + Math.random() * 80;
            const posY = 10 + Math.random() * 80;

            bubble.style.left = `${posX}%`;
            bubble.style.top = `${posY}%`;
            bubble.style.backgroundColor = color;
            bubble.style.boxShadow = `0 0 15px ${color}`;

            const tooltip = document.createElement('div');
            tooltip.className = 'bubble-tooltip';
            tooltip.innerHTML = `<strong>[${paper.id}]</strong> ${paper.title} <br><span class="click-prompt">Click to Read</span>`;
            bubble.appendChild(tooltip);

            bubble.addEventListener('click', () => {
                const targetPaper = document.getElementById(`paper-${paper.id}`);
                if (targetPaper) {
                    document.querySelectorAll('.paper-item').forEach(item => {
                        item.classList.remove('highlighted-by-game');
                    });
                    
                    targetPaper.classList.add('highlighted-by-game');
                    targetPaper.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                setTimeout(() => {
                    window.open(paper.url, '_blank');
                }, 400);

                bubble.style.transform = 'scale(0)';
                bubble.style.opacity = '0';
                setTimeout(() => {
                    bubble.remove();
                    spawnBubble();
                }, 300);
            });

            gameContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.style.opacity = '0';
                    setTimeout(() => {
                        bubble.remove();
                        spawnBubble();
                    }, 500);
                }
            }, 12000);
        }

        for (let i = 0; i < maxActiveBubbles; i++) {
            setTimeout(spawnBubble, i * 800);
        }
    }

    // ==========================================================================
    // 3. ΣΕΛΙΔΑ ΒΙΟΓΡΑΦΙΚΟΥ: ΔΙΑΔΡΑΣΤΙΚΑ TABS (cv.html)
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Αφαίρεση της κλάσης active από όλα τα κουμπιά και περιεχόμενα
                tabButtons.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Ενεργοποίηση του επιλεγμένου tab
                btn.classList.add('active');
                const activePane = document.getElementById(targetTab);
                if (activePane) {
                    activePane.classList.add('active');
                }
            });
        });
    }

    // ==========================================================================
    // 4. ΣΕΛΙΔΑ ΒΙΟΓΡΑΦΙΚΟΥ: ΦΙΛΤΡΑ ΣΥΝΕΔΡΙΩΝ (cv.html)
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const confItems = document.querySelectorAll('.conf-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');

                // Αλλαγή active κλάσης στα κουμπιά φίλτρων
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Εμφάνιση ή απόκρυψη των συνεδρίων
                confItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ==========================================================================
    // 5. ΣΕΛΙΔΑ ΒΙΟΓΡΑΦΙΚΟΥ: MODAL LIGHTBOX ΠΙΣΤΟΠΟΙΗΤΙΚΩΝ (cv.html)
    // ==========================================================================
    const viewAllBtn = document.getElementById('view-all-certs-btn');
    const certsModal = document.getElementById('certs-modal');
    const modalClose = document.getElementById('modal-close');

    if (viewAllBtn && certsModal && modalClose) {
        // Άνοιγμα modal
        viewAllBtn.addEventListener('click', () => {
            certsModal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Απενεργοποίηση scroll στο background
        });

        // Κλείσιμο modal από το κουμπί X
        modalClose.addEventListener('click', () => {
            certsModal.classList.remove('open');
            document.body.style.overflow = ''; // Επαναφορά scroll
        });

        // Κλείσιμο modal κάνοντας κλικ οπουδήποτε έξω από την εικόνα
        certsModal.addEventListener('click', (e) => {
            if (e.target === certsModal) {
                certsModal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});