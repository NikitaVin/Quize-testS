import styled from '@emotion/styled';

export const WrapperFinish = styled.div({
  width: '70vw',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  background: 'white',
  padding: '2%',
  borderRadius: '30px',
  position: 'relative',
});

export const FinishImg = styled.img({
  height: '20vh',
  width: '15vw',
});

export const ButtonBlock = styled.div({
  display: 'flex',
  width: '25vw',
  justifyContent: 'space-evenly',
});

export const FinishRestart = styled.button({
  width: '12vw',
  height: '6vh',
  marginBottom: '10px',
  marginRight: '10px',
  border: '0',
  borderRadius: '8px',
  backgroundColor: '#665FC9',
  cursor: 'pointer',
  position: 'relative',
  fontWeight: '500',
  '&:hover': {
    width: '14vw',
    height: '6vh',
    backgroundColor: '#a618b9',
    transition: 'all 0.4s ease-in-out',
  },
});

export const FinishRestartImg = styled.img({
  width: '10%',
  height: '35%',
  position: 'absolute',
  left: '6%',
  transitionDuration: '0.8s',
  transitionProperty: 'transform',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
});

export const FinishBlockText = styled.p({
  marginBottom: '10px',
});
