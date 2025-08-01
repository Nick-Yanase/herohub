import Template from "./components/template/Template";

export default function HomePage() {
  return (
    <Template headerVer="home">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to HeroHub</h1>
        <p className="mt-4 text-lg">Your hub for all your favorite heroes!</p>
      </div>
    </Template>

  )
}
