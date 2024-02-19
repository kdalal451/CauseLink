import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Postsuccessfully = React.lazy(() => import("pages/Postsuccessfully"));
const Posteditedsuccessfully = React.lazy(
  () => import("pages/Posteditedsuccessfully"),
);
const Deletesuccessfully = React.lazy(() => import("pages/Deletesuccessfully"));
const Emailsuccessfully = React.lazy(() => import("pages/Emailsuccessfully"));
const UserDashboardThree = React.lazy(() => import("pages/UserDashboardThree"));
const FornewpostTwo = React.lazy(() => import("pages/FornewpostTwo"));
const FAQsTwo = React.lazy(() => import("pages/FAQsTwo"));
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const UserDashboardTwo = React.lazy(() => import("pages/UserDashboardTwo"));
const Editpost = React.lazy(() => import("pages/Editpost"));
const Fornewpost = React.lazy(() => import("pages/Fornewpost"));
const RegisterFour = React.lazy(() => import("pages/RegisterFour"));
const RegisterThree = React.lazy(() => import("pages/RegisterThree"));
const RegisterTwo = React.lazy(() => import("pages/RegisterTwo"));
const RegisterFive = React.lazy(() => import("pages/RegisterFive"));
const Username = React.lazy(() => import("pages/Username"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const RegisterOrg = React.lazy(() => import("pages/RegisterOrg"));
const HomeTwo = React.lazy(() => import("pages/HomeTwo"));
const Oppdetails = React.lazy(() => import("pages/Oppdetails"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Search = React.lazy(() => import("pages/Search"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/oppdetails" element={<Oppdetails />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/registerorg" element={<RegisterOrg />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/username" element={<Username />} />
          <Route path="/registerfive" element={<RegisterFive />} />
          <Route path="/registertwo" element={<RegisterTwo />} />
          <Route path="/registerthree" element={<RegisterThree />} />
          <Route path="/registerfour" element={<RegisterFour />} />
          <Route path="/fornewpost" element={<Fornewpost />} />
          <Route path="/editpost" element={<Editpost />} />
          <Route path="/userdashboardtwo" element={<UserDashboardTwo />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/faqstwo" element={<FAQsTwo />} />
          <Route path="/fornewposttwo" element={<FornewpostTwo />} />
          <Route path="/userdashboardthree" element={<UserDashboardThree />} />
          <Route path="/emailsuccessfully" element={<Emailsuccessfully />} />
          <Route path="/deletesuccessfully" element={<Deletesuccessfully />} />
          <Route
            path="/posteditedsuccessfully"
            element={<Posteditedsuccessfully />}
          />
          <Route path="/postsuccessfully" element={<Postsuccessfully />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
