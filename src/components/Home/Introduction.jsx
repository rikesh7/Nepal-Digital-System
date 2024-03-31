// import CustomContainer from "../CustomContainer";

function Introduction() {
  const data = [
    "No.1 IoT consulting service provider",
    "only trusted embedded system experts",
    "Product design and consulting experts",
  ];
  return (
   
    <div className="features mb">
      <p>
       <b className="text-uppercase"> Nepal</b>&apos;s <span className="ele">{data[0]}</span>
      </p>
    </div>
   
  );
}

export default Introduction;
