import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const RegisterFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-start justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col items-center w-full">
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
        </div>
        <Text
          className="md:ml-[0] ml-[127px] mt-6 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
          size="txtJudsonBold40"
        >
          Private School Verification
        </Text>
        <div className="flex flex-col md:gap-10 gap-[338px] items-center mt-[51px] w-full">
          <div className="bg-purple-200_87 flex flex-col gap-[17px] items-start justify-center max-w-[1275px] mx-auto p-[26px] md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[46px] mt-[46px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              Verify your private school
            </Text>
            <div className="h-[158px] mb-14 md:ml-[0] ml-[47px] relative w-[97%] md:w-full">
              <div className="h-[148px] md:h-[94px] mb-[-54px] w-[79%] md:w-full z-[1]">
                <Text
                  className="m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtJudsonRegular24Black900"
                >
                  <>
                    Please enter thr NCES School ID associated with New Brewing
                    -San Diego Brewery.
                    <br />
                    Unsure of what an NCES School ID is or how to find it ?
                    Click here.
                  </>
                </Text>
                <Text
                  className="absolute bottom-[6%] left-[4%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtJudsonRegular24Black900"
                >
                  Enter NCES School ID...
                </Text>
              </div>
              <div className="bg-gray-300 border-2 border-gray-900 border-solid flex flex-col items-end justify-start mt-auto mx-auto md:pl-10 sm:pl-5 pl-[1012px] rounded-[15px] w-full">
                <Button
                  className="common-pointer border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[164px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  onClick={() => navigate("/registerfive")}
                  shape="round"
                  color="purple_200"
                  size="md"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RegisterFourPage;
