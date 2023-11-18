import React from "./feed.css"
import Share from "./Share"
import Post from "./Post"
import {Posts} from "../pages/dummyData"

export default function Feed() {
  return (
    <div className="feed">
     <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      
    </div>
  )
}
