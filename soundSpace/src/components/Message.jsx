import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useParams } from "react-router";


function Message({shouldCheckNew, setShouldCheckNew}) {
    const [comment, setComment] = useState("");
  
    const [errorMessage, setErrorMessage] = useState("");
  
    const { token } = useContext(SessionContext);
    
    const jobId = useParams()

    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/api/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              comment, jobId
            }),
          }
        );
        if (response.status === 201) {
          event.target.reset()
          setComment("")
          setShouldCheckNew(shouldCheckNew + 1)
        } else {
          const errorResponse = await response.json();
          setErrorMessage(errorResponse.message);
        } 
      } catch (error) {
        console.log(error)
      }
      };

      useEffect(() => {
      }, [])


  return (
    <div>
    <h5>Message me:</h5>
    <form onSubmit={handleSubmit}>
        <label><h5>Comment: </h5><textarea name='comment' cols='30' rows='10' value={comment} onChange={(event) => setComment(event.target.value)} required/></label>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <div className="authSection">
        <br></br>
        <button className="formBtn" type='submit'>Submit Message</button>
        <br></br>
        </div>
    </form>
    </div>
  )
}

export default Message