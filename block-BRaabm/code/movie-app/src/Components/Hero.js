import React from 'react';
import Modal from './Modal';
import movies from '../data.json';
class Hero extends React.Component{
  constructor(props){
    super();
    this.state ={
      activeHover : false,
      activeMovieHover :null,
      isModalOpen: false,
      activeMovie : null
    }
  }
  handleHover = (event,key)=> {
    // console.dir(event.target);
    this.setState((prevState)=> {
      return {
        activeHover : !prevState.activeHover,
        activeMovieHover : key,
      }
    },() => {

    })
  }
  checkCondition =(index)=> {
    if(this.state.activeHover){
      if(this.state.activeMovieHover === index){
        return true;
      }
    }
    return  false;
  }
  handleModal=(event=null,index=null)=> {
    this.setState((prevState)=> {
      
      return {
        isModalOpen : !prevState.isModalOpen,
        activeMovie : index,

      }

    },() => {
      
        this.setState({
          activeHover: !this.state.activeHover
        })

      
    } )
  }
  // goToViolation=(id)=>{
  //   const violation = document.getElementById(id); 
  //   window.scrollTo({
  //     top:violation.offsetTop,
  //     behavior:"smooth"
  // });
  // };
  handleDisplay=(isModalOpen,index,movie)=> {
    const id = "modal-id"
    if(isModalOpen){
      if(this.state.activeMovie === index){
        // window.scrollTo( 0, screen.height/2 );
        // this.goToViolation(id)
        return <Modal callback={this.handleModal} id={id} {...movie} state={this.state} />
      }
    }
  }
  
  
  render(){
    return (
      <section className="hero bg-blue-300 ">
        <div className="md:container md:mx-auto ">
          <ul className={
            "movie-list  md:grid grid-cols-3 gap-20 relative"
          }>
            {
              movies.map((movie,index)=> {
                return (
                  <li onMouseEnter={(event)=>{
                    this.handleHover(event,index);
                    
                    } }
                    onMouseLeave = {
                      (event)=> this.handleHover(event,null)
                    }  
                    key={index}  className="w-full p-4 border-2">
                    <div className="image-wrapper w-4/5">
                      <img src={movie.Images[0]} className="w-full" alt="" />
                    </div>
                    <div className="content">
                      <h2>{movie.Title}</h2>
                    </div>
                    {
                      this.checkCondition(index)? <button onClick={(event)=>this.handleModal(event,index)}>Read More</button>:null
                    }
                    {
                      this.state.activeMovie === index? this.handleDisplay(this.state.isModalOpen,index,movie):null
                      
                    }
                  </li>
                )
                
              })
            }
          </ul>
        </div>
      </section>
    )

  }
}
export default Hero;