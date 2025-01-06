const NotFound = () => {
  return (
    <>
      <div className="grid gap-y-4  w-full max-w-5xl mx-auto place-content-center place-items-center min-h-screen ">
        <h1 className="text-[70px] font-semibold  text-center">
          404 Not Found
        </h1>
        <p className="text-[20px] text-center ">
          Your visited page not found. You may go home page.
        </p>
        <a
          href="#"
          className="bg-[#DB4444] mt-[40px] p-3 w-[200px] text-center cursor-pointer rounded-md text-white "
        >
          Back to home page
        </a>
      </div>
    </>
  );
};

export default NotFound;
