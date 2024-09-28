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
    <div className="bg-secondary flex flex-col align-middle">
      <div className=" bg-secondary  flex justify-center align-middle">
        <ul className="list-disc list-disc-custom flex flex-col gap-2 py-[60px] bg-secondary w-[1040px]">
          {social.map((item: any, index: number) => {
            return (
              <li className="text-white font-light text-sm" key={index}>
                <a target="_blank" href={item.link}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-primary text-tertiary p-5 text-center text-sm">
        © Aniruddha Deshmukh | All Rights Reserved
      </div>
    </div>
  );
};

export default FooterComponent;
