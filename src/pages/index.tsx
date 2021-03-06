
// SSG 

//tudo que eu pego na funcao getServerSideProps é repassado pro componente aqui atraves da props
export default function Home(props) { 
  console.log(props.episodes)
  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps(){ 
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    //retorna um objeto props com os dados que to puxando
    return{
      props: {
        episodes: data,//qualquer nome aqui so o props tem que ser props
      },
      //recebe um num em seguidos pra informar de quanto em quanto tempo quero atualizar a página
      revalidate: 60 * 60 * 8, //a cada 8 h quando um pessoa acessa ela gera uma nova chamada a API, ou seja durante o dia so 3 chamadas
    }
}
