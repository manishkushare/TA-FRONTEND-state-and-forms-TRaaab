import Form from "./Form"
import Validation from './Validation';
function App(){
  return (

    <main>
      <section className="hero">
        <div className="container mx-auto flex justify-center items-center min-h-screen">
          {/* <Form /> */}
          <Validation />
        </div>

      </section>

    </main>
  )
}
export default App;