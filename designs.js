var form = document.getElementById("sizePicker")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var height = document.getElementById("inputHeight").value
    var width = document.getElementById("inputWidth").value
    removeGrid()
    makeGrid(height, width)
})

function makeGrid(height, width) {
    var table = document.getElementById("pixelCanvas")
    var tbody = document.createElement("tbody")
    tbody.id = "grid"
    console.log(tbody)
    for (let row = 1; row <= height; row++) {
        var newRow = document.createElement("tr")
        for (let col = 1; col <= width; col++) {
            let newCol = document.createElement("td")
            newCol.addEventListener("click", function(event) {
                let myColor = document.getElementById("colorPicker").value
                newCol.style.backgroundColor = myColor;
            })
            newRow.append(newCol)
        }
        tbody.append(newRow)
    }
    table.append(tbody)
}

function removeGrid() {
    var grid = document.getElementById("grid")
    if (grid != null) {
        grid.remove()
    }
}