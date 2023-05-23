/* import React from 'react' */

function Review() {
  return (
    <div>
    Add Review
    <form>
        <label>Created By: <input type='text'/></label>
        <label>Rating: <input type='number' name='rating' min='1' max='5' required/></label>
        <label>Comment: <textarea name='comment' cols='30' rows='10' required/></label>
        <button type='submit'>Submit Review</button>
    </form>
    </div>
  )
}

export default Review