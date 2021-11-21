function Modal(props){
  console.log(props);
  function handleCross(){
    props.callback();
  }
  return (
    <section id={props.id} className="modal absolute _width-500 p-10 bg-indigo-50 _margin-auto">
      
      <article className="image-wrapper-modal relative">
        <img className="w-full" src={props.Images[0]} alt="" />
        <span onClick={handleCross} className="absolute top-0 right-0 p-5  text-3xl p-5 rounded-full bg-gray-400 m-5 z-10">X</span>
      </article>
      <article className="modal-description flex flex-col">
        <h2>
          Title : {props.Title}
          <span>Released Year: {props.Year}</span>  
        </h2>
        <span>{props.Released}</span>
        <span>Genre: {props.Genre}</span>
        <span>Director :{props.Director}</span>


      </article>
    </section>
  )
}
export default Modal;