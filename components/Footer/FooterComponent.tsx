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
    <div className="w-full flex justify-center bg-primary px-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-tertiary bg-primary w-full max-w-[1040px] py-[40px] text-center text-sm">
        <div>© Aniruddha Deshmukh | All Rights Reserved</div>

        <div className="flex gap-4 mt-4 md:mt-0">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="text-white font-light text-sm hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
