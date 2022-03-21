import React, {useState, useEffect} from "react";


function App () {
const [dogFetch, setDogFetch] = useState([])
const [isLoading, setIsLoading] = useState("")

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(response => response.json())
		.then(data => {
			setDogFetch(data.message)
			setIsLoading(true)
		});
	}, [])
	

		if (!isLoading) return <p>"Loading..."</p>

		return  ( <div><img src={dogFetch} alt="A Random Dog"></img></div>

		)

	
	
	
	
	}





export default App