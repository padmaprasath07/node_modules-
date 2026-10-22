      import { useState,useEffect } from 'react'
      import axios from "axios";
      import './App.css'

      function App() {
        const [name, setname] = useState("")
        const [age,setage]=useState("")
        const [edit,setedit]=useState(null)
        const [list,setlist]=useState([]);
        const API="http://localhost:3000/students";
        async function getstudents(){ 
          try{
          const res=await axios.get(API);
          setlist(res.data);
          }catch(error){ 
          console.log("error");
          }
        }
        async function save(e){ 
          try{
          e.preventDefault();
          if(!edit){ 
            await axios.post(API,{name,age});
          }
          else{
            const res=await axios.put(`${API}/${edit}`,{ 
              name,age
            })
           
          }
           setname("");
            setedit(null);
            setage("");
          getstudents()
        }catch(err){ 
          console.log(err);
        }
        }
        function load(l){ 
          console.log(l)
          setname(l.name)
          setedit(l.id)
          setage(l.age)
        }
        async function delete1(l){ 
          try{ 
            await axios.delete(`${API}/${l.id}`);
            getstudents()
          }catch(err){ 

          }
        }
        useEffect(()=>{ 
          getstudents()
        },[]
        );
        return (
          <>
          <form onSubmit={save}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="text" value={age} onChange={(e)=>setage(e.target.value)}/>
            <button type="submit">ADD</button>
          </form>
          <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>age</th>
                </tr>
              </thead>
              <tbody>
                { 
                  list.map(
                    (l)=>( 
                      <tr key={l.id}>
                        <td>{l.name}</td>
                        <td>{l.age}</td>
                        <td><button onClick={()=>load(l)}>edit</button></td>
                        <td><button onClick={()=>delete1(l)}>delete</button></td>
                      </tr>
                    )
                  )
                }
              </tbody>
          
          </table>
          </>
        )
      }

      export default App
