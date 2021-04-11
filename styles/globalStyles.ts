import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
root{
  width: 100%; 
}
body{
  background: #FBFBFB;
  font-family: 'Montserrat', sans-serif;
}
h1{
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0rem; 
}
h2{
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: 0.016rem; 
}
h3{
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0rem; 
}
h4{
  font-size: 1.25rem;
  font-weight: 400; 
  letter-spacing: 0.009rem; 
}
p{
  font-size: 1.15rem;
  font-weight: 400; 
  letter-spacing: 0.031rem; 
  line-height: 1.2;
}
small{
  font-size: 0.875rem;
  font-weight: 500; 
}
`;

export default GlobalStyle;
