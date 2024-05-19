import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';

const Team = ({team, setMemberCount, showMembers}) => { // team object
    useEffect(() => {  // when team component is fully loaded then run this component
        setMemberCount(prev => (
            {
                ...prev,       // spread syntax
                [team.name] : team.members.length
            }
        ) )   
    }, [] )
    return <div> 
        <h2 className="text-center my-3">
            {team.name}
        </h2>
        {showMembers && <ul className="list-group "> {/* ?? = */}
            {
                team.members.map((member, index) => // looping
                    <li className="list-group-item list-group-item-light" key = {index}>
                        {member}
                    </li>
                )
            }
        </ul> 
        }
    </div>
 
} 

export default Team

