import Vue from "vue";
import Router from "vue-router";
import UserWantToConnectToGovernment from "./views/UserWantToConnectToGovernment";
import UserWantToConnectToCorporation from "./views/UserWantToConnectToCorporation";
import UserWantToConnectToUniversity from "./views/UserWantToConnectToUniversity";
import FillInformationForGovernment from "./views/FillInformationForGovernment";
import FillInformationForPayslip from "./views/FillInformationForPayslip";
import DigitalNationalIdDoc from "./views/DigitalNationalIdDocument";
import PayslipFromCompany from "./views/PayslipFromCompany";
import DigitalTranscript from "./views/DigitalTranscript";
import Home from "./views/Home.vue";
import Login from "./views/Login";
import RegisterSuccess from "./views/RegisterSuccess";
import ConnectedUser from "./views/ConnectedUser";
import UserDashboard from "./views/UserDashboard";
import MyWallet from "./views/MyWallet";
import UserRegistration from "./views/UserRegistration";
import UserRequestCompany from "./views/UserRequestCompany";
import UserRequestGovernment from "./views/UserRequestGovernment";
import UserRequestUniversity from "./views/UserRequestUniversity";
import UserSendRequestSuccessfully from "./views/UserSendRequestSuccessfully";
import PartnerChannel from "./views/PartnerChannel";
import TranscriptRequestForm from "./views/TranscriptRequestForm";
import JobApplicationForm from "./views/JobApplicationForm";
import VerifyJobApplicationForm from "./views/VerifyJobApplicationForm";
import VerifyTranscriptRequestForm from "./views/VerifyTranscriptRequestForm";
import UserNotification from "./views/UserNotification";
import OpenCompanyDocument from "./views/OpenCompanyDocument";
import OpenEducationDocument from "./views/OpenEducationDocument";
import OpenGovernmentDocument from "./views/OpenGovernmentDocument";
import SiteMap from "./views/Sitemap";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user-dashboard",
      name: "userDashboard",
      component: UserDashboard
    },
    {
      path: "/sitemap",
      name: "siteMap",
      component: SiteMap
    },
    {
      path: "/user-notification",
      name: "userNotification",
      component: UserNotification
    },
    {
      path: "/open-company-document",
      name: "openCompanyDocument",
      component: OpenCompanyDocument
    },
    {
      path: "/open-education-document",
      name: "openEducationDocument",
      component: OpenEducationDocument
    },
    {
      path: "/open-government-document",
      name: "openGovernmentDocument",
      component: OpenGovernmentDocument
    },
    {
      path: "/my-wallet",
      name: "myWallet",
      component: MyWallet
    },
    {
      path: "/digital-national-id-doc",
      name: "digitalNationalIdDoc",
      component: DigitalNationalIdDoc
    },
    {
      path: "/payslip-from-company",
      name: "payslipFromCompany",
      component: PayslipFromCompany
    },
    {
      path: "/digital-transcript",
      name: "digitalTranscript",
      component: DigitalTranscript
    },
    {
      path: "/job-application-form",
      name: "jobApplicationForm",
      component: JobApplicationForm
    },
    {
      path: "/verify-job-application-form",
      name: "verifyJobApplicationForm",
      component: VerifyJobApplicationForm
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register-success",
      name: "registerSuccess",
      component: RegisterSuccess
    },
    {
      path: "/user-registration",
      name: "userRegistration",
      component: UserRegistration
    },
    {
      path: "/user-want-to-connect-to-government",
      name: "userWantToConnectToGovernment",
      component: UserWantToConnectToGovernment
    },
    {
      path: "/user-want-to-connect-to-corporation",
      name: "userWantToConnectToCorporation",
      component: UserWantToConnectToCorporation
    },
    {
      path: "/user-want-to-connect-to-university",
      name: "userWantToConnectToUniversity",
      component: UserWantToConnectToUniversity
    },
    {
      path: "/user-send-request-successfully",
      name: "userSendRequestSuccessfully",
      component: UserSendRequestSuccessfully
    },
    {
      path: "/connected-user",
      name: "connectedUser",
      component: ConnectedUser
    },
    {
      path: "/user-request-government",
      name: "userRequestGovernment",
      component: UserRequestGovernment
    },
    {
      path: "/user-request-company",
      name: "userRequestCompany",
      component: UserRequestCompany
    },
    {
      path: "/user-request-university",
      name: "userRequestUniversity",
      component: UserRequestUniversity
    },
    {
      path: "/fill-information-for-government",
      name: "fillInformationForGovernment",
      component: FillInformationForGovernment
    },
    {
      path: "/fill-information-for-payslip",
      name: "fillInformationForPayslip",
      component: FillInformationForPayslip
    },
    {
      path: "/partner-channel",
      name: "partnerChannel",
      component: PartnerChannel
    },
    {
      path: "/transcript-request-form",
      name: "transcriptRequestForm",
      component: TranscriptRequestForm
    },
    {
      path: "/verify-transcript-request-form",
      name: "verifyTranscriptRequestForm",
      component: VerifyTranscriptRequestForm
    }
  ]
});
/* {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/!* webpackChunkName: "about" *!/ "./views/About.vue")
    }*/
