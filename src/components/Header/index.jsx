import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Switch, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[132px] sm:h-auto object-cover w-[12%] md:w-full"
          src="images/img_rectangle5.png"
          alt="rectangleFive"
        />
        <Text
          className="common-pointer mb-[25px] ml-11 md:ml-[0] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
          size="txtJudsonRegular30WhiteA700"
          onClick={() => navigate("/hometwo")}
        >
          Home
        </Text>
        <Text
          className="common-pointer mb-[25px] md:ml-[0] ml-[41px] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
          size="txtJudsonRegular30WhiteA700"
          onClick={() => navigate("/")}
        >
          Search
        </Text>
        <Text
          className="common-pointer mb-[23px] md:ml-[0] ml-[38px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
          size="txtJudsonRegular30WhiteA700"
          onClick={() => navigate("/userdashboardtwo")}
        >
          My Dashboard
        </Text>
        <Text
          className="common-pointer mb-[23px] md:ml-[0] ml-[34px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
          size="txtJudsonRegular30WhiteA700"
          onClick={() => navigate("/faqs")}
        >
          FAQs
        </Text>
        <Switch
          onColor="#291539"
          offColor="#291539"
          onHandleColor="#ffffff"
          offHandleColor="#ffffff"
          value={false}
          className="mb-[39px] md:ml-[0] ml-[374px] md:mt-0 mt-14 w-[7%]"
        />
        <Button
          className="common-pointer cursor-pointer font-judson leading-[normal] mb-[23px] min-w-[186px] md:ml-[0] ml-[39px] mr-[77px] md:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
          onClick={() => navigate("/signin")}
          color="purple_200"
          size="md"
          variant="fill"
        >
          Sign Out
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
