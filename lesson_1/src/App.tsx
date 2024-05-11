import axios from "axios";
import { useEffect, useState } from "react";


interface AppType{
  name:string
  _id:number
}
const App = () => {

const [isloading,setIsLoading] =useState(false)
const[data,setData] = useState<AppType[]>([])
const [value,setValue] = useState("")

  const getData = async () => {
    try {
      const  {data } = await axios.get("https://api-v2.elchocrud.pro/api/v1/149e1ebad07edcfb5ebcd219c932f2be/product");
      console.log(data);
      setData(data)
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false)
    }
  } 


  const postData = async()=>{
    try {
      const {data} = await axios.post('https://api-v2.elchocrud.pro/api/v1/149e1ebad07edcfb5ebcd219c932f2be/product',{name:value})
      console.log(data);
      getData()
      
    } catch (error) {
      
    }

  }



  useEffect(() => {
    getData();
  }, []);
  return <div>
    { isloading ? (
      <h1>loading ...</h1>
    ) : ( 
     <div>
      {
        data.map((item)=>(
        <div key={item._id}>
            <h1>{item.name}</h1>
        </div>
        ))
      }
     </div>
    )
    }
    <div>
      <input type="text " value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={postData}>Add</button>
    </div>
    </div>;
};
export default App;
