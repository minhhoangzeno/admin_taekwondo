import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
// import serviceTypeReducer from "./serviceTypeSlice";
// import paymentInquiryReducer from "./paymentInquirySlice";
// import paymentReducer from "./paymentSlice";
// import searchTransactionReducer from "./searchTransactionSlice";
// import linkWalletReducer from "./linkWalletSlice";
// import checkWalletCodeReducer from "./checkwalletcodeSlice";
// import searchWalletCustReducer from "./searchWalletCustSlice";
// import serviceAllReducer from './serviceAllSlice';
import loginReducer from './loginSlice';
import blogReducer from './blogSlice';
import authReducer from './authSlice';
//USE TOOLKIT
const rootReducer = {
    reducer: {
        progress: progressReducer,
        blog: blogReducer,
        auth: authReducer,
        // serviceType: serviceTypeReducer,
        // serviceAll: serviceAllReducer,
        // paymentInquiry: paymentInquiryReducer,
        // payment: paymentReducer,
        // searchTransactionReducer: searchTransactionReducer,
        // checkWalletCodeSlice: checkWalletCodeReducer,
        // linkWalletReducer: linkWalletReducer,
        // searchWalletCustReducer: searchWalletCustReducer,
        login: loginReducer
    },
};

export const store = configureStore(rootReducer);
