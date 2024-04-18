
export function Card({teams}) {
    
    return <div className='card'>
        <h1>Team cards are below</h1>
        {teams.map(function(team){
            return <div>
                <h2>{team.name}</h2>
                <p>{team.bio}</p>
                <button onClick={team.linkedin}>LinkedIn</button>
                <button onClick={team.x}>LinkedIn</button>
            </div>
        })}
    </div>
}