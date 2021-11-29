function Form3(props) {
  if (props.currentIndex !== 3) {
    return null;
  }
  return (
    <section className="hero ">
      <div className="container mx-auto min-h-screen flex items-center">
        <article className="flex justify-center  ">
          <div className="image w-2/5 border">
            <img
              className="w-full h-auto "
              src="https://cdn.pixabay.com/photo/2012/04/02/12/49/movers-24403_1280.png"
              alt=""
            />
          </div>
          <form action="" className="w-3/5 px-2 flex flex-col justify-center bg-yellow-100 ">
            <div className="progress flex justify-around">
              <button className=" bg-black text-white">
                <span className="flex justify-between items-baseline">
                  <span className="px-2">1</span>
                  <span className="border-l-2 px-2 py-1">Sign Up</span>
                </span>
              </button>
              <button className=" bg-black text-white">
                <span className="flex justify-between items-baseline">
                  <span className="px-2">2</span>
                  <span className="border-l-2 px-2 py-1">Message</span>
                </span>
              </button>
              <button className=" active">
                <span className="flex justify-between items-baseline">
                  <span className="px-2">3</span>
                  <span className="border-l-2 px-2 py-1">Checkbox</span>
                </span>
              </button>
            </div>
            <legend className="py-4 text-center">
              <span>Step 3/3</span>
              <h2 className="text-blue">Checkbox</h2>
            </legend>
            <div className="inputs grid gap-8 grid-cols-2 ">
              <div className="flex flex-col" htmlFor="">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Please enter your firstname"
                />
              </div>
              <div className="flex flex-col" htmlFor="">
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="flex flex-col" htmlFor="">
                <span>Date of Birth</span>
                <input type="date" name="date" id="" placeholder="D.O.B" />
              </div>
              <div className="flex flex-col" htmlFor="">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-span-2  " htmlFor="">
                <span>Address</span>
                <textarea
                  className="w-full"
                  name=""
                  id=""
                  cols="30"
                  rows=""
                ></textarea>
              </div>
            </div>
            {

              props.deciderFunction()
            }
          </form>
        </article>
      </div>
    </section>
  );
}
export default Form3;