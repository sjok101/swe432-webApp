const djList = document.querySelector(".dj-list")
const djPlayList = document.querySelector(".dj-playlist")
const musicSearch = document.querySelector(".music-search")

djList.addEventListener("click", e => {
    console.log(e)
})

djPlayList.addEventListener("click", e => {
    console.log(e)
})

musicSearch.addEventListener("click", e => {
    console.log(e)
})




var staticSongsData = [
    { 'name': 'Electric Dreams', 'artist': 'Eleanor Smith', 'duration': '2:30' },
    { 'name': 'Midnight Serenade', 'artist': 'Daniel Ramirez', 'duration': '2:45' },
    { 'name': 'Crystal Clear', 'artist': 'Olivia Anderson', 'duration': '3:00' },
    { 'name': 'Lost in the Echo', 'artist': 'Michael Turner', 'duration': '2:45' },
    { 'name': 'Summer Breeze', 'artist': 'Sophia Johnson', 'duration': '2:30' },
    { 'name': 'Whispers in the Wind', 'artist': 'Liam Martinez', 'duration': '2:45' },
    { 'name': 'Infinite Love', 'artist': 'Ava White', 'duration': '3:00' },
    { 'name': 'Moonlight Sonata', 'artist': 'Gabriel Lee', 'duration': '2:30' },
    { 'name': 'Echoes of the Past', 'artist': 'Isabella Hall', 'duration': '2:45' },
    { 'name': 'Rhythm of the Heart', 'artist': 'Jacob Davis', 'duration': '3:00' },
    { 'name': 'Dreamland', 'artist': 'Emily Robinson', 'duration': '2:30' },
    { 'name': 'Rainy Day Blues', 'artist': 'Benjamin Adams', 'duration': '2:45' },
    { 'name': 'Golden Sunshine', 'artist': 'Zoe Clark', 'duration': '3:00' },
    { 'name': 'Starry Nights', 'artist': 'Nathan Wright', 'duration': '2:30' },
    { 'name': 'Sunset Dreams', 'artist': 'Grace Harris', 'duration': '2:45' },
    { 'name': 'Dancing in the Rain', 'artist': 'William Foster', 'duration': '3:00' },
    { 'name': 'Ocean Waves', 'artist': 'Aria Turner', 'duration': '2:30' },
    { 'name': 'Eternal Flame', 'artist': 'Ethan Brown', 'duration': '2:45' },
    { 'name': 'Harmonys Embrace', 'artist': 'Luna Rodriguez', 'duration': '3:00' },
    { 'name': 'Mystic Journey', 'artist': 'David Hall', 'duration': '2:30' },
    { 'name': 'Secret Garden', 'artist': 'Chloe Lewis', 'duration': '2:45' },
    { 'name': 'Urban Groove', 'artist': 'Mason Smith', 'duration': '3:00' },
    { 'name': 'Heavenly Bliss', 'artist': 'Sophie Adams', 'duration': '2:30' },
    { 'name': 'Whispers of Time', 'artist': 'Noah Anderson', 'duration': '2:45' },
    { 'name': 'Silent Nightfall', 'artist': 'Avery Martin', 'duration': '3:00' },
    { 'name': 'Summer Melodies', 'artist': 'Emma Wilson', 'duration': '2:30' },
    { 'name': 'Autumn Leaves', 'artist': 'Logan Martinez', 'duration': '2:45' },
    { 'name': 'Mystical Waters', 'artist': 'Lily Johnson', 'duration': '3:00' },
    { 'name': 'Serendipity', 'artist': 'Samuel Turner', 'duration': '2:30' },
    { 'name': 'Silver Lining', 'artist': 'Ella Davis', 'duration': '2:45' },
    { 'name': 'Celestial Echo', 'artist': 'Daniel Turner', 'duration': '3:00' },
    { 'name': 'Whispering Pines', 'artist': 'Aiden Foster', 'duration': '2:30' },
    { 'name': 'Reflections', 'artist': 'Aria Garcia', 'duration': '2:45' },
    { 'name': 'Sapphire Skies', 'artist': 'Noah White', 'duration': '3:00' },
    { 'name': 'Aurora Borealis', 'artist': 'Sophia Martin', 'duration': '2:30' }
]

