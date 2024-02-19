import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Switch, Text } from "components";
import Footer from "components/Footer";

const UserDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[78px] w-full">
            <Img
              className="md:flex-1 h-[132px] sm:h-auto object-cover w-[13%] md:w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
            <Text
              className="common-pointer md:ml-[0] ml-[43px] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/hometwo")}
            >
              Home
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[41px] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/")}
            >
              Search
            </Text>
            <Text
              className="md:ml-[0] ml-[38px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
            >
              My Dashboard
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[34px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
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
              className="md:ml-[0] ml-[381px] md:mt-0 mt-[60px] w-[7%]"
            />
            <Button
              className="common-pointer cursor-pointer leading-[normal] mb-[21px] min-w-[186px] ml-8 md:ml-[0] md:mt-0 mt-[45px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/signin")}
              color="purple_200"
              size="md"
              variant="fill"
            >
              Sign Out
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[39px] mt-[29px] md:px-5 w-[59%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-judson leading-[normal] mb-[17px] min-w-[220px] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/fornewpost")}
              color="purple_200"
              size="md"
              variant="fill"
            >
              New Post
            </Button>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtKadwaBold50"
            >
              CONNECTFOR
            </Text>
          </div>
          <Line className="bg-white-A700_87 h-0.5 mt-[13px] w-full" />
          <Text
            className="common-pointer md:ml-[0] ml-[573px] mt-[183px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700_99"
            size="txtJudsonBold50WhiteA70099"
            onClick={() => navigate("/")}
          >
            No Recent Posts
          </Text>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[459px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
