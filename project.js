function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1:-1;
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));

    //Sort each row
    const sortedRows = rows.sort((a,b) =>{
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
		const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText > bColText ? (1*dirModifier) : (-1* dirModifier);

    });

   // Remove all existing TRs from the table
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	// Re-add the newly sorted rows
	tbody.append(...sortedRows);
}

sortTableByColumn(document.querySelector("table"),1, true);