var staticDJ = [
    {
        'name': 'DJ GrooveFusion',
        'playlist': 'Funky Mix',
        'time': '12:00',
        'date': '2023-10-19',
        'songs': [
            { 'name': 'Electric Dreams', 'artist': 'Eleanor Smith', 'duration': '3:15' },
            { 'name': 'Midnight Serenade', 'artist': 'Daniel Ramirez', 'duration': '2:45' },
            { 'name': 'Crystal Clear', 'artist': 'Olivia Anderson', 'duration': '3:00' },
            { 'name': 'Lost in the Echo', 'artist': 'Michael Turner', 'duration': '2:30' },
            { 'name': 'Summer Breeze', 'artist': 'Sophia Johnson', 'duration': '2:45' },
            { 'name': 'Whispers in the Wind', 'artist': 'Liam Martinez', 'duration': '3:00' }
        ]
    },
    {
        'name': 'DJ ElectroGroove',
        'playlist': 'Electronica Vibes',
        'time': '15:00',
        'date': '2023-10-19',
        'songs': [
            { 'name': 'Infinite Love', 'artist': 'Ava White', 'duration': '2:30' },
            { 'name': 'Moonlight Sonata', 'artist': 'Gabriel Lee', 'duration': '2:45' },
            { 'name': 'Echoes of the Past', 'artist': 'Isabella Hall', 'duration': '3:00' },
            { 'name': 'Rhythm of the Heart', 'artist': 'Jacob Davis', 'duration': '2:30' },
            { 'name': 'Dreamland', 'artist': 'Emily Robinson', 'duration': '2:45' },
            { 'name': 'Rainy Day Blues', 'artist': 'Benjamin Adams', 'duration': '3:00' }
        ]
    },
    {
        'name': 'DJ ChillZone',
        'playlist': 'Relaxing Grooves',
        'time': '18:00',
        'date': '2023-10-19',
        'songs': [
            { 'name': 'Golden Sunshine', 'artist': 'Zoe Clark', 'duration': '2:30' },
            { 'name': 'Starry Nights', 'artist': 'Nathan Wright', 'duration': '2:45' },
            { 'name': 'Sunset Dreams', 'artist': 'Grace Harris', 'duration': '3:00' },
            { 'name': 'Dancing in the Rain', 'artist': 'William Foster', 'duration': '2:30' },
            { 'name': 'Ocean Waves', 'artist': 'Aria Turner', 'duration': '2:45' },
            { 'name': 'Eternal Flame', 'artist': 'Ethan Brown', 'duration': '3:00' }
        ]
    },
    {
        'name': 'DJ TranquilBeats',
        'playlist': 'Calm Melodies',
        'time': '21:00',
        'date': '2023-10-19',
        'songs': [
            { 'name': 'Harmonys Embrace', 'artist': 'Luna Rodriguez', 'duration': '2:30' },
            { 'name': 'Mystic Journey', 'artist': 'David Hall', 'duration': '2:45' },
            { 'name': 'Secret Garden', 'artist': 'Chloe Lewis', 'duration': '3:00' },
            { 'name': 'Urban Groove', 'artist': 'Mason Smith', 'duration': '2:30' },
            { 'name': 'Heavenly Bliss', 'artist': 'Sophie Adams', 'duration': '2:45' },
            { 'name': 'Whispers of Time', 'artist': 'Noah Anderson', 'duration': '3:00' }
        ]
    }
]

//calendar event listener, listens for input
var dateField = document.querySelector('#DJ-Calendar');
dateField.addEventListener('input',
    function () {
        var date = dateField.value;
        console.log(date);
        var filteredTable = filterDates(staticDJ, date);
        buildEmptyTableDJ(filteredTable, djList, 15);

    })
