import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const OppdetailsPage = () => {
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
            className="sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
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
            Sign In
          </Button>
        </div>
        <div className="h-[1320px] sm:h-[1377px] md:h-[1783px] max-w-[1275px] mt-[62px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-[30px] h-full items-center justify-start ml-[35px] mt-[442px] w-[4%]">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[25px]"
                src="images/img_globe.svg"
                alt="globe"
              />
              <Img
                className="h-[42px] mt-3.5 w-[43px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Img
                className="h-[13px] mt-[18px]"
                src="images/img_calendar.svg"
                alt="calendar"
              />
            </div>
            <div className="flex flex-col h-6 items-center justify-start p-[3px] w-6">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col gap-[33px] h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group8.svg')" }}
          >
            <div className="sm:h-48 md:h-[156px] h-[169px] mt-[23px] relative w-[95%] md:w-full">
              <div className="absolute flex flex-col md:gap-10 gap-[76px] h-full inset-y-[0] items-center justify-start left-[27%] my-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtJudsonBold40"
                >
                  CONNECTFOR
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtJudsonRegular40"
                >
                  Recruiting through Dec 31st
                </Text>
              </div>
              <div className="absolute h-[75px] inset-x-[0] mx-auto top-1/4 w-full">
                <Text
                  className="m-auto md:text-5xl text-[64px] text-white-A700"
                  size="txtJudsonBold64"
                >
                  {" "}
                  Material collection and sorting volunteer
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[64px] text-white-A700 w-max"
                  size="txtJudsonBold64"
                >
                  {" "}
                  Material collection and sorting volunteer
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-center justify-start mb-[93px] w-full">
              <Button
                className="common-pointer !text-white-A700 border border-gray-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[468px] sm:min-w-full rounded-[37px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/emailsuccessfully")}
                color="deep_purple_300"
                size="md"
                variant="fill"
              >
                Express Interest
              </Button>
              <div className="flex flex-col justify-start w-full">
                <Line className="bg-white-A700 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-end justify-start mt-[15px] w-[66%] md:w-full">
                  <Text
                    className="mb-[3px] md:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtJudsonRegular32"
                  >
                    Opportunity Details
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtJudsonBold40"
                  >
                    About this Opportunity
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[76px] mt-0.5 w-[93%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJudsonRegular24"
                  >
                    Ongoing
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtJudsonRegular32"
                  >
                    The collection involves the conduction of collection drives
                    with potential stakeholders through making arrangements such
                    as coordination, preparation of collection boxes, placement
                    of boxes, orientations in cases of educational institutes,
                    and transportation (before & after collection).
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[76px] mt-2.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtJudsonRegular24"
                >
                  In-Person
                </Text>
                <Text
                  className="md:ml-[0] ml-[76px] mt-[19px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtJudsonRegular24"
                >
                  Recruiting through Dec 31st
                </Text>
                <Text
                  className="md:ml-[0] ml-[75px] mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtJudsonRegular24"
                >
                  <>
                    Sarkhej - Gandhinagar Highway, Ahmedabad, <br />
                    380051, IN
                  </>
                </Text>
                <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start ml-2.5 md:ml-[0] mt-[3px] w-[99%] md:w-full">
                  <Img
                    className="h-[255px] sm:h-auto md:mt-0 mt-[86px] object-cover w-[29%] md:w-full"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtJudsonRegular32"
                  >
                    <>
                      Sort collected items such as clothes, footwear, books,
                      stationery, home utility decor, etc. into various
                      categories. All volunteers have their own unique delight
                      in sorting items as some are interested in knowing about
                      new books or CDs, some in knowing about various cloth
                      pieces or accessories, some are interested in games &
                      toys, etc. which makes this process exciting to each
                      volunteer.
                      <br />
                      <br />
                      Duration 2 months
                      <br />
                      <br />
                      Frequency: 3 hours weekly
                      <br />
                      <br />
                      Mode: Offline in Ahmedabad
                    </>
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[387px] mt-6 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtJudsonBold32"
                >
                  Note: This is an unpaid volunteering opportunity.
                </Text>
                <Line className="bg-white-A700 h-px md:ml-[0] ml-[371px] mr-[33px] mt-[29px] w-[67%]" />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-[189px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default OppdetailsPage;
