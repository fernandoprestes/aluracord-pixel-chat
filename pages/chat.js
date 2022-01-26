import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import { useState } from 'react'
import appConfig from '../config.json'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  function handleNewMessage(e) {
    e.preventDefault
    const messages = {
      message: message,
      id: messageList.length,
      from: 'Alguém'
    }
    console.log('message: ', message)
    setMessageList([messages, ...messageList])
    setMessage('')
    console.log('list Message: ', messageList)
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        borderRadius: '5px',
        padding: '32px',
        margin: '16px',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        border: '1px solid',
        borderColor: appConfig.theme.colors.primary[800],
        backgroundColor: appConfig.theme.colors.neutrals[800]
      }}
    >
      <Header />
      <Box
        styleSheet={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          width: '100%',
          height: '80%',
          backgroundColor: appConfig.theme.colors.neutrals[600],
          flexDirection: 'column',
          borderRadius: '5px',
          padding: '16px'
        }}
      >
        <MessageListRender mensagens={messageList} />

        <Box
          as="form"
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TextField
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Insira sua mensagem aqui..."
            type="textarea"
            styleSheet={{
              width: '100%',
              border: '0',
              resize: 'none',
              borderRadius: '5px',
              padding: '6px 8px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              marginRight: '12px',
              color: appConfig.theme.colors.neutrals[200]
            }}
          />
          <Button
            onClick={handleNewMessage}
            variant="tertiary"
            colorVariant="neutral"
            label="OK"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          variant="heading5"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[200],
            fontFamily: 'VT323, monospace',
            fontSize: '2rem'
          }}
        >
          Chat
        </Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageListRender({ mensagens }) {
  console.log('MessageList', mensagens)

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
        maxHeight: '694px'
      }}
    >
      {mensagens.map(mensagem => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              marginRight: '8px',
              fontFamily: 'VT323, monospace',
              fontSize: '1rem',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700]
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px'
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px'
                }}
                src={`https://github.com/vanessametonini.png`}
              />
              <Text
                tag="strong"
                styleSheet={{
                  fontFamily: 'VT323, monospace',
                  fontSize: '1.875rem'
                }}
              >
                {mensagem.from}
              </Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                  fontFamily: 'VT323, monospace',
                  fontSize: '1rem'
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.message}
          </Text>
        )
      })}
    </Box>
  )
}
