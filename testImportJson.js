function logit(output){
    output.forEach(element => {
        console.log(element)
    })
}


function getDataFromURL (){
    const url = 'https://script.google.com/macros/s/AKfycbwlxYDnTQbuIyqNfXxWeiyIohzZPRH5GpfZmmMgwl3lLa01gERR59d6tWC7yBoSI_1f/exec'
    return fetch(url)
        .then(res => res.json())
        .then(out => logit(out))
        .catch(err => console.log(err)); 
        // testing123
}


getDataFromURL()

