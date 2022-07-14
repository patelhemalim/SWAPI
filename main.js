
const URL = `https://swapi.dev/api/planets/?search=Alderaan`

let btn = document.querySelector('#btn');

function fun(event){
   getStarwar()
   //console.log("button clicked")
}
btn.addEventListener('click',fun)

const getStarwar = () => axios.get(URL).then(starwarCallback).catch(errCallback)

const starwarCallback = ({ data: output} ) => {
    let residents = output.results[0].residents

    for(let i=0; i < residents.length; i++){
        axios.get(residents[i]).then(residentCallback).catch(errCallback)
    }
    //console.log(residents)
} 

const body = document.querySelector('body');


const residentCallback = ({data: residenObject}) => {
    const resident = document.createElement('h2')
    const resName = document.createTextNode(`${residenObject.name}`);
    resident.appendChild(resName)
    body.appendChild(resident);
}
const errCallback = err => console.log(err)

