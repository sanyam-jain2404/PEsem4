import{useState} from 'react';
export default function Search() {
    const[find, setFind] = useState("");
    const name=["Laptop","Charger"];
    const student=name.filter((names)=>names.toLowerCase().includes(find.toLowerCase()));
    return(
        <>
            <h2>Demo to show search</h2>
            <input type="text"
            placeholder='Enter key to search'
            value={find}
            onChange={(e)=>setFind(e.target.value)} />
            <ul>
                {student.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}