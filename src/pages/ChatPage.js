// import React, { useEffect, useState} from 'react'
// import axios from 'axios';

// const ChatPage = () => {

//     const [chats,setChats]=useState([]);
//     const fetchChats = async() =>{
//          try {
//         const response = await axios.get("http://localhost:5000/api/chat");
//         console.log(response.data);
//         setChats(response.data);
//     } catch (error) {
//         console.error("Error fetching chats:", error);
//     }
        
//     };
     
//     useEffect(()=>{
//             fetchChats();
//     },[])

//   return (


//     <div> {chats.map(chat=>(
            
//        <div>  
//         {chat.chatName}
//         </div>
//     ))}
//     </div>
//   )
// };

// export default ChatPage;



import React, { useState } from 'react'
import { ChatState } from '../Context/contextProvider'
import {Box} from '@chakra-ui/react'
import SideDrawer from "../components/mainPages/SideDrawer"
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'

const ChatPage = () => {


 const {user} =  ChatState();
 const [fetchAgain,setFetchAgain] = useState(false)
 
  return (
    <div style={{width:"100%"}}>
      {user && <SideDrawer />}

      <Box 
          display= 'flex'
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          padding="10px"
          
      >

        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
         )}


      </Box>
    </div>
  )

  // return (
  //   <div style={{ width: "100%" }}>
  //     {user && <SideDrawer />}
  //     <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
  //       {user && <MyChats fetchAgain={fetchAgain} />}
  //       {user && (
  //         <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
  //       )}
  //     </Box>
  //   </div>
  // );
}

export default ChatPage