//build table first to initialize it upon dom load
buildEmptyTableDJ([], djList, 15);

//debug
console.log(`${dateField.value}T00:00`)
console.log(staticDJ[1].date)

//filters the dates and creates and returns a new list with it
function filterDates(data, value) {
    var returnList = [];
    for (var i = 0; i < data.length; i++) {
        let date = data[i].date
        if (date.includes(value)) {
            returnList.push(data[i])
            console.log(data[i].name)
        }
    }
    return returnList;
}


//builds empty table for dj
function buildEmptyTableDJ(data, tableList, amountRow) {
    var table = tableList;
    table.innerHTML = `<tr>
                        <th>DJ</th>
                        <th>Playlist</th>
                        <th>Time slot</th>
                       </tr>`;

    for (var i = 0; i < amountRow; i++) {

        let row = document.createElement("tr");
        if (data[i] != null) {
            row.innerHTML = `<td>${data[i].name}</td>
                        <td>${data[i].playlist}</td>
                        <td>${data[i].time}</td>`;
                        row.addEventListener("click", function(){
                            var cells = this.getElementsByTagName("td");

                            console.log(cells[0].textContent)
                        })
        }
        else {
            row.innerHTML = `<td></td>
            <td></td>
            <td></td>`;

        }
        if (i % 2 == 0) {
            row.style.backgroundColor = "#72808a";
        }
        else {
            row.style.backgroundColor = "#575e66";
        }
        row.style.color = "Whitesmoke" //font color

        highlightRow(row, tableList)


        table.appendChild(row);
    }


}





function highlightRow(row, tableList) {
    row.addEventListener("click", function () {
        var allRows = tableList.getElementsByTagName("tr");
        //Idea is to set default color, and then highlight at the end
        for (var j = 0; j < allRows.length; j++) {
            if (j % 2 == 0) {
                allRows[j].style.backgroundColor = "#575e66";
            }
            else {
                allRows[j].style.backgroundColor = "#72808a";
            }


        }

        //Highlight *this* row
        this.style.backgroundColor = "Blue";
        this.style.color = "whitesmoke";

        //Return data
        var cells = this.getElementsByTagName("td");
        console.log("Highlight " + cells[0].textContent + " " + cells[1].textContent);
    })
}

//This function will build a scrollable table according to its data and table structure
//songs rows are highlightable and returns meta data.
function buildMusicTable(data, tableList) {
    var table = tableList;

    table.innerHTML = `<thead>
                            <tr>
                                <th>Results</th>
                                <th>Artist</th>
                            </tr>
                        </thead>`;
    //populates table with data
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${data[i].name}</td>
                        <td>${data[i].artist}</td>`;

        //staggers coloration of rows
        if (i % 2 == 0) {
            row.style.backgroundColor = "#72808a";
        }
        else {
            row.style.backgroundColor = "#575e66";
        }
        row.style.color = "Whitesmoke" //font color

        //Add event listener for clicks to highlight row
        highlightRow(row, tableList);
        //Add the row to the table.
        table.appendChild(row);
    }

}

function filterTable(value, tableData) {
    var returnList = [];

    for (var i = 0; i < tableData.length; i++) {
        value = value.toLowerCase();
        let title = tableData[i].name.toLowerCase();

        if (title.includes(value)) {
            returnList.push(tableData[i]);
            console.log(title)
            console.log(value)

        }
    }

    return returnList;
}
buildMusicTable(staticSongsData, musicSearch)

var searchType = document.querySelector(".search-bar"); //event type
searchType.addEventListener("keyup", e => {             //searches through list on keyup
    //console.log(searchType.value)
    let filteredTable = filterTable(searchType.value, staticSongsData);
    buildMusicTable(filteredTable, musicSearch)

})



var container = document.querySelector(".search-container");
container.style.height = "300px";
container.style.overflowY = "scroll";
