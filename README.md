# Imersão React

### Aula 1: Pixel Chat: Criando o nosso projeto Aluracord

Começando com React criando área de login no Aluracord, criando tudo do ZERO: desde o package.json até os arquivos bases do Next.js para iniciar nosso projeto e ter o CSS in JS com styled-jsx para cuidar da camada de estilo da nossa aplicação.

- [x] Iniciar um projeto Next.js;
- [x] Criar components com React usando CSS in JS;
- [x] Estrutura inicial de um projeto Next.js;
- [x] Passar propriedades para components;
- [x] Customizar o Aluracord usando o Coolors para gerar a paleta de cores.
- [x] Deploy na Vercel.

### Aula 2: state, novas paginas e navegação SPA vs Tradicional

Como lidar com o state do React e entender melhor o que é uma SPA (Single Page Application).

- [x] Entender melhor o que é um SPA;
- [x] Conhecer o useState do React;

```
const [username, setUsername] = useState('')
```

- [x] Como trabalhar com eventos no React onSubmit, onClick;

```
  onSubmit={handleSubmit}
```

```
  onChange={event => setUsername(event.target.value)}
```

- [x] Conhecer o useRouter do next/router;

```
import { useRouter } from 'next/router'

export function default Home(){
  const router = useRouter()

  function handleSubmit(event) {
    event.preventDefault()
    router.push('/chat')
  }

  ...
}

```

## Aula 3: Chat offline. Aprimorando as habilidades com State

Criar a estrutura do nosso chat e fazer ele funcionar inicialmente sem nenhum Back-End.

- [x] Entender mais de como trabalhar com state no React;
- [x] Trabalhar com arrays no state;

```
setMessageList([messages, ...messageList])
```

- [x] Enviar mensagem com o botão
- [x] Colocar um botão para apagar mensagem

```
function handleDelete(event) {
    const idMessage = +event.target.dataset.id

    const newArrMsg = messageList.filter(message => {
      return message.id != idMessage
    })

    setMessageList(newArrMsg)
  }
```

## Aula 4: Integrando com o Supabase.io

Integrar com o [Supabase](https://supabase.com/)! Uma ferramenta de "Back-End as a Service" que vai nos ajudar a ter um banco de dados real time para guardar as mensagens do nosso chat.

- [x] Supabase

```
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

```

- [x] useEffect no React
- [x] Adição de Skeleton de loading

```
  {loadingSkeleton ? (
    <Skeleton />
  ) : (
    <MessageListRender
      mensagens={messageList}
      handleDelete={handleDelete}
    />
  )}
```
