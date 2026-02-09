import { Wrapper } from "./Wrapper";
import { UserCard } from "./UserCard";
export default function App() {
  const users=[
    {name:"virat Kohli",role:"Batsman",country:"India"},
    {name:"MS Dhoni",role:"WK-Batsman",country:"India"},
    {name:"Jasprit Bumrah",role:"Bowler",country:"India"},
    {name:"Kane Williamson",role:"Batsman",country:"New Zealand"},
    {name:"Trent Boult",role:"Bowler",country:"New Zealand"},
    {name:"Steve Smith",role:"Batsman",country:"Australia"},
    {name:"Pat Cummins",role:"Bowler",country:"Australia"},
  ]
  return (
    <div>
      <h1>User Dashboard</h1>
      <Wrapper title="User List">
        {users.map((data)=><UserCard data={data}/>)}
      </Wrapper>
    </div>
  )
}