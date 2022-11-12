export default function App(){
  return(
    <div>
      <h1>Meu primeiro projeto</h1>
      <br/>
      <Aluno nome="Lucas Luna"/>

      <Aluno/>
    </div>
  )
}


function Aluno({nome}){
  return(
    <div>
      <h2>Bem vindo {nome}</h2>
    </div>
  )
}