import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL= 'https://randomuser.me/api'

const App = () => {
  const [loading, setLoading] = useState(0);
	const [posts, setPosts] = useState([]);

	// GET api with Axios
  const fetchPost = async () => {
    try {
      let response = await axios.get(baseURL);
      const info=response.data.results
      setPosts(info);
      localStorage.setItem("myData", JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };
	useEffect(() => {
		fetchPost();
	},[loading]);
  const resetFunc=()=>{
    setLoading(loading+1)
  }
	return (
		<div className="app">
      <div className="App">
                    {posts.map((user,index) =>{
                      const {title, first,last}=user.name
                    return <center key={index}>
                      <table>
                        <tbody>
                        <tr>
    <th>Name</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td><span className="tooltip" id='titleSpan'>{title}
    <span className="tooltiptext">title</span> </span><span className="tooltip">{first}
    <span className="tooltiptext">First Name</span> </span><span className="tooltip">{last}
    <span className="tooltiptext">Last Name</span></span></td>
    <td><span className="tooltip">{user.email}
    <span className="tooltiptext">E-mail</span></span></td>
  </tr>
  
                        </tbody>
</table>  
<button onClick={resetFunc}>Refresh</button>                    
                      </center>
                      })}
            </div>
		</div>
	);
};

export default App;