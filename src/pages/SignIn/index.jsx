import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SignInPage = () => {
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
            onClick={() => navigate("/registerorg")}
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
            className="cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[344px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            color="purple_200"
            size="md"
            variant="fill"
          >
            Sign In
          </Button>
        </div>
        <div className="bg-purple-200 flex flex-col items-center justify-end mt-[122px] p-[68px] md:px-5 rounded-[50px] w-[54%] md:w-full">
          <Text
            className="mt-1.5 md:text-5xl text-[70px] text-black-900"
            size="txtJudsonBold70"
          >
            Sign in to CauseLink{" "}
          </Text>
          <Text
            className="mt-[34px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtJudsonRegular30Black900"
          >
            Enter your email address below
          </Text>
          <div className="flex flex-col items-center justify-start mt-[46px] w-[71%] md:w-full">
            <Text
              className="bg-white-A700 h-[74px] justify-center pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-xl w-[468px]"
              size="txtJudsonRegular20Black900"
            >
              Email Address{" "}
            </Text>
            <Text
              className="bg-white-A700 h-[74px] justify-center mt-[18px] sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900 text-xl w-[468px]"
              size="txtJudsonRegular20Black900"
            >
              Password
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[468px] sm:min-w-full mt-[25px] rounded-[37px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/username")}
              color="deep_purple_300"
              size="lg"
              variant="fill"
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="bg-gray-600 flex flex-col items-center justify-end mt-[119px] p-[9px] w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start mt-[9px] md:px-5 w-[18%] md:w-full">
            <Img
              className="h-[121px] md:h-auto rounded-[50%] w-[55%]"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                <Img
                  className="h-9 mt-0.5"
                  src="images/img_riinstagramfill.svg"
                  alt="riinstagramfill"
                />
                <Img
                  className="h-[38px]"
                  src="images/img_icoutlinefacebook.svg"
                  alt="icoutlinefacebo"
                />
                <Img
                  className="h-[33px] mt-0.5"
                  src="images/img_mditwitter.svg"
                  alt="mditwitter"
                />
                <Img
                  className="h-9 mt-0.5"
                  src="images/img_biyoutube.svg"
                  alt="biyoutube"
                />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtJudsonRegular24"
              >
                <>
                  Terms and Conditions
                  <br />
                  Contact CauseLink
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
