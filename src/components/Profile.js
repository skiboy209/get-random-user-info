export default function Profile({profile}) {
    if (profile) {
        const fullName = profile.name.title ? `${profile.name.title} ${profile.name.first} ${profile.name.last}` : `${profile.name.first} ${profile.name.last}`
        return (
        <div class="mt-4">
            <img width="200px" src={profile.picture.large} alt={fullName} />
            <ul class="list-none">
            <li>Name: {fullName}</li>
            <li>Gender: {profile.gender}</li>
            <li>Cell: {profile.cell}</li>
            <li>Phone: {profile.phone}</li>
            {/* <li>Location: {profile.street, profile.city, profile.state, profile.country, profile.postcode}</li> */}
            </ul>
        </div>
        )
    } else {
        return null
    }
}