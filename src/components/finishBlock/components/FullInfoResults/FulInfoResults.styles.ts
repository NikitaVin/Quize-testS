import styled from '@emotion/styled';

export const ResultsWrapper = styled.div({
  display: 'flex',
  overflowY: 'scroll',
  width: '80%',
});

export const ResultsList = styled.ul({
  padding: '0',
  width: '100%',
});

export const ResultsContainer = styled.li<{ correct?: boolean }>(
  {
    background: 'rgb(240, 240, 240)',
    padding: '1% 0% 1% 1%',
    margin: '2% 5% 2% 0',
    borderRadius: '8px',
    alignItems: 'center',
  },
  ({ correct }) => ({
    border: correct ? 'green 2px solid' : 'red 2px solid',
  })
);
