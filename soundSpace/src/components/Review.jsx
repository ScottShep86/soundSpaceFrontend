/* import React from 'react' */

function Review() {
  return (
    <div>
    Review
    <form>
        <label>Created By: <input type='text'/></label>
        <label>Rating: <input type='number'/></label>
        <label>Comment: <textarea/></label>
        <button type='submit'>Submit Review</button>
    </form>
    </div>
  )
}

export default Review