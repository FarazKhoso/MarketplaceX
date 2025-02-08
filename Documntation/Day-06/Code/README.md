# Day 6 - Deployment Preparation and Staging Environment Setup

## Overview
This document outlines the deployment process for our e-commerce marketplace, including setting up the staging environment, configuring environment variables, and conducting deployment testing.

## 📌 Deployment Strategy
We deployed the application on **Vercel** to simulate a production-like environment.

### ✅ Deployment Steps:
1. **Hosting Platform Selection:** Used **Vercel** for easy deployment.
2. **Environment Variable Configuration:** Securely stored API keys & credentials.
3. **Connected GitHub Repository:** Automatic builds triggered on every push.
4. **Staging Deployment:** Verified that all functionalities work in the staging environment.

📂 **Deployed Staging Link:** [MarketplaceX Staging](https://marketplace-x-by-faraz.vercel.app)

## 🔧 Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `API_KEY=your_api_key`

## 🔍 Staging Environment Testing
We conducted extensive testing in the staging environment to ensure everything is functioning correctly before going live.

### ✅ Staging Test Cases Conducted:
- **Deployment Success:** Verified that the site loads without build errors.
- **Environment Variables:** Ensured API keys and configurations are working.
- **Functional Testing:** Validated product listings, cart operations, and checkout flow.
- **Performance Testing:** Used **GTmetrix** and **Lighthouse** for analyzing speed and responsiveness.

📂 **Test Case Report:** [Download CSV](./Day6_Deployment_Testing_Report.csv)

## 🚀 Performance Report
### ✅ Key Performance Metrics (GTmetrix & Lighthouse):
- **Performance Score:** 75%
- **Structure Score:** 94%
- **Largest Contentful Paint (LCP):** 1.3s ✅
- **Total Blocking Time (TBT):** 0ms ✅
- **Cumulative Layout Shift (CLS):** 0.45 ❌ (Needs Fixing)

📂 **Performance Report Screenshot Attached**

## 📌 Submission Checklist
✔ **Deployed Staging Environment Link Attached**
✔ **Environment Variables Configured & Secured**
✔ **Testing Report (CSV Format) Uploaded**
✔ **Performance Report (Lighthouse / GTmetrix) Uploaded**
✔ **Screenshots of Deployment & Testing Attached**
✔ **README.md file created**
✔ **GitHub Repository Updated**
✔ **Submission Form Filled**

## 🚀 Next Steps
- Optimize CLS issue for a smoother user experience.
- Monitor performance and security regularly.
- Prepare final documentation for production deployment.

---
📌 **Submission Deadline:** 22 January 2025 - 11:59 AM (Afternoon)

💡 If any changes or improvements are needed, feel free to update the reports accordingly!
