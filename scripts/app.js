"use strict";

(function (){
    function DisplayHomePage () {
        console.log("Calling DisplayHomePage()...");

        let getInvolvedBtn = document.getElementById("getInvolvedBtn");
        getInvolvedBtn.addEventListener("click", () => {
            console.log("clicked");
            location.href="opportunities.html";
        });
    }

    function DisplayOpportunitiesPage () {
        console.log("Calling DisplayOpportunitiesPage()...");

         const table = document.getElementById("table").getElementsByTagName("tbody")[0];

        opportunities.forEach(opportunity => {
            let row = document.createElement("tr");

            let title = document.createElement("td");
            let description = document.createElement("td");
            let date = document.createElement("td");
            let time = document.createElement("td");

            title.textContent = opportunity.title;
            description.textContent = opportunity.description;
            date.textContent = opportunity.date;
            time.textContent = opportunity.time;

            row.appendChild(title);
            row.appendChild(description);
            row.appendChild(date);
            row.appendChild(time);

            table.appendChild(row);
        })

    }
    function DisplayEventsPage () {
        console.log("Calling DisplayEventsPage()...");

        const table = document.getElementById("table").getElementsByTagName("tbody")[0];

        volunteerEvents.forEach(element => {
            let row = document.createElement("tr");

            let date = document.createElement("td");
            let event = document.createElement("td");
            let description = document.createElement("td");

            date.textContent = element.date;
            event.textContent = element.event;
            description.textContent = element.description;

            row.appendChild(date);
            row.appendChild(event);
            row.appendChild(description);

            table.appendChild(row);
        })

        let allBtn = document.getElementById("allBtn")
        let fundraiserBtn = document.getElementById("fundraiserBtn")
        let workShopBtn = document.getElementById("workShopBtn")
        let cleanUpBtn = document.getElementById("cleanUpBtn")

        let rows = table.querySelectorAll("tbody tr");

        allBtn.addEventListener("click", function(){
            rows.forEach(function(row) {
                row.style.display = "table-row";
            });
        })

        fundraiserBtn.addEventListener("click", function(){
            rows.forEach(function(row) {
                const cells = row.getElementsByTagName("td");
                const eventType = cells[1].textContent;

                if (eventType === "Fundraiser") {
                    row.style.display = "table-row";
                }
                else { row.style.display = "none"; }
            });
        })

        workShopBtn.addEventListener("click", function(){
            rows.forEach(function(row) {
                const cells = row.getElementsByTagName("td");
                const eventType = cells[1].textContent;

                if (eventType === "Workshop") {
                    row.style.display = "table-row";
                }
                else { row.style.display = "none"; }
            });
        })

        cleanUpBtn.addEventListener("click", function(){
            rows.forEach(function(row) {
                const cells = row.getElementsByTagName("td");
                const eventType = cells[1].textContent;

                if (eventType === "Cleanup") {
                    row.style.display = "table-row";
                }
                else { row.style.display = "none"; }
            });
        })
    }
    function DisplayContactsPage () {
        console.log("Calling DisplayContactsPage()...");

    }
    function DisplayAboutPage () {
        console.log("Calling DisplayAboutPage()...");

    }
    function Start() {
        console.log("Starting...");

        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Opportunities":
                DisplayOpportunitiesPage();
                break;
            case "Events":
                DisplayEventsPage();
                break;
            case "Contacts":
                DisplayContactsPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
        }
    }
    window.addEventListener("load", Start);
})();