const oldList = document.querySelector('ul');
const form = document.querySelector('#form');

form.addEventListener('submit', submitNew);

//get the data as soon as it loads!
getAllLists()

function getAllLists(){
    fetch('http://localhost:3000/comedians')
        .then(r => r.json())
        .then(appendLists)
        .catch(console.warn)
};

function appendLists(data){
    console.log(data)
    data.comedians.forEach(appendList);
};

let newLi;
function appendList(data){
    newLi = document.createElement('li');
    newLi.textContent = `Name: ${data.name} | Age: ${data.age}   |  Status: ${data.status}`

    oldList.append(newLi)
};
//ends here

//create new data and add it on the list
function submitNew(e){
    e.preventDefault();

    const comedianData = {
        name: e.target.name.value,
        age: e.target.age.value,
        status: e.target.status.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(comedianData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/comedians', options)
        .then(r => r.json())
        .then(appendList)
        .catch(console.warn)
};
//ends here