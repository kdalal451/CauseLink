import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const UserDashboardTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[39px] mt-[29px] md:px-5 w-[59%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-judson leading-[normal] mb-[17px] min-w-[220px] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/fornewposttwo")}
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
          <Text
            className="md:ml-[0] ml-[659px] mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonBold30WhiteA700"
          >
            Recent Posts
          </Text>
          <div className="md:gap-5 gap-[166px] grid grid-cols-3 sm:grid-cols-[repeat(0,_1fr_1512px)_1fr] md:grid-cols-[repeat(1,_1fr_1512px)_1fr] justify-center max-w-[924px] min-h-[auto] mt-[47px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                size="txtJudsonRegular30Black90001"
              >
                Material collection and sorting volunteer
              </Text>
              <Text
                className="text-black-900_01 text-xl"
                size="txtJudsonRegular20Black90001"
              >
                ConnectFor
              </Text>
              <div className="flex flex-row gap-[30px] items-start justify-start mt-4 w-[29%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_group.svg"
                  alt="group"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Ahmedabad
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-1 w-1/4 md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_mdiweb.svg"
                  alt="mdiweb"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  120 Miles{" "}
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-[3px] w-[55%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_uilcalender.svg"
                  alt="uilcalender"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Recruiting through Dec 31st
                </Text>
              </div>
            </div>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/editpost")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_icbaselineedit.svg" alt="icbaselineedit" />
            </Button>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/deletesuccessfully")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_materialsymbol.svg" alt="materialsymbol" />
            </Button>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                size="txtJudsonRegular30Black90001"
              >
                Material collection and sorting volunteer
              </Text>
              <Text
                className="text-black-900_01 text-xl"
                size="txtJudsonRegular20Black90001"
              >
                ConnectFor
              </Text>
              <div className="flex flex-row gap-[30px] items-start justify-start mt-4 w-[29%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_group.svg"
                  alt="group"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Ahmedabad
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-1 w-1/4 md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_mdiweb.svg"
                  alt="mdiweb"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  120 Miles{" "}
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-[3px] w-[55%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_uilcalender.svg"
                  alt="uilcalender"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Recruiting through Dec 31st
                </Text>
              </div>
            </div>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/editpost")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_icbaselineedit.svg" alt="icbaselineedit" />
            </Button>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/deletesuccessfully")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_materialsymbol.svg" alt="materialsymbol" />
            </Button>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                size="txtJudsonRegular30Black90001"
              >
                Material collection and sorting volunteer
              </Text>
              <Text
                className="text-black-900_01 text-xl"
                size="txtJudsonRegular20Black90001"
              >
                ConnectFor
              </Text>
              <div className="flex flex-row gap-[30px] items-start justify-start mt-4 w-[29%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_group.svg"
                  alt="group"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Ahmedabad
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-1 w-1/4 md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_mdiweb.svg"
                  alt="mdiweb"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  120 Miles{" "}
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[3px] mt-[3px] w-[55%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_uilcalender.svg"
                  alt="uilcalender"
                />
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtJudsonRegular20Black90001"
                >
                  Recruiting through Dec 31st
                </Text>
              </div>
            </div>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/editpost")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_icbaselineedit.svg" alt="icbaselineedit" />
            </Button>
            <Line className="self-center h-0.5 bg-white-A700_87 w-full" />
            <Button
              className="common-pointer border-2 border-deep_purple-300 border-solid flex flex-1 h-10 items-center justify-center w-full"
              onClick={() => navigate("/deletesuccessfully")}
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_materialsymbol.svg" alt="materialsymbol" />
            </Button>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[157px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UserDashboardTwoPage;
