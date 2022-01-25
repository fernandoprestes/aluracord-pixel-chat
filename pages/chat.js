import { Box } from '@skynexui/components'
import appConfig from '../config.json'

export default function Chat() {
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '5px',
        padding: '32px',
        margin: '16px',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        border: '1px solid',
        borderColor: appConfig.theme.colors.primary[800],
        backgroundColor: appConfig.theme.colors.neutrals[800]
      }}
    ></Box>
  )
}
