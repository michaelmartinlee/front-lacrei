import styled from 'styled-components'

export const StatesSelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    margin-top: 3rem;
  }
  > select {
    margin: 0 0 3rem 0;
    height: 52px;
    border-radius: 10px;
    background-color: white;
    border: none;
    padding: 8px;
    width: 100%;
    min-width: calc(375px - 5rem);
  }
`
