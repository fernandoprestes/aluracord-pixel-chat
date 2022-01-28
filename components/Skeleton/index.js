import { Box, Text } from '@skynexui/components'
import appConfig from './../../config.json'

export const Skeleton = function skeletonComponent() {
  const arrSkeleton = Array.from({ length: 6 })

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
      {arrSkeleton.map(skeleton => {
        return (
          <Text
            key={skeleton}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              backgroundColor: appConfig.theme.colors.neutrals[700]
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
                  alignItems: 'center'
                }}
              >
                <Box
                  className="animatedBackground"
                  styleSheet={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                    backgroundColor: appConfig.theme.colors.neutrals[700]
                  }}
                />
                <Text
                  className="animatedBackground"
                  tag="strong"
                  styleSheet={{
                    width: '100px',
                    height: '20px',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[500]
                  }}
                >
                  <Text
                    tag="span"
                    styleSheet={{
                      width: '100%',
                      height: '30px'
                    }}
                  />
                </Text>
                <Text
                  className="animatedBackground"
                  styleSheet={{
                    marginLeft: '8px',
                    width: '50px',
                    height: '15px',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[500]
                  }}
                  tag="span"
                ></Text>
              </Box>
              <Box tag="div">
                <Text
                  tag="span"
                  styleSheet={{
                    color: appConfig.theme.colors.neutrals[500],
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
              className="animatedBackground"
              tag="span"
              styleSheet={{
                display: 'block',
                width: '100%',
                height: '40px',
                borderRadius: '5px',
                backgroundColor: appConfig.theme.colors.neutrals[500]
              }}
            />
          </Text>
        )
      })}
    </Box>
  )
}
