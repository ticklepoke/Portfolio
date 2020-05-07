import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    transition: all 0.25s linear;
}

a, p, h1, h2, h3 {
    color: ${({ theme }: any) => theme.text};
    transition: all 0.25s linear;
}

.navbar-dynamic-bg {
    background: ${({ theme }: any) => theme.body};
    transition: all 0.25s linear;
}

.navbar-dynamic-text {
    color: ${({ theme }: any) => theme.text};
    transition: all 0.25s linear;
}

.card {
    background: ${({ theme }: any) => theme.bodySecondary};
    transition: all 0.25s linear;
}

.card-title, .card-text, .card-header {
    color: ${({ theme }: any) => theme.body};
    transition: all 0.25s linear;
}


.navbar-dynamic-toggler {
    color: ${({ theme }: any) => theme.text};
    transition: all 0.25s linear;
}

.loading-screen {
    background: ${({ theme }: any) => theme.body};
    transition: all 0.25s linear; 
}
`
