import { ChatEngine } from 'react-chat-engine'

const ChatsPage = (props) => {
  return (
    <>
      <div style={{ fontFamily: 'Share Tech Mono', fontSize: '16px' }}>
        <ChatEngine
          projectID="" // Your project ID
          userName={props.user.username}
          userSecret={props.user.secret}
          height="100vh"
        />
      </div>
    </>
  )
}

export default ChatsPage
