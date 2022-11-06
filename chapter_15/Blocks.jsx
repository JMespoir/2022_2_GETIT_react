import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  background-color:lightgrey;
`;

const Block = styled.div`
  padding: ${(props)=> props.padding};
  border : 1px solid black;
  border-radius: 1rem;
  background-color: ${(props)=> props.backgroundcolor};
  color:white;
  font-size:2rem;
  font-weight:bold;
  text-align:center;
`;

const blockitems=[
  {
    id:1,
    label:"GET",
    padding:"1rem",
    backgroundcolor:"purple",
  },
  {
    id:2,
    label:"IT",
    padding:"3rem",
    backgroundcolor:"gold",
  },
  {
    id:3,
    label:"짱",
    padding:"2rem",
    backgroundcolor:"silver",
  },
];

function Blocks(props){
  return(
    <Wrapper>
      {blockitems.map((blockitems)=>{
        return(
          <Block
            padding={blockitems.padding}
            backgroundcolor={blockitems.backgroundcolor}
          >
            {blockitems.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;