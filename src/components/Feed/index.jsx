import React from "react";
import StoryReel from "./StoryReel/index";
import MessageSender from "./MessageSender/index";
import Posts from "./Post_/index";
import "./index.css";

function index() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Posts
        username='Maria de maria'
        profilePic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        image="https://tmssl.akamaized.net/images/foto/normal/lionel-messi-ballon-dor-2019-1592819026-41968.jpg"
        message="Lionel is the best player of world"
      />
      <Posts
        username='Maria de maria'
        profilePic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        image="https://tmssl.akamaized.net/images/foto/normal/lionel-messi-ballon-dor-2019-1592819026-41968.jpg"
        message="Lionel is the best player of world"
      />
      <Posts
        username='Maria de maria'
        profilePic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        image="https://tmssl.akamaized.net/images/foto/normal/lionel-messi-ballon-dor-2019-1592819026-41968.jpg"
        message="Lionel is the best player of world"
      />
    </div>
  );
}

export default index;
