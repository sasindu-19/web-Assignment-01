document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".dest-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterText = button.textContent.trim().toLowerCase();

            cards.forEach(card => {
                const tagElement = card.querySelector(".card-tag");
                const tagText = tagElement ? tagElement.textContent.trim().toLowerCase() : "";
                const titleText = card.querySelector("h3") ? card.querySelector("h3").textContent.trim().toLowerCase() : "";

                if (filterText === "all") {
                    card.style.display = "flex";
                } else if (filterText === "cultural & heritage") {
                    if (tagText === "heritage" || tagText === "culture") {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }

                } else if (filterText === "hill country") {
                    if (titleText === "ella" || titleText === "kandy") {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                } else if (filterText === "pristine beaches") {
                    if (tagText === "beach" || tagText === "coastline") {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                } else if (filterText === "wildlife") {
                    if (tagText === "wildlife") {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                }


            });
        });
    });
});