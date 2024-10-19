const FooterComponent = () => {
  const social = [
    { name: "Github", link: "https://github.com/aniruddhadeshmukh2201" },
    { name: "Twitter", link: "https://x.com/AniruddhaDeshm6" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aniruddha-deshmukh-abb44112b/",
    },
  ];
  return (
    <div className=" w-full flex justify-center bg-primary">
      <div className="flex justify-between  text-tertiary  bg-primary w-[1040px] py-[40px] text-center text-sm ">
        <div>© Aniruddha Deshmukh | All Rights Reserved</div>

        <div className=" flex gap-2 bg-secondary">
          {social.map((item: any, index: number) => {
            return (
              <div className=" text-white font-light text-sm" key={index}>
                <a target="_blank" href={item.link}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
