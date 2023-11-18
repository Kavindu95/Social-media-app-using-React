import React from "./sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FaClipboardQuestion } from "react-icons/fa6";
import { SiFramework } from "react-icons/si";
import { MdEmojiEvents } from "react-icons/md";


export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
          <MdRssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <BsChatSquareQuoteFill />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <BiSolidVideos />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <MdGroups2 />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <BsFillBookmarkStarFill />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <FaClipboardQuestion />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <SiFramework />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <MdEmojiEvents />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} */}
        </ul>

      </div>
    </div>
  )
}

