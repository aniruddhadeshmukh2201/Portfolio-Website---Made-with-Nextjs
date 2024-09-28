import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="flex justify-center bg-primary">
      <div className="flex gap-2 justify-between w-[1040px] py-[24px] ">
        <Link className="font-extrabold text-lg uppercase text-white" href={"/"}>Aniruddha Deshmukh</Link>
        <div className="flex gap-5">
          <Link className="text-white menu-item menu-item-type-custom menu-item-object-custom menu-item-184 lg:mx-4 uppercase font-medium text-[15px]" href={"/experience"}>
            Experience
          </Link>
          <Link className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-184 lg:mx-4 uppercase font-medium text-[15px] text-white" href={"/projects"}>
            Projects
          </Link>
          <Link className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-184 lg:mx-4 uppercase font-medium text-[15px] text-white" href={"/books"}>
            About
          </Link>
          <Link className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-184 lg:mx-4 uppercase font-medium text-[15px] text-white" href={"/youtube"}>
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
