import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withApollo } from "react-apollo";

import Navigation from "./components/common/Navigation";
import PrivateRoute from "./components/common/PrivateRoute";
import Footer from "./components/common/Footer";
import Spinner from "./components/common/Spinner";
import FeedbackResponse from "./components/feedback/Feedback";
import Success from "./components/common/success/Success";
import Response from "./components/response/Response";
import NotFound from "./components/common/error/NotFound";
import DashboardLayout from "./components/dashboard/layouts/DashboardLayout";
import ContextProvider from "./Provider";

const Signup = React.lazy(() => import("./components/auth/signup/Signup"));

const Signin = React.lazy(() => import("./components/auth/siginin/Signin"));

const userDashboard = React.lazy(() =>
  import("./components/dashboard/Dashboard")
);

const ProfileSettings = React.lazy(() =>
  import("./components/profile/ProfilePage")
);

const CreateSurvey = React.lazy(() =>
  import("./components/survey/CreateSurvey")
);

const Survey = React.lazy(() => import("./components/dashboard/Survey"));

const ResetPassword = React.lazy(() =>
  import("./components/auth/resetPassword/ResetPassword")
);

const ResetPasswordConfirmation = React.lazy(() =>
  import("./components/auth/resetPassword/ResetPasswordConfirmation")
);

const NewPassword = React.lazy(() =>
  import("./components/auth/resetPassword/NewPassword")
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
        <ContextProvider>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/verify_account/:verifyToken"
              component={Navigation}
            />
            <Route exact path="/layout" component={DashboardLayout} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/login" component={Signin} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route
              exact
              path="/resetPasswordConfirmation"
              component={ResetPasswordConfirmation}
            />
            <Route
              exact
              path="/password_reset/:resetToken"
              component={NewPassword}
            />
            <PrivateRoute
              exact
              path="/create_survey"
              component={CreateSurvey}
            />
            <PrivateRoute exact path="/view_survey" component={Survey} />
            <PrivateRoute exact path="/" component={userDashboard} />
            <PrivateRoute exact path="/profile" component={ProfileSettings} />
            <Route path="/take_survey/:surveyId" component={FeedbackResponse} />
            <Route path="/success" component={Success} />
            <Route exact path="/survey/:surveyId" component={Response} />
            <Route exact component={NotFound} />
          </Switch>
        </ContextProvider>
      </React.Suspense>
      <Footer />
    </Router>
  );
}

export default withApollo(App);
