import { Box, Container, Flex } from '@mantine/core'
import { SVGProps } from 'react'
import Link from 'next/link'

export function AppHeader() {
  return (
    <Box py={16} style={{ zIndex: 100 }}>
      <Container>
        <Flex align="center" justify="center">
          <Link href={'/'} style={{ fontSize: 0 }}>
            <HeaderLogo width={48} />
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

const HeaderLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <mask id="a" width={36} height={36} x={0} y={0} maskUnits="userSpaceOnUse">
      <rect width={36} height={36} fill="#FFF" rx={72} />
    </mask>
    <g mask="url(#a)">
      <path fill="#ff7d10" d="M0 0h36v36H0z" />
      <rect
        width={36}
        height={36}
        fill="#0a0310"
        rx={6}
        transform="rotate(155 20.61 18.054) scale(1.2)"
      />
      <g transform="rotate(-5 -26.308 -18.356)">
        <path stroke="#FFF" strokeLinecap="round" d="M15 21c2 1 4 1 6 0" />
        <rect width={1.5} height={2} x={14} y={14} fill="#FFF" rx={1} />
        <rect width={1.5} height={2} x={20} y={14} fill="#FFF" rx={1} />
      </g>
    </g>
  </svg>
)
