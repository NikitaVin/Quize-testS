import styled from '@emotion/styled';

export const Wrapper = styled.div({
  width: '50vw',
  height: '75vh',
  background: 'white',
  padding: '2%',
  borderRadius: '30px',
  position: 'relative',
  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    width: '50vw',
    height: '50px',
    bottom: '-10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    zIndex: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    width: '47vw',
    height: '50px',
    bottom: '-20px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    zIndex: '1',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

export const Question = styled.article({
  fontSize: '20px',
  fontWeight: '600',
  '@media (max-width: 1025px)': {
    height: 'auto',
  },
  '@media (max-width: 900px)': {
    height: '65px',
    overflowY: 'scroll',
  },
  '@media (max-width: 426px)': {
    fontSize: '18px',
  },
});
