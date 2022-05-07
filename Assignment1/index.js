var person = [
    {
        Name: "Kush Bhandari",
        Age: 21,
        DOB: '14/11/2000',
        Email: 'kush@geminisolution.com',
        Company: 'Gemini'
    },
    {
        Name: "Ankit Bisht",
        Age: 21,
        DOB: '11/11/2011',
        Email: 'ankit@geminisolution.com',
        Company: 'Gemini'
    },
    {
        Name: "Akash Singh",
        Age: 21,
        DOB: '12/1/2000',
        Email: 'akash@geminisolution.com',
        Company: 'Gemini'
    }
];

var headers = ['Name', 'Age', 'DOB', 'Email', 'Company'];

(function tableCreate() {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = "2px solid black";
    

    var tr = tbl.insertRow();

    for (var j = 0; j < headers.length; j++) {
        var th = tr.insertCell();
        th.appendChild(document.createTextNode(headers[j]));
        th.style.border = "2px solid black";
        th.style.fontWeight='bold';
        th.style.padding='10px';
    }

    for (var i = 0; i < 3; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 5; j++) {
            var td = tr.insertCell();
            let header = headers[j];
            console.log(person[i][header]);
            td.appendChild(document.createTextNode(person[i][header]));
            td.style.border = "2px solid black";
            td.style.padding='10px';

        }
    }

    body.appendChild(tbl);
})();
