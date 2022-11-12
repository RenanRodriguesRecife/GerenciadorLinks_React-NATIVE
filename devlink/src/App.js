export default function App(){
  return(
    <div>
      <h1>Meu primeiro projeto</h1>
      <br/>
      <Aluno nome="Lucas Luna" curso="Tester"/>

      <Aluno nome="Luna" curso="Dev"/>
    </div>
  )
}


function Aluno({nome, curso}){
  return(
    <div>
      <h2>Bem vindo {nome}</h2>
      <h3>Curso atual: {curso}</h3>
    </div>
  )
}