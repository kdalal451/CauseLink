import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";

const RegisterFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="bg-gray-600 flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[77px] w-full">
          <Img
            className="sm:flex-1 h-[132px] md:h-auto object-cover w-[13%] sm:w-full"
            src="images/img_rectangle5.png"
            alt="rectangleFive"
          />
          <Text
            className="common-pointer ml-11 sm:ml-[0] sm:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/home1")}
          >
            Home
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[41px] sm:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/")}
          >
            Search
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[38px] sm:mt-0 mt-[74px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/signin")}
          >
            Register your organization
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/faqs")}
          >
            FAQs
          </Text>
          <Button
            className="common-pointer cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[344px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/signin")}
            color="purple_200"
            size="md"
            variant="fill"
          >
            Sign Out
          </Button>
        </div>
        <Text
          className="mt-[34px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
          size="txtJudsonBold48"
        >
          Organization Details
        </Text>
        <div className="md:h-[1086px] h-[1109px] sm:h-[1159px] max-w-[1285px] mt-[13px] mx-auto md:px-5 relative w-full">
          <div className="bg-black-900 h-6 ml-auto mr-[179px] mt-[461px] w-6"></div>
          <div className="absolute bg-gray-600_01 flex flex-col md:gap-10 gap-[72px] h-full inset-[0] items-center justify-center m-auto p-[42px] md:px-10 sm:px-5 rounded-[50px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtJudsonBold40Black900"
            >
              {" "}
              Details
            </Text>
            <div className="flex flex-col items-start justify-start mb-[271px] w-[84%] md:w-full">
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Email Address{" "}
              </Text>
              <Img
                className="h-[13px] md:ml-[0] ml-[977px] mt-5"
                src="images/img_thumbsup_gray_600_02.svg"
                alt="thumbsup"
              />
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-0.5 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Phone Number
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Address
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                About Your Organization ...
              </Text>
              <div className="bg-white-A700 flex sm:flex-col flex-row gap-[18px] items-center justify-start mt-[37px] p-[15px] rounded-[15px] shadow-bs w-full">
                <Input
                  name="browseCounter"
                  placeholder="Browse ..."
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:ml-[0] ml-[54px] w-[19%] sm:w-full"
                ></Input>
                <Text
                  className="text-black-900 text-xl"
                  size="txtJudsonRegular20Black900"
                >
                  Upload Your Image
                </Text>
              </div>
              <Button
                className="common-pointer !text-gray-900_01 cursor-pointer font-bold leading-[normal] min-w-[176px] md:ml-[0] ml-[423px] mt-[63px] rounded-[15px] shadow-bs text-3xl sm:text-[26px] md:text-[28px] text-center"
                onClick={() => navigate("/userdashboard")}
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-[222px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default RegisterFivePage;
