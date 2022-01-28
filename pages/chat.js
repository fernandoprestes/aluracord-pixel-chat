import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import { useEffect, useState } from 'react'
import appConfig from '../config.json'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    getListMessage()
  }, [])

  function getListMessage() {
    supabaseClient
      .from('messages')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data)
      })
  }

  function sendNewMessage() {
    const messages = {
      from: 'fernandoprestes',
      message: message
    }
    supabaseClient
      .from('messages')
      .insert([messages])
      .then(({ data }) => {
        setMessageList([data[0], ...messageList])
      })
  }

  function handleNewMessage() {
    sendNewMessage()
    setMessage('')
  }

  function handleDelete(event) {
    const idMessage = event.target.dataset.id

    supabaseClient
      .from('messages')
      .delete()
      .match({ id: idMessage })
      .then(({ data }) => {
        getListMessage()
      })
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
        backgroundColor: appConfig.theme.colors.neutrals[800],
        maxWidth: '95%',
        maxHeight: '95vh'
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
        <MessageListRender
          mensagens={messageList}
          handleDelete={handleDelete}
        />

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
              color: appConfig.theme.colors.neutrals[200],
              fontSize: '1.275rem'
            }}
          />
          <Button
            id="btn"
            onClick={handleNewMessage}
            variant="tertiary"
            colorVariant="neutral"
            label="OK"
            styleSheet={{
              height: '60px',
              marginBottom: '10px'
            }}
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
          id="btn"
          variant="tertiary"
          colorVariant="neutral"
          label="logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageListRender({ mensagens, handleDelete }) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px'
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
              fontFamily: 'VT323, monospace',
              fontSize: '1rem',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700]
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box
                tag="div"
                styleSheet={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end'
                }}
              >
                <Image
                  styleSheet={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px'
                  }}
                  src={`https://github.com/${mensagem.from}.png`}
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
              <Box tag="div">
                <Text
                  tag="span"
                  data-id={mensagem.id}
                  onClick={handleDelete}
                  styleSheet={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: appConfig.theme.colors.neutrals['000'],
                    width: '30px',
                    height: '0px',
                    cursor: 'pointer',
                    marginRight: '10px'
                  }}
                >
                  X
                </Text>
              </Box>
            </Box>
            <Text
              tag="p"
              styleSheet={{
                display: 'flex',
                width: '100%',
                height: '40px',
                borderRadius: '5px',
                padding: '10px',
                backgroundColor: appConfig.theme.colors.neutrals[500],
                alignItems: 'center',
                fontFamily: 'VT323, monospace',
                fontSize: '1.275rem'
              }}
            >
              {mensagem.message}
            </Text>
          </Text>
        )
      })}
    </Box>
  )
}
