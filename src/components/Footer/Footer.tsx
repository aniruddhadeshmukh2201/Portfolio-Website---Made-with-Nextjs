





const Footer = () => {
    const social = ["Github","Twitter", "LinkedIn"];
    return (
        <div className="p-[24px] border-t-2 ">
            <div className="flex flex-col gap-2 ">
                {
                    social.map((item : string, index : number) => {
                        return (
                            <div key={index} className="">
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Footer;