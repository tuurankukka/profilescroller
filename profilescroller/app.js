const data = [
    {
        name: 'Matti Meikalainen',
        age: 32,
        gender: 'male',
        loonkingfor: 'female',
        location: 'Helsinki, FIN',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name: 'Maija Meikalainen',
        age: 22,
        gender: 'female',
        loonkingfor: 'male',
        location: 'Tampere, FIN',
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
    },
    {
        name: 'Pentti Hirvonen',
        age: 30,
        gender: 'male',
        loonkingfor: 'female',
        location: 'Turku, FIN',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name} </li>
            <li class="list-group-item">Age: ${currentProfile.age} </li>
            <li class="list-group-item">Location: ${currentProfile.location} </li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.loonkingfor} </li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}