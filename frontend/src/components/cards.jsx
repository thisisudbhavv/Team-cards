import './cards.css'

export function Card({teams}) {
    
    return <div className='group'>
        <h1 className='heading'>Team cards are below</h1>
        {teams.map(function(team){
            return <div className='card'>
                <h1>{team.name}</h1>
                <p>{team.bio}</p>
                <h3>Interests</h3>
                <ul>
                    {team.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
                <button className='cardButton' onClick={() => window.open(team.linkedin)}>LinkedIn</button>
                <button className='cardButton' onClick={() => window.open(team.x)}>X (Twitter)</button>
            </div>
        })}
    </div>
}