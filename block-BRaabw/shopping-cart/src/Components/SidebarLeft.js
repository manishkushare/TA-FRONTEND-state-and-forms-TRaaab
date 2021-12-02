function SidebarLeft(props) {
  const allSizes = props.data.products.reduce((acc, cv) => {
    cv.availableSizes.forEach((size) => {
      if (!acc.includes(size)) {
        acc.push(size);
      }
    });
    return acc;
  }, []);
  function handleClick(event) {
    const value = event.target.innerText;
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      const index = props.selectedSize.findIndex((elem) => elem === value);
      props.selectedSize.splice(index, 1);
      return props.callback(props.selectedSize);
    } else {
      event.target.classList.add("active");
      props.selectedSize.push(value);
      return props.callback(props.selectedSize);
    }
  }
  return (
    <section className="sidebar-left   _w-15 px-4 ">
      <span className="grid grid-cols-3 justify-items-center gap-4">
        {allSizes.map((size, index) => {
          return (
            <span
              className="p-4 border h-full _border-circle"
              key={index}
              onClick={handleClick}
            >
              {size}
            </span>
          );
        })}

      </span>
    </section>
  );
}

export default SidebarLeft;
