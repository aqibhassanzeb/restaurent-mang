const AddButton = ({ setClose }) => {
  return (
    <>
      <div
        className="btn group w-52 text-center p-2 mt-3 ml-24 md:mx-auto cursor-pointer"
        onClick={() => setClose(false)}
      >
        <span className="btn-span">Add New Product</span>
      </div>
      <div className="w-screen border-b mt-2"></div>
    </>
  );
};

export default AddButton;
