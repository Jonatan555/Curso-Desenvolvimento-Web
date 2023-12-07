import { CardProfile } from "../components/CardProfile";

function calcAge(birth: string) {
  const dateNow = new Date().getTime();
  const dateBirth = new Date(birth).getTime();
  const userAge = dateNow - dateBirth ;
  return Math.floor(userAge / (1000 * 60 * 60 * 24 * 365.25));
}

const dataApi = [
  {id:1, name: "Emanuel", birth: "10-20-1992"},
  {id:2, name: "Eric", birth: "06-24-2006"},
  {id:3, name: "Daniel", birth: "05-26-2007"},
  {id:4, name: "Jonatan" ,birth: "12-01-2004"},
];
export function App() {
  return (
    <>
    <h1>Class 02 Components</h1>

    {dataApi.map(({ id, name, birth }) => {
      return <CardProfile key={id} name={name} birth={birth} calcAge={calcAge} />;
    }    
    )       
    }
    </>
  );
